// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')
const withMdx = require('@next/mdx')()
const { createContentlayerPlugin } = require('next-contentlayer2')

const withContentlayer = createContentlayerPlugin({
  configPath: 'apps/site/contentlayer.config.ts',
})

const nextConfig = {
  experimental: {
    reactCompiler: true,
    viewTransitions: true,
  },
  nx: {},
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  poweredByHeader: false,
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

const plugins = [withNx, withContentlayer, withMdx]

module.exports = composePlugins(...plugins)(nextConfig)
