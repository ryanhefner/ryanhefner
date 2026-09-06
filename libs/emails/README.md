# emails

This library was generated with [Nx](https://nx.dev).

## Styling

All templates share a neutral palette and a Suisse Intl-first sans-serif font
stack, including headings, buttons, and Markdown code. The theme lives in
`libs/theme`: shared tokens drive both the main site and emails, with an
email-safe adapter at `@ryanhefner/theme/email`. Buttons use a simple unfilled
outline. The adapter preserves the sans-serif-only, neutral email styling.

The emails do not embed or download font files. Suisse Intl is used when
available on the recipient's device; otherwise the stack falls back to Arial,
Helvetica, or the client's sans-serif font.

## Previewing emails

Run `pnpm email:dev` from the workspace root to start Chakra Email Preview at
<http://127.0.0.1:4100>. Templates and representative preview props are
discovered from `src/lib` using `chakra-email.config.ts`.

## Rendering a newsletter from Markdown

Use `renderNewsletterEmailFromMarkdownFile` on the server to reference a
Markdown file. Relative string paths are resolved from the current working
directory; a file URL can be used when the Markdown lives beside a module.

```ts
import { renderNewsletterEmailFromMarkdownFile } from 'emails'

const html = await renderNewsletterEmailFromMarkdownFile({
  markdownFile: new URL('./newsletter.md', import.meta.url),
  title: 'Notes from the workbench',
  preheader: 'New work and recent finds from All Play.',
  issueUrl: 'https://allplay.fm/newsletter/notes-from-the-workbench',
  unsubscribeUrl: subscriber.unsubscribeUrl,
})
```

Raw HTML in Markdown is intentionally ignored. Headings, paragraphs, links,
lists, quotes, code, images, dividers, emphasis, and tables are mapped to
email-safe Chakra Email components.

## Running unit tests

Run `nx test emails` to execute the unit tests via [Vitest](https://vitest.dev/).
