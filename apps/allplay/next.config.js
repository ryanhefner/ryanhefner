//@ts-check

const withMdx = require('@next/mdx')()
const { composePlugins, withNx } = require('@nx/next')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const markdownRequest = {
  type: /** @type {'header'} */ ('header'),
  key: 'accept',
  value: '(.*)text/markdown(.*)',
}

/**
 * @param {string} source
 * @param {string} [path]
 */
const markdownRewrite = (source, path = source) => ({
  source,
  destination: `/api/markdown?path=${path}`,
  has: [markdownRequest],
})

const nextConfig = {
  allowedDevOrigins: ['allplay.test'],
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  nx: {},
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
        markdownRewrite('/newsletter'),
        markdownRewrite('/podcast'),
        markdownRewrite('/podcast/:path*'),
        markdownRewrite('/privacy'),
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

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMdx,
]

module.exports = composePlugins(...plugins)(nextConfig)
