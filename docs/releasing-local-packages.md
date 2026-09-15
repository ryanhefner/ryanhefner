# Releasing the sites after local package testing

The workspace can use Yalc builds for testing. These files are local
and are not available in a clean CI checkout. Vercel and the deployment workflow
run `node tools/scripts/check-release-dependencies.mjs` before installation so
the failure identifies which packages still need published versions.

Postkit and Chakra Email now use public npm packages at 0.2.0. There are no
active Yalc dependency references in the root manifests or workspace overrides.
Old `next-meta` and `react-marquease` entries in `yalc.lock` are leftovers;
those packages use npm dependencies.

When returning to public dependencies after local testing:

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

The requested 0.2.0 releases have exact-version release-age exceptions in
`pnpm-workspace.yaml`. Other newly published versions remain subject to the
one-week policy.
