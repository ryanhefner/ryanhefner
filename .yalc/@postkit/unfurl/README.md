# `@postkit/unfurl`

Provider-neutral link metadata resolution for Postkit renderers and publishing
pipelines. The package runs in a server, build, or trusted editor process; it
does not ship API keys or origin-fetching logic to article readers.

OpenGraphs is the default provider when a resolver registry is created:

```ts
import {
  createIframelyResolver,
  createLinkResolverRegistry,
  createOpenGraphsResolver,
} from '@postkit/unfurl';

export const linkResolver = createLinkResolverRegistry({
  resolvers: [
    createOpenGraphsResolver({
      apiKey: process.env.OPENGRAPHS_API_KEY,
    }),
    createIframelyResolver({
      apiKey: process.env.IFRAMELY_API_KEY!,
    }),
  ],
  fallbackProviders: ['iframely'],
});

const metadata = await linkResolver.resolve('https://example.com/article');
const alternate = await linkResolver.resolve('https://vimeo.com/123', {
  provider: 'iframely',
});
```

Adapters are included for:

- OpenGraphs (`https://unfurl.opengraphs.com/v1/resolve`)
- Iframely
- Embedly
- Microlink

Every adapter normalizes its response into `ResolvedLinkPreview`. Provider
markup is retained as `embed.rawHtml` for hosts with their own sanitization
boundary, but Postkit's React component only uses validated HTTP(S) media and
iframe source URLs.

Fallback providers are opt-in. This prevents an outage or malformed response
from unexpectedly consuming credits with another service.

## OpenGraphs response contract

Postkit sends a `GET` request to
`https://unfurl.opengraphs.com/v1/resolve` with `url`, and optionally
`maxwidth`, `maxheight`, and `force` query parameters. If `apiKey` is
configured, it sends `Authorization: Bearer <apiKey>`.

The canonical version-one envelope is exported as `OpenGraphsResponse`.
`resolver` identifies OpenGraphs; `data.provider` identifies the upstream
content or oEmbed provider:

```json
{
  "schemaVersion": 1,
  "requestId": "1d6275d3-c72a-4215-ad9d-1a7b809a9bf5",
  "resolver": {
    "id": "opengraphs",
    "name": "OpenGraphs",
    "url": "https://opengraphs.com/"
  },
  "data": {
    "canonicalUrl": "https://example.com/posts/launch",
    "title": "Launch notes",
    "description": "What shipped and why.",
    "siteName": "Example",
    "author": "Ada Lovelace",
    "authorUrl": "https://example.com/authors/ada",
    "favicon": "https://example.com/favicon.ico",
    "images": [
      {
        "url": "https://example.com/launch.jpg",
        "alt": "The launch",
        "type": "image/jpeg",
        "width": 1200,
        "height": 630
      }
    ],
    "audio": [
      {
        "url": "https://example.com/launch.mp3",
        "type": "audio/mpeg",
        "durationSeconds": 185
      }
    ],
    "video": [
      {
        "url": "https://example.com/launch.mp4",
        "type": "video/mp4",
        "width": 1280,
        "height": 720,
        "poster": "https://example.com/launch-poster.jpg"
      }
    ],
    "embed": {
      "type": "video",
      "src": "https://player.example.com/launch",
      "rawHtml": null,
      "thumbnail": {
        "url": "https://example.com/launch-poster.jpg",
        "alt": "Launch video",
        "type": "image/jpeg",
        "width": 1280,
        "height": 720
      },
      "width": 1280,
      "height": 720,
      "aspectRatio": 1.7777777778,
      "title": "Launch video"
    },
    "provider": {
      "id": "example",
      "name": "Example",
      "url": "https://example.com/"
    },
    "social": {
      "service": "bluesky",
      "url": "https://bsky.app/profile/ada.example/post/abc",
      "author": {
        "name": "Ada Lovelace",
        "handle": "@ada.example",
        "url": "https://bsky.app/profile/ada.example",
        "avatar": "https://cdn.example.com/ada.jpg"
      },
      "text": "The launch is live.",
      "publishedAt": "2026-07-26T14:30:00Z",
      "images": [
        {
          "url": "https://cdn.example.com/social-launch.jpg",
          "alt": "Launch announcement",
          "type": null,
          "width": 1200,
          "height": 675
        }
      ],
      "video": [],
      "metrics": {
        "replies": 4,
        "reposts": 12,
        "likes": 80,
        "shares": 2
      },
      "quotedPost": {
        "service": "bluesky",
        "url": "https://bsky.app/profile/example.com/post/xyz",
        "author": {
          "name": "Example",
          "handle": "@example.com",
          "url": null,
          "avatar": null
        },
        "text": "Original announcement.",
        "publishedAt": null,
        "images": [],
        "video": [],
        "metrics": null
      }
    }
  },
  "cache": {
    "strategy": "use",
    "result": "hit",
    "fetchedAt": "2026-07-26T14:31:00Z",
    "expiresAt": "2026-07-26T15:31:00Z",
    "maxAgeSeconds": 3600
  },
  "resolution": {
    "kind": "metadata",
    "requestedMode": "auto",
    "requestedUrl": "https://example.com/posts/launch",
    "requester": "GENERIC",
    "upstreamError": null
  }
}
```

The normalized `ResolvedLinkPreview` preserves the request ID, cache strategy
and result, resolution context, resolver identity, and upstream provider. An
embed thumbnail becomes `embed.thumbnail`; `durationSeconds` remains explicit;
zero-valued metrics and `maxAgeSeconds: 0` are retained. Unsupported schema
versions or a non-OpenGraphs resolver identity are rejected.

The adapter still accepts the legacy flat response without the `data`
envelope. For compatibility it recognizes these aliases:

- `canonical` or `url` for `canonicalUrl`; `site` for `siteName`;
  `author_url` for `authorUrl`; and `logo` for `favicon`.
- A single `image`, `audio`, or `video` item instead of an array. Media URLs
  may use either `url` or `src`; legacy `duration` maps to
  `durationSeconds`.
- `oembed` for `embed`, `html` for `embed.rawHtml`, and `url` for
  `embed.src`. Raw HTML is retained but never injected by Postkit.
- `social.network` for `social.service`, `postUrl` for `social.url`,
  `content` for `social.text`, `published_at` for `publishedAt`,
  `author.username` for `author.handle`, and `author.image` for
  `author.avatar`.
- `quoted_post` for `quotedPost`. Invalid or non-HTTP(S) URLs are discarded,
  and normalization stops after one quoted post.
- `cache` either beside `data` or within it.

Postkit always returns normalized `images`, `audio`, `video`, and social media
arrays, even when they are empty. If no valid canonical URL is returned, the
requested URL becomes the normalized URL.

## Versioned social-post snapshots

Authoring tools can freeze a normalized result without confusing the capture
time with the resolver's cache timestamp:

```ts
import {
  createOpenGraphsResolver,
  createPostkitSocialPostSnapshot,
} from '@postkit/unfurl';

const metadata = await createOpenGraphsResolver().resolve(postUrl);
const snapshot = createPostkitSocialPostSnapshot(metadata);
```

The serialized shape is:

```json
{
  "schemaVersion": 1,
  "capturedAt": "2026-07-26T18:31:00.000Z",
  "resolvedAt": "2026-07-26T18:29:42.000Z",
  "cacheStrategy": "refresh",
  "cacheResult": "hit",
  "resolver": {
    "id": "opengraphs"
  },
  "metadata": {
    "...": "ResolvedLinkPreview"
  }
}
```

`capturedAt` is always present and records when the authoring tool committed
the snapshot. `resolvedAt`, `cacheStrategy`, and `cacheResult` are copied from
resolver cache metadata when available. `isPostkitSocialPostSnapshot`
recognizes supported envelopes without treating future schema versions as
current data.

## Custom callbacks

Applications can adapt a callback to the resolver contract:

```ts
import { createCallbackResolver } from '@postkit/unfurl';

const resolver = createCallbackResolver('site-unfurl', async (url, options) => {
  const response = await fetch('https://example.com/api/unfurl', {
    method: 'POST',
    body: JSON.stringify({ url }),
    signal: options?.signal,
  });

  return response.json();
});
```

The callback must return a normalized `ResolvedLinkPreview`. Postkit forwards
the selected provider, abort signal, preferred dimensions, and force-refresh
option.
