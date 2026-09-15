# Shared site and email theme

`src/tokens.ts` is the source of truth for the main Ryan Hefner site's fonts,
palette, sizes, semantic colors, and heading/button weights.

- `@ryanhefner/theme` exports data only.
- `@ryanhefner/theme/site` builds the Chakra UI system, including the site's
  recipes, global CSS, and existing light/dark semantics.
- `@ryanhefner/theme/email` adapts the same tokens for Chakra Email. It keeps
  headings, body text, code, and buttons sans-serif-only and uses neutral accents.
  It does not import Chakra UI or its browser CSS-variable system.

Email templates retain their email-safe sizes and spacing instead of inheriting
web-only recipes. Chakra Email's system-mode rendering emits light inline styles
plus dark-mode CSS. The email body and content container use the shared `bg.body`
token: white in light mode, true black (`#000`) in dark mode. Text and borders use
adaptive neutral tokens to remain readable. Clients that ignore dark-mode CSS
retain the light fallback or apply their own color transformations.

Suisse Intl is a font-family preference, not an embedded
font download; the emails retain Arial/Helvetica/sans-serif fallbacks.

All Play's separate app theme and the shared Postkit editorial theme are unchanged.

The Nx build emits this library before dependent builds. The email bundle includes
the compiled email adapter and tokens, not an unresolved workspace import or the
Chakra UI system.
