import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { test } from 'node:test'
import { pathToFileURL } from 'node:url'

const require = createRequire(import.meta.url)
const mdxRequire = createRequire(require.resolve('@content-collections/mdx'))
const bundlerPath = mdxRequire.resolve('mdx-bundler')
const bundlerRequire = createRequire(bundlerPath)
const frontmatterPath = bundlerRequire.resolve('remark-mdx-frontmatter')
const frontmatterRequire = createRequire(frontmatterPath)

test('patched TOML retains the named parse API used by MDX frontmatter', async () => {
  const { parse } = await import(
    pathToFileURL(frontmatterRequire.resolve('toml')).href
  )

  const parsed = parse(
    'title = "Dependency check"\ntags = ["mdx", "toml"]\n[author]\nname = "Ryan"',
  )
  // The security fix intentionally returns null-prototype records.
  assert.equal(Object.getPrototypeOf(parsed), null)
  assert.equal(Object.getPrototypeOf(parsed.author), null)
  assert.deepEqual(JSON.parse(JSON.stringify(parsed)), {
    title: 'Dependency check',
    tags: ['mdx', 'toml'],
    author: { name: 'Ryan' },
  })
})

test('MDX frontmatter exports still work with the scoped TOML override', async () => {
  const { default: remarkMdxFrontmatter } = await import(
    pathToFileURL(frontmatterPath).href
  )
  const tree = {
    type: 'root',
    children: [{ type: 'toml', value: 'title = "Dependency check"' }],
  }

  remarkMdxFrontmatter()(tree)

  const declaration = tree.children[0].data.estree.body[0].declaration
  assert.equal(declaration.declarations[0].id.name, 'frontmatter')
  const title = declaration.declarations[0].init.properties.find(
    (property) =>
      property.key.name === 'title' || property.key.value === 'title',
  )
  assert.equal(title.value.value, 'Dependency check')
})

test('the shared MDX pipeline still compiles YAML frontmatter', async () => {
  const { bundleMDX } = await import(pathToFileURL(bundlerPath).href)
  const result = await bundleMDX({
    source:
      '---\ntitle: Dependency check\n---\n\n# Hello\n\nUpdated dependencies.',
  })

  assert.equal(result.frontmatter.title, 'Dependency check')
  assert.ok(result.code.length > 0)
})
