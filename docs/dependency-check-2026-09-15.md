# Dependency check — September 15, 2026

Checked public npm metadata, publication dates, peer requirements, and install
scripts for 144 package names across the workspace and security-fix candidates.
The three private Fontstack packages could not be checked because their registry
returned HTTP 503. Their requested 1.0.2 versions remain unchanged.

## Updates applied

| Package group                                  | Installed version                 |
| ---------------------------------------------- | --------------------------------- |
| Chakra Email, core, preview                    | 0.2.0, public npm instead of Yalc |
| Postkit next, react, unfurl                    | 0.2.0, public npm                 |
| Chakra UI                                      | 3.37.0                            |
| Next.js, MDX plugin, ESLint config             | 16.3.4                            |
| Nx and all direct first-party plugins          | 23.2.0                            |
| React Email CLI and preview UI                 | 6.9.5                             |
| Jest, babel-jest, jsdom environment, jest-util | 30.5.1                            |
| Vitest, UI, coverage                           | 4.1.11                            |
| Vite                                           | 8.2.2                             |
| Vite React plugin                              | 6.1.1                             |
| TypeScript ESLint plugin, parser, facade       | 8.70.0                            |
| Playwright                                     | 1.63.0                            |
| SWC core                                       | 1.16.2                            |
| React Testing Library                          | 16.3.3                            |
| React DOM types                                | 19.2.7                            |
| Axios                                          | 1.20.0                            |
| React Hook Form                                | 7.87.0                            |
| Resend                                         | 6.26.0                            |
| Rollup                                         | 4.63.1                            |
| Verdaccio                                      | 6.10.3                            |
| Webpack                                        | 5.110.3                           |
| Zod                                            | 4.5.4                             |
| Globals                                        | 17.12.0                           |
| @sindresorhus/slugify                          | 3.0.1                             |

React and React DOM retain the intentional
`19.3.0-canary-bd6ea412-20260824` pin used for ViewTransition testing. This pass
does not select a new Canary snapshot. pnpm remains pinned at 11.23.0.

React Email is an alternate development previewer, not the production template
implementation. Its wrappers import the same Chakra Email templates.

## Security fixes

The initial audit reported 2 critical, 12 high, and 6 moderate advisories. The
final `pnpm audit --json` reports zero advisories at every severity.

Next.js includes the fixes described in the upstream
[image optimization advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4)
and [Windows hosting advisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36).
Compatible transitive updates also replace vulnerable Sharp, Vitest mocking,
and SVGO v3 releases.

Version-qualified overrides replace remaining vulnerable pins for qs,
fast-uri, js-yaml v3/v4, and SVGO v4 without changing those consumers' major
versions. Nx's pinned smol-toml dependency uses patched v1.8.0. The obsolete
Nx 23.1.1 brace-expansion override is removed because Nx 23.2.0 pins 5.0.9 itself.

TOML v3 has no patched release. Only the `remark-mdx-frontmatter@4.0.0>toml`
edge moves to 4.2.0. Regression tests verify its named `parse()` export,
null-prototype output, plugin export generation, and the shared YAML/MDX pipeline.

The one-week quarantine, provenance policy, and install-script allowlist remain
enabled. No additional age exceptions or script permissions were introduced for
this general update pass. The previously requested public Chakra Email/Postkit
0.2.0 releases retain their exact-version age exceptions.

## Updates deferred

The final metadata check found no newer age-eligible stable release on the
existing major lines of the updated public dependencies. Exceptions requiring
a separate tooling migration are:

- Babel 8: retain Babel 7 until the plugin/toolchain migration is reviewed;
  see the [Babel migration guide](https://babeljs.io/docs/v8-migration).
- ESLint 10: the installed `eslint-plugin-react@7.37.5` peer range stops at
  ESLint 9.7. ESLint 9 emits its upstream end-of-support warning.
- TypeScript 7: TypeScript ESLint 8.70.0 supports TypeScript below 6.1.0.
- Vitest 5: Nx Vitest 23.2.0 declares support for Vitest 3/4; see the
  [Vitest 5 migration guide](https://main.vitest.dev/guide/migration/).
- Cypress ESLint plugin 7: retained at 6.4.4 pending a major-version config/rule
  migration review.

Newer releases still quarantined include Next.js 16.3.5, Nx 23.2.1,
Vite 8.3.0, Rollup 4.63.3, Webpack 5.111.0, React Hook Form 7.88.0,
Resend 6.28.1, Zod 4.6.5, React/React DOM types 19.3.0,
React Testing Library DOM 10.4.2, and the Playwright ESLint plugin 2.12.0.
These are not security exceptions and were not allowed through the age gate.

## Verification

- Site, All Play, and email regression targets: 54 tests pass.
- Dependency override and release-preflight script tests: 5 tests pass.
- Both site TypeScript checks and the email TypeScript check pass.
- Shared theme and email builds pass.
- Frozen offline installation, release dependency preflight, and diff checks pass.
- Full workspace test run: 14 of 16 project targets pass. Two existing failures
  remain: the Transistor client boilerplate test calls a removed export, and
  Suisse Works has no test files. Neither source/test issue was changed here.
- Production builds of the two sites were not run in this pass.

Commits are scoped to the package migration, email fixes, compatible updates,
Nx update, and security fixes. Unrelated worktree changes and registry
credentials remain uncommitted.
