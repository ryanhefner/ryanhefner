import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getLocalReleaseDependencies } from './check-release-dependencies.mjs'

test('reports direct, development, and override-only Yalc dependencies', () => {
  assert.deepEqual(
    getLocalReleaseDependencies(
      {
        dependencies: { '@postkit/react': 'file:.yalc/@postkit/react' },
        devDependencies: {
          '@chakra-email/preview': 'file:.yalc/@chakra-email/preview',
        },
      },
      "overrides:\n  '@postkit/core': 'file:.yalc/@postkit/core'\n  '@postkit/react': 'file:.yalc/@postkit/react'\n",
    ),
    ['@chakra-email/preview', '@postkit/core', '@postkit/react'],
  )
})

test('permits published packages and normal workspace dependencies', () => {
  assert.deepEqual(
    getLocalReleaseDependencies(
      { dependencies: { '@postkit/react': '0.1.1', emails: 'workspace:*' } },
      'overrides:\n  vite: 8.2.1\n',
    ),
    [],
  )
})
