import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

export function getLocalReleaseDependencies(packageJson, workspaceConfig) {
  const dependencies = new Set()
  for (const section of [
    'dependencies',
    'devDependencies',
    'optionalDependencies',
  ]) {
    for (const [name, version] of Object.entries(packageJson[section] ?? {})) {
      if (/^(?:file|link):.*(?:^|[/.])yalc\//.test(version))
        dependencies.add(name)
    }
  }
  // Read local Yalc overrides without requiring dependencies to be installed first.
  for (const line of workspaceConfig.split('\n')) {
    const match =
      /^\s*['"]?([^'"\s:]+)['"]?:\s*['"]?(?:file|link):\.?\/?\.yalc\//.exec(
        line,
      )
    if (match) dependencies.add(match[1])
  }
  return [...dependencies].sort()
}

export function checkReleaseDependencies(root = process.cwd()) {
  const packages = getLocalReleaseDependencies(
    JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8')),
    readFileSync(resolve(root, 'pnpm-workspace.yaml'), 'utf8'),
  )
  if (!packages.length) return true
  process.stderr.write(
    `Deployment requires published versions of these local Yalc dependencies:\n${packages.map((name) => `  - ${name}`).join('\n')}\nReplace the file/link references and workspace overrides, then regenerate pnpm-lock.yaml. See docs/releasing-local-packages.md.\n`,
  )
  return false
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  if (!checkReleaseDependencies()) process.exitCode = 1
}
