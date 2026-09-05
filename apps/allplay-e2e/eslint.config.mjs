import baseConfig from '../../eslint.config.mjs'
import eslintPluginPlaywright from 'eslint-plugin-playwright'

export default [
  ...baseConfig,
  eslintPluginPlaywright.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
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
  {
    files: ['src/**/*.{ts,js,tsx,jsx}'],
    // Override or add rules here
    rules: {},
  },
]
