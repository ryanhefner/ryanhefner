import baseConfig from '../../eslint.config.mjs'
import nextVitals from 'eslint-config-next/core-web-vitals'
import eslintPluginReactCompiler from 'eslint-plugin-react-compiler'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  ...baseConfig,
  ...nextVitals.filter((config) => config.name !== 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: { parser: tseslint.parser },
  },
  { plugins: { 'react-compiler': eslintPluginReactCompiler } },
  { languageOptions: { globals: { ...globals.jest } } },
  {
    settings: { next: { rootDir: 'apps/site/' } },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
      'react-compiler/react-compiler': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
]
