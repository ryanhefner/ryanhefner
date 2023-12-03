// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('./with-nx.js')

/**
 * @type {import('./with-nx.js').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  transpilePackages: ['@linkcards/next'],
  async rewrites() {
    return [
      {
        source: '/:path*.jpg',
        destination: '/og-image/:path*',
      },
      {
        source: '/.jpg',
        destination: '/og-image/.jpg',
      },
    ]
  },
}

module.exports = withNx(nextConfig)
