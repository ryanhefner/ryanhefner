# Postkit

Postkit is a Chakra-based React component library for articles and blog posts.
It includes accessible carousels, video and audio players, author cards, calls
to action, newsletter signups, link and social-post previews, syndication
references, share actions, bar and line charts, an MDX component map, a
composable Remark preset, and a literal-only Markdown directive transformer.

## Site setup

Mount `PostkitProvider` near the application root. It owns the Chakra provider,
layers Postkit's default component theme over Chakra's default system, and
provides optional link resolution to every `LinkPreview`.

```tsx
import { PostkitProvider } from '@postkit/react';

export function App({ children }: { children: React.ReactNode }) {
  return <PostkitProvider>{children}</PostkitProvider>;
}
```

Pass the site's existing Chakra `SystemContext` through `system`. Postkit
preserves its tokens, conditions, utilities, and global styles, then adds the
Postkit component recipes. The layering order is:

1. Postkit defaults.
2. The site-wide Chakra system.
3. The `theme` supplied to the nearest `PostkitProvider`.

That makes the same recipe keys useful at two levels: a site can establish
global defaults for Postkit components, and an article or documentation area
can narrow those defaults within its Postkit context.

```tsx
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import {
  createPostkitSystem,
  createPostkitTheme,
  PostkitCarousel,
  PostkitProvider,
} from '@postkit/react';

const baseSiteSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        articleAccent: { value: '#663399' },
      },
      fonts: {
        body: { value: '"Inter", sans-serif' },
        heading: { value: '"Newsreader", serif' },
        mono: { value: '"JetBrains Mono", monospace' },
      },
    },
  },
});

const siteSystem = createPostkitSystem(
  baseSiteSystem,
  createPostkitTheme({
    carousel: {
      base: {
        root: {
          borderRadius: '2xl',
          boxShadow: 'sm',
        },
      },
    },
    prose: {
      base: {
        h1: {
          fontSize: '6xl',
        },
        h2: {
          fontSize: '4xl',
        },
        p: {
          fontSize: 'lg',
        },
      },
    },
  }),
);

const documentationTheme = createPostkitTheme({
  typography: {
    heading: '"IBM Plex Serif", serif',
  },
  carousel: {
    base: {
      root: {
        borderRadius: 'md',
        boxShadow: 'none',
      },
    },
  },
});

export function App({ documentation }: { documentation: React.ReactNode }) {
  return (
    <ChakraProvider value={siteSystem}>
      {/* Uses the site-wide Carousel defaults. */}
      <PostkitCarousel items={[]} />

      <PostkitProvider system={siteSystem} theme={documentationTheme}>
        {/* Carousels here use the documentation-context override. */}
        {documentation}
      </PostkitProvider>
    </ChakraProvider>
  );
}
```

### Typography

Postkit uses Chakra's three standard font tokens consistently:

- `fonts.body` for every Postkit component root, prose, descriptions, labels,
  and controls.
- `fonts.heading` for `h1` through `h6` and heading-like component slots such
  as titles, card titles, questions, and pull quotes.
- `fonts.mono` for inline code, code blocks, terminals, diffs, and file trees.

Configure those tokens in the site's Chakra system, as shown above, when the
fonts should apply everywhere. Use the `typography` shorthand when a
`PostkitProvider` context should select different stacks:

```tsx
const editorialTheme = createPostkitTheme({
  typography: {
    body: '"Source Sans 3", sans-serif',
    heading: '"Source Serif 4", serif',
    mono: '"Source Code Pro", monospace',
  },
});

<PostkitProvider system={siteSystem} theme={editorialTheme}>
  {article}
</PostkitProvider>;
```

Each role is optional and independently configurable. A component-specific
recipe override remains the final layer, so an exceptional heading can still
select another token or a literal font stack:

```tsx
createPostkitTheme({
  typography: {
    heading: '"Source Serif 4", serif',
  },
  prose: {
    base: {
      h1: { fontFamily: 'display' },
    },
  },
});
```

`createPostkitTheme` offers typed typography and component-specific overrides for
`prose`,
`appearsOn`, `audio`, `authorCard`, `callToAction`, `carousel`, `chart`,
`figure`, `linkPreview`, `newsletterSignup`, `shareActions`, `socialPost`, and
`video`. For lower-level composition, `postkitRecipeKeys` exposes the stable
Chakra slot-recipe keys and `createPostkitSystem` performs the same merge
outside React.

Register the component map with the site's MDX runtime:

```tsx
import { createPostkitMdxComponents } from '@postkit/react';

export const mdxComponents = createPostkitMdxComponents({
  components: {
    h2: ArticleHeading,
  },
});
```

By default the map supplies Chakra-backed components for:

- Headings `h1` through `h6`, paragraphs, links, blockquotes, strong,
  emphasis, strikethrough, horizontal rules, and line breaks.
- Ordered, unordered, and task lists.
- Inline code, code blocks, keyboard input, highlights, and small text.
- GFM tables and their sections, rows, headers, and cells.
- Images, figures, captions, footnote elements, definition lists, details,
  and summaries.
- Every Postkit rich component.

Each semantic element consumes its matching `prose` slot. Site component-map
entries still take final precedence, so a framework can replace any element
without disabling the rest of the prose system. The map also exposes
`wrapper: PostkitProse`; MDX runtimes with wrapper support use it as the prose
root automatically.

The root emits `data-postkit-component="Prose"`, semantic elements emit
`data-postkit-prose-element`, and rich components emit their own
`data-postkit-component` value. These attributes provide a stable CSS escape
hatch in addition to the typed recipe APIs.

Article authors can then use typed MDX declarations:

```mdx
<Video
  src="/media/interview.mp4"
  title="Interview with Ada"
  poster="/media/interview.jpg"
  caption="Recorded in Brooklyn."
/>

<Chart
  title="Monthly readers"
  type="line"
  data={[
    { label: 'Jan', readers: 1200 },
    { label: 'Feb', readers: 1840 },
  ]}
  series={[{ key: 'readers', label: 'Readers' }]}
  showTable
/>
```

## Standard article blocks

`AuthorCard`, `CallToAction`, and `NewsletterSignup` cover common
article-level identity and conversion patterns while keeping authored content
portable:

```mdx
<AuthorCard
  name="Ada Lovelace"
  role="Contributing editor"
  avatarSrc="/authors/ada.jpg"
  href="/authors/ada"
  links={[{ label: 'Archive', href: '/authors/ada/archive' }]}
>
  Ada writes about durable publishing systems.
</AuthorCard>

<CallToAction
  eyebrow="Continue reading"
  title="Explore the field guide"
  primaryLabel="Open the guide"
  primaryHref="/guide"
  secondaryLabel="View examples"
  secondaryHref="/examples"
>
  A practical reference for the full publishing workflow.
</CallToAction>

<NewsletterSignup
  title="Get the field notes"
  list="weekly"
  privacy="Unsubscribe at any time."
/>
```

Newsletter submission is deliberately host-owned. Configure either an async
adapter or a native form endpoint on `PostkitProvider`; documents can select a
host-defined `list`, but cannot supply an endpoint or callback:

```tsx
<PostkitProvider
  newsletter={{
    subscribe: async ({ email, list }) => {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, list }),
      });
      if (!response.ok) throw new Error('Unable to subscribe.');
      return { message: 'Check your inbox.' };
    },
  }}
>
  {children}
</PostkitProvider>
```

For a provider that accepts regular form submissions, set `action`, `method`,
field-name overrides, and optional `hiddenFields` instead. An unconfigured
form remains visible but disabled, which makes missing host setup explicit.
Sites can also replace any of these names in the MDX component map when their
product requires a fully custom implementation.

## Link previews and unfurling

Explicit `metadata` keeps `PostkitLinkPreview` deterministic and always takes
precedence. Resolve links in a server, build, or trusted editor process with
`@postkit/unfurl`, then pass the normalized result to the component:

```tsx
import { PostkitLinkPreview } from '@postkit/react';
import {
  createIframelyResolver,
  createLinkResolverRegistry,
  createOpenGraphsResolver,
} from '@postkit/unfurl';

const resolver = createLinkResolverRegistry({
  resolvers: [
    createOpenGraphsResolver({
      apiKey: process.env.OPENGRAPHS_API_KEY,
    }),
    createIframelyResolver({
      apiKey: process.env.IFRAMELY_API_KEY!,
    }),
  ],
});

const metadata = await resolver.resolve('https://example.com/article');

export function Preview() {
  return (
    <PostkitLinkPreview
      href="https://example.com/article"
      metadata={metadata}
      presentation="card"
      size="lg"
      images="carousel"
    />
  );
}
```

The provider can also resolve links whose metadata was not embedded. A custom
callback is useful for calling a same-origin application endpoint without
shipping provider credentials to the browser:

```tsx
import { PostkitProvider } from '@postkit/react';

const resolveLink = async (url, options) => {
  const response = await fetch('/api/unfurl', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      url,
      provider: options?.provider,
      force: options?.force,
    }),
    signal: options?.signal,
  });

  if (!response.ok) throw new Error('Unable to resolve link metadata.');
  return response.json();
};

export function App({ children }) {
  return (
    <PostkitProvider resolver={resolveLink} defaultResolver="opengraphs">
      {children}
    </PostkitProvider>
  );
}
```

Alternatively, configure a resolver registry directly on the provider:

```tsx
<PostkitProvider
  resolvers={[openGraphs, iframely, customResolver]}
  defaultResolver="opengraphs"
  fallbackResolvers={['iframely']}
  onResolverError={(error, context) => reportError(error, context)}
>
  {children}
</PostkitProvider>
```

The `provider` prop on an individual `LinkPreview` overrides the configured
default. Without an explicit `metadata` value or a provider resolver,
`LinkPreview` retains its existing URL-only fallback. Built-in service
resolvers should only run in the browser when their credentials and endpoint
policy are safe to expose; a same-origin callback is the recommended runtime
configuration.

OpenGraphs is the registry default. A host can choose another global default,
or an authoring/publishing integration can override the provider for one link:

```ts
const resolver = createLinkResolverRegistry({
  resolvers: [openGraphs, iframely, embedly, microlink, customResolver],
  defaultProvider: 'microlink',
  fallbackProviders: ['opengraphs'],
});

const metadata = await resolver.resolve(url, { provider: 'iframely' });
```

Fallbacks are deliberately opt-in so a failure cannot unexpectedly consume
credits with another service. The built-in adapters cover OpenGraphs,
Iframely, Embedly, and Microlink; any object implementing `LinkResolver` can be
registered alongside them. `createCallbackResolver(id, callback)` adapts an
application callback for use outside `PostkitProvider`.

The component supports `inline`, `card`, `embed`, `media`, and `auto`
presentations. `size="sm"` produces a compact card, while a large card can use
`images="carousel"`. Auto prefers direct native video or audio, then an
isolated embed, then a card. External embeds are click-to-load by default,
render only validated iframe source URLs, and never inject the provider's raw
HTML.

## Social posts, sharing, and syndication

`SocialPost` uses the same provider resolver as `LinkPreview`. When OpenGraphs
returns structured `social` metadata, `presentation="auto"` renders a
service-branded native card. `presentation="embed"` can instead activate a
validated provider iframe; embeds are click-to-load by default.

```tsx
<PostkitSocialPost
  href="https://bsky.app/profile/ada.example/post/abc"
  presentation="auto"
  showMetrics
/>

<PostkitShareActions
  url="https://example.com/posts/launch"
  title="Launch notes"
  services={['native', 'copy', 'email', 'bluesky', 'linkedin']}
/>

<PostkitAppearsOn
  items={[
    {
      service: 'linegraph',
      label: 'Linegraph',
      url: 'https://linegraph.example/posts/launch',
      publishedAt: '2026-07-26T14:30:00Z',
      status: 'published',
    },
  ]}
  showDates
/>
```

### Live and captured social posts

`SocialPost` records resolution intent independently from its metadata:

- `resolution="live"` ignores embedded metadata and resolves the current post.
- `resolution="snapshot"` renders only the embedded snapshot.
- `resolution="snapshot-fallback"` renders embedded metadata when present and
  resolves live only when it is missing. This is the backward-compatible
  default.

Use `createPostkitSocialPostSnapshot` from `@postkit/unfurl` to preserve when
an authoring tool captured a post separately from when the resolver originally
fetched it:

```tsx
import {
  createPostkitSocialPostSnapshot,
  createOpenGraphsResolver,
} from '@postkit/unfurl';

const resolver = createOpenGraphsResolver();
const metadata = await resolver.resolve(
  'https://bsky.app/profile/ada.example/post/abc',
);
const snapshot = createPostkitSocialPostSnapshot(metadata);

<PostkitSocialPost
  href={metadata.url}
  metadata={snapshot}
  resolution="snapshot"
  snapshotInfo="auto"
/>;
```

The versioned envelope contains `capturedAt`, the resolver identity, the
normalized metadata, and—when known—`resolvedAt`, `cacheStrategy`, and
`cacheResult`.
`snapshotInfo="auto"` and `"visible"` render that provenance beneath the card;
`"hidden"` keeps it available to authoring tools without displaying it.
Existing normalized `metadata` values remain supported.

`PostkitProvider` includes a shared social-service registry. Pass
`socialServices` to add or override branding and share behavior once for
`SocialPost`, `ShareActions`, and `AppearsOn`:

```tsx
<PostkitProvider
  socialServices={{
    linegraph: {
      label: 'Linegraph',
      accent: '#6d5efc',
      createShareUrl: ({ url, title }) =>
        `https://linegraph.example/share?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title ?? '')}`,
    },
  }}
>
  {children}
</PostkitProvider>
```

`ShareActions` never loads third-party scripts. It uses the native share API,
the clipboard, email, a configured `createShareUrl`, or a custom async `share`
callback. Bluesky, Facebook, LinkedIn, Threads, and X have built-in web share
URLs; services without a universal web intent can be enabled through the
provider registry. `AppearsOn` renders publication destinations as
syndication relationships, keeping the origin article distinct from its
copies.

## Link routing

Markdown always declares destinations with `href`. Postkit renders links as
native anchors by default and offers a framework-neutral adapter for client
routers:

```tsx
import { createPostkitMdxComponents } from '@postkit/react';
import { Link } from 'some-router';

export const mdxComponents = createPostkitMdxComponents({
  link: {
    adapter: {
      component: Link,
      mapProps: ({ href, ...props }) => ({
        ...props,
        to: href,
      }),
    },
  },
});
```

The adapter receives internal document destinations. Absolute URLs, protocol
links such as `mailto:`, same-page hashes, downloads, and links with an
explicit non-default target remain native anchors. `isInternal` can replace
the default classifier, while `externalComponent` and
`openExternalInNewTab` customize native link behavior.

## Base Markdown setup

The base preset includes:

- GFM autolinks, footnotes, strikethrough, tables, and task lists.
- YAML and TOML frontmatter recognition.
- Markdown directives.
- Postkit directive-to-component transformation.

```ts
import { createPostkitRemarkPlugins } from '@postkit/react';

export const markdownOptions = {
  remarkPlugins: createPostkitRemarkPlugins(),
};
```

Sites can add plugins before or after the defaults, configure built-ins,
replace framework-provided equivalents, or disable a feature:

```ts
import remarkCustomHeading from './remark-custom-heading';
import {
  createPostkitRemarkPreset,
  type PostkitRemarkPresetOptions,
} from '@postkit/react';

const options: PostkitRemarkPresetOptions = {
  before: [remarkCustomHeading],
  gfm: { singleTilde: false },
  frontmatter: false,
  postkit: { output: 'mdx', strict: true },
  // A host framework can replace a default without changing its ordering:
  // overrides: { gfm: frameworkGfmPlugin },
};

export const { remarkPlugins, capabilities } =
  createPostkitRemarkPreset(options);
```

Each declaration lists the plugins required by its directive form through
`directiveRemarkPlugins`. This lets an editor or build system explain why a
component cannot be parsed instead of failing later during rendering.

## Plain Markdown directives

The default output is MDX JSX. Set `{ output: 'hast' }` for a renderer that
uses `data.hName` and `data.hProperties`, such as a configured
`react-markdown` pipeline.

```md
::postkit-video{src="/media/interview.mp4" title="Interview with Ada" caption="Recorded in Brooklyn."}

::postkit-audio{src="/media/episode.mp3" title="Episode 12" preload="metadata"}

::postkit-chart{title="Monthly readers" type="bar" data='[{"label":"Jan","readers":1200},{"label":"Feb","readers":1840}]' series='[{"key":"readers","label":"Readers"}]' showTable}

::postkit-carousel{label="Field notes" items='[{"image":{"src":"/media/ridge.jpg","alt":"A mountain ridge"},"title":"Day one"},{"title":"Day two","description":"Back at sea level."}]'}

::postkit-link-preview{href="https://example.com/article" provider="opengraphs" presentation="card" size="lg" images="carousel"}

::postkit-social-post{href="https://bsky.app/profile/ada.example/post/abc" provider="opengraphs" resolution="live" presentation="auto" showMetrics}

::postkit-share-actions{url="https://example.com/posts/launch" title="Launch notes" services='["native","copy","email","bluesky"]'}

::postkit-appears-on{label="Also published on" items='[{"service":"linegraph","url":"https://linegraph.example/posts/launch","status":"published"}]' showDates}

:::postkit-author-card{name="Ada Lovelace" role="Contributing editor" avatarSrc="/authors/ada.jpg" links='[{"label":"Archive","href":"/authors/ada/archive"}]'}
Ada writes about durable publishing systems.
:::

:::postkit-call-to-action{eyebrow="Continue reading" title="Explore the field guide" primaryLabel="Open the guide" primaryHref="/guide"}
A practical reference for the full publishing workflow.
:::

:::postkit-newsletter-signup{title="Get the field notes" list="weekly" privacy="Unsubscribe at any time."}
One thoughtful publishing note each week.
:::
```

Directive props are allowlisted by `postkitDeclarationManifest`. The plugin
emits string and boolean literals only—never authored JavaScript expressions.
Unknown, missing, or invalid props fail the site build by default. Sites can
use `{ strict: false }` during a staged schema migration, which drops unknown
props instead of rendering them.

## Multi-part styling

Every Postkit component resolves its exported Chakra slot recipe from the
active Postkit theme. Components share `sm`, `md`, and `lg` sizes; `outline`,
`subtle`, and `plain` variants; and an `unstyled` mode. Each component also
accepts a typed `slotStyles` object for one-off instance styling:

```tsx
<PostkitAudio
  src="/media/episode.mp3"
  title="Episode 12"
  size="lg"
  variant="subtle"
  slotStyles={{
    root: { borderRadius: '2xl' },
    title: { color: 'purple.600', letterSpacing: 'tight' },
    player: { opacity: 0.95 },
  }}
/>
```

The default theme, theme helper, recipes, stable recipe keys, and slot-name
constants are exported for type-safe composition:

```ts
import {
  createPostkitTheme,
  postkitAudioRecipe,
  postkitAudioSlots,
  postkitDefaultTheme,
  postkitRecipeKeys,
  type PostkitAudioSlot,
  type PostkitSlotStyles,
} from '@postkit/react';
```

Stable classes such as `.postkit-audio__root`,
`.postkit-audio__player`, and `.postkit-audio__caption` provide a CSS escape
hatch. `rootProps` can supply standard Chakra props and a site class name
without replacing the generated slot class.

## Integration boundary

`postkitDeclarationManifest` is intentionally independent from React. It gives
Prismark and other editors stable component names, directives, prop types, and
child modes without importing or executing web component code.

The bundled `@postkit/prismark` adapter exposes these declarations to
Prismark's property inspector and inert desktop preview. That preview remains
fail-closed and limited to packages bundled and integrity-pinned by the app;
published sites use the interactive React renderers.
