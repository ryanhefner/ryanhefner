import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
// import { TransistorClient } from 'transistor-client'

// const client = new TransistorClient({ apiKey: process.env.TRANSISTOR_API_KEY })

// export const Episode = defineDatabase(() => {})

// export default makeSource({ client, databaseType: [Episode] })

export const Newsletter = defineDocumentType(() => ({
  name: 'Newsletter',
  filePathPattern: 'newsletters/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    preview: { type: 'boolean', required: false },
    slug: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/newsletters/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'apps/allplay/src/docs',
  disableImportAliasWarning: true,
  documentTypes: [Newsletter],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
})
