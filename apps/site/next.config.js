//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')
const withMdx = require('@next/mdx')()
const { createContentlayerPlugin } = require('next-contentlayer2')

const withContentlayer = createContentlayerPlugin({
  configPath: 'apps/site/contentlayer.config.ts',
})

const nextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  nx: {},
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  poweredByHeader: false,
  reactCompiler: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*/social-image',
        destination: '/og-image/:path*',
      },
    ]
  },
  transpilePackages: ['@linkcards/next'],
}

const plugins = [withNx, withContentlayer, withMdx]

module.exports = composePlugins(...plugins)(nextConfig)
