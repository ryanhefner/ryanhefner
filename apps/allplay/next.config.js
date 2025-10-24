//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')
const withMdx = require('@next/mdx')()

const nextConfig = {
  nx: {},
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  poweredByHeader: false,
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/:path*/social-image',
        destination: '/og-image/:path*',
      },
    ]
  },
  viewTransitions: true,
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMdx,
]

module.exports = composePlugins(...plugins)(nextConfig)
