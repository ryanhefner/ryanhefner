//@ts-check

const path = require('node:path')

const { composePlugins, withNx } = require('@nx/next')
const { createContentCollectionPlugin } = require('@content-collections/next')
const withMdx = require('@next/mdx')()
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const markdownRequest = {
  type: /** @type {'header'} */ ('header'),
  key: 'accept',
  value: '(.*)text/markdown(.*)',
}

const markdownRewrite = (source, path = source) => ({
  source,
  destination: `/api/markdown?path=${path}`,
  has: [markdownRequest],
})

const withContentCollections = createContentCollectionPlugin({
  configPath: path.join(__dirname, '../../libs/content/content-collections.ts'),
})

const nextConfig = {
  allowedDevOrigins: ['ryanhefner.test'],
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  poweredByHeader: false,
  reactCompiler: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Vary',
            value: 'Accept, Accept-Encoding',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        markdownRewrite('/', '/'),
        markdownRewrite('/about'),
        markdownRewrite('/contact'),
        markdownRewrite('/feeds'),
        markdownRewrite('/now'),
        markdownRewrite('/now/:path*'),
        markdownRewrite('/privacy'),
        markdownRewrite('/projects'),
        markdownRewrite('/projects/:path*'),
        markdownRewrite('/thoughts'),
        markdownRewrite('/thoughts/:path*'),
        markdownRewrite('/updates'),
        markdownRewrite('/withoss'),
      ],
      afterFiles: [
        {
          source: '/:path*/social-image',
          destination: '/og-image/:path*',
        },
      ],
      fallback: [markdownRewrite('/:path*', '/:path*')],
    }
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

const withNxAndMdx = composePlugins(withNx, withMdx)(nextConfig)

module.exports = async (phase, context) =>
  withContentCollections(await withNxAndMdx(phase, context))
