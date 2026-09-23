# Dependency check — September 23, 2026

Public npm metadata was checked against the installed lockfile, publication
dates, and peer requirements. Updates retain the seven-day release quarantine,
provenance checks, and install-script allowlist. No new age exceptions were
added. Existing Fontstack production-registry edits are separate from this pass.

## Updates

Each dependency or tightly coupled package family was committed separately.

| Dependency                                  | Previous                        | Updated       |
| ------------------------------------------- | ------------------------------- | ------------- |
| Prettier                                    | 3.9.6                           | 3.9.7         |
| Testing Library DOM                         | 10.4.1                          | 10.4.2        |
| ESLint Playwright plugin                    | 2.11.0                          | 2.12.0        |
| Node 24 types                               | 24.13.3                         | 24.13.5       |
| React Hook Form                             | 7.87.0                          | 7.88.0        |
| Resend                                      | 6.26.0                          | 6.28.1        |
| pnpm                                        | 11.23.0                         | 12.4.2        |
| Zod                                         | 4.5.4                           | 4.6.5         |
| Rollup                                      | 4.63.1                          | 4.63.3        |
| Webpack                                     | 5.110.3                         | 5.111.0       |
| Vite, including override                    | 8.2.2                           | 8.3.0         |
| Next.js, MDX plugin, ESLint config          | 16.3.4                          | 16.3.5        |
| Nx and all direct Nx plugins                | 23.2.0                          | 23.2.1        |
| React / React DOM                           | 19.3.0-canary-bd6ea412-20260824 | 19.3.0 stable |
| React / React DOM types (same React commit) | 19.2.18 / 19.2.7                | 19.3.0        |

The Nx TOML security override now targets 23.2.1. React's obsolete canary
age exceptions were removed. pnpm 12's multi-document lockfile is supported
by the installed Nx lockfile parser.

## Compatibility constraints

- Babel stays on 7.29.7: `ts-jest@29.4.12` requires `@babel/core <8`, and Nx
  still uses Babel 7 presets and plugins.
- TypeScript stays on 6.0.3: TypeScript ESLint 8.70.0 requires TypeScript
  `<6.1.0`, and ts-jest requires `<7`.
- ESLint stays on 9.39.5: the latest `eslint-plugin-react@7.37.5` and
  `eslint-plugin-import@2.32.0` do not declare ESLint 10 support. This version
  of ESLint emits an upstream end-of-support warning.
- Cypress ESLint plugin stays on 6.4.4: version 7.0.2 requires ESLint >=10.
- Vitest, its UI, and V8 coverage stay on 4.1.11: `@nx/vitest@23.2.1`
  declares support for Vitest 3/4, not 5.
- Node type definitions stay on the Node 24 line to match `engines.node`
  and `.nvmrc`.

## Release-age constraints

Newer releases still in quarantine at the time of this check include:

- Content Collections core 0.15.3
- Next.js, its MDX plugin, and ESLint config 16.3.6
- TypeScript ESLint 8.70.1
- Jest, babel-jest, and the jsdom environment 30.5.2
- jsdom 30.1.1
- Prettier 3.9.9
- Rollup 4.63.4
- ts-jest 29.4.13
- Verdaccio 6.10.4
- Webpack 5.111.1
- pnpm 12.6.0

Postkit and Chakra Email remain on public npm packages at 0.2.0; no Yalc
dependencies were introduced.

React's [19.3 release notes](https://react.dev/blog/2026/09/09/react-19-3)
confirm that ViewTransition is stable, removing the original need for the
repository's React canary pin.

## Validation

- Frozen installation passes with pnpm 12.4.2.
- Site, All Play, emails, and newsletter test targets pass. The final site
  regression run passes all 16 tests across six suites.
- TypeScript checks pass for both sites and the email library.
- Both production site builds and the email-library build pass, along with
  their dependent library builds.
- Metadata audit passes: 131 pages, 234 JSON-LD scripts, 39 player cards.
- Five dependency-override and release-dependency regression tests pass.
- `pnpm audit --json` reports zero vulnerabilities at every severity.
- `pnpm peers check` reports no issues.
- Updated source/manifests pass formatting checks.

The first site build encountered an ignored, stale `public/sitemap.xml`
from an older build, conflicting with the current sitemap route. It was moved
to `/private/tmp/ryanhefner-deps.2eMQ4p/site-public-sitemap.xml`; the retry
passed. Generated feed changes were restored and are not part of these commits.
Existing Nx executor/plugin deprecation warnings and Rollup bundle warnings
remain; migrating to inferred Nx targets is a separate task.

## Body-copy links

A separate site fix applies `blue.fg` to Postkit links and ordinary body-copy
links, including linked inline code. The semantic color uses the shared theme's
light/dark blue values. Navigation, buttons, linked cards, the footer, and
the marquee retain their own styling; All Play's styling is unchanged.

The regression fixture verifies that the emitted CSS selects body links and
excludes navigation/buttons/cards. Generated HTML/CSS was also inspected for
Contact, Now/archive, Thoughts, About, and Privacy pages. Live browser visual
verification could not be completed because the browser connection failed.
