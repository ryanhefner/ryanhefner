# Releasing the sites after local package testing

The workspace intentionally uses Yalc builds for testing. These files are local
and are not available in a clean CI checkout. Vercel and the deployment workflow
run `node tools/scripts/check-release-dependencies.mjs` before installation so
the failure identifies which packages still need published versions.

The current local dependencies are:

| Package                 | Local version |
| ----------------------- | ------------- |
| `@postkit/core`         | 0.1.1         |
| `@postkit/next`         | 0.1.1         |
| `@postkit/react`        | 0.1.1         |
| `@postkit/unfurl`       | 0.1.1         |
| `chakra-email`          | 0.1.0         |
| `@chakra-email/core`    | 0.1.0         |
| `@chakra-email/preview` | 0.1.0         |

Before deployment:

1. Publish the tested library changes from their owning repositories. If a
   version is already published but its contents differ from Yalc, publish a new
   version; matching version numbers alone do not establish equivalence.
2. Replace the `file:.yalc/...` dependencies in `package.json` with published
   versions and remove or replace the corresponding overrides in
   `pnpm-workspace.yaml`.
3. Run `pnpm install` to regenerate the lockfile. Preserve the one-week release
   age policy; any urgent exception must name the exact reviewed version.
4. Verify `node tools/scripts/check-release-dependencies.mjs`, a frozen install
   in a clean checkout, the relevant tests, and production builds for both sites.
5. Commit the manifests and lockfile together. Do not commit registry credentials
   or local Yalc artifacts.

On September 5, 2026, the registry listed only `@postkit/react@0.1.0`; the local
0.1.1 build therefore could not be replaced by an equivalent published release.
The Chakra Email facade also reports 0.1.0 locally, so check its actual changes
against the published release before switching.
