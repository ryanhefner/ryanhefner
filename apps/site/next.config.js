//@ts-check

const path = require('node:path')

const {
  createContentCollectionPlugin,
} = require('@content-collections/next')
const withMdx = require('@next/mdx')()
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const withContentCollections = createContentCollectionPlugin({
  configPath: path.join(
    __dirname,
    '../../libs/contentlayer/content-collections.ts',
  ),
})

const nextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
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

module.exports = withContentCollections(withMdx(nextConfig))
