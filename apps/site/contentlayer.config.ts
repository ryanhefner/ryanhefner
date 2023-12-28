import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { format } from 'date-fns'

export const Now = defineDocumentType(() => ({
  name: 'Now',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/now/${format(post.date, 'yyyy-MM-dd')}`,
    },
  },
}))

export const Thought = defineDocumentType(() => ({
  name: 'Thought',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/thoughts/${post.slug}`,
    },
  },
}))

export const Update = defineDocumentType(() => ({
  name: 'Update',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/updates/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'apps/site/src/docs/**/*',
  documentTypes: [Now, Thought, Update],
})
