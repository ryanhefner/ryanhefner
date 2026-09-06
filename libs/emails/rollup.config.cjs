const { resolve } = require('node:path')

module.exports = (config) => ({
  ...config,
  plugins: [
    {
      name: 'shared-email-theme',
      resolveId(source) {
        if (source === '@ryanhefner/theme/email') {
          // Nx builds this dependency first. Bundle its data-only adapter so
          // the output doesn't depend on an unpublished workspace alias.
          return resolve(__dirname, '../../dist/libs/theme/src/email.js')
        }
        return null
      },
    },
    ...config.plugins,
  ],
})
