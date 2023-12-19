// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')
const withMdx = require('@next/mdx')()

const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  transpilePackages: ['@linkcards/next'],
  async rewrites() {
    return [
      {
        source: '/:path*/social-image',
        destination: '/og-image/:path*',
      },
    ]
  },
}

const plugins = [withNx, withMdx]

module.exports = composePlugins(...plugins)(nextConfig)
