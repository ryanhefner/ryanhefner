# Postkit for Next.js

`@postkit/next` installs Postkit's article components into the
native Next.js MDX component map and routes internal Markdown links through
`next/link`.

```tsx
// mdx-components.tsx
import { createPostkitNextComponents } from '@postkit/next';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(): MDXComponents {
  return createPostkitNextComponents({
    components: {
      h2: ArticleHeading,
    },
  });
}
```

External URLs, protocol links, hashes, downloads, and explicit non-default
targets remain native anchors. Next-specific link props can be supplied
globally or derived for each destination:

```tsx
export function useMDXComponents(): MDXComponents {
  return createPostkitNextComponents({
    link: {
      linkProps: { prefetch: false },
      mapLinkProps: ({ href }) => ({
        scroll: !href.startsWith('/reference/'),
      }),
    },
  });
}
```

The consuming application owns its Chakra provider, theme, and Next.js image
configuration.
