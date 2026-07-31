//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')
const withMdx = require('@next/mdx')()
const { createContentlayerPlugin } = require('next-contentlayer2')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const withContentlayer = createContentlayerPlugin({
  configPath: 'libs/contentlayer/contentlayer.config.ts',
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
  /** @param {import('webpack').Configuration} config */
  webpack(config) {
    config.resolve ??= {}
    config.resolve.plugins ??= []
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
        extensions: [
          '.ts',
          '.tsx',
          '.mjs',
          '.js',
          '.jsx',
          ...(config.resolve.extensions ?? []),
        ],
      }),
    )
    return config
  },
}

const plugins = [withNx, withContentlayer, withMdx]

module.exports = composePlugins(...plugins)(nextConfig)
