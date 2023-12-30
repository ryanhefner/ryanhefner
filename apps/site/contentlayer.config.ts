import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { format } from 'date-fns'

export const Now = defineDocumentType(() => ({
  name: 'Now',
  filePathPattern: 'now/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    preview: { type: 'boolean', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
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
  filePathPattern: 'thoughts/**/*.mdx',
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
      resolve: (post) => `/thoughts/${post.slug}`,
    },
  },
}))

export const Update = defineDocumentType(() => ({
  name: 'Update',
  filePathPattern: 'updates/**/*.mdx',
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
      resolve: (post) => `/updates/${post.slug}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'apps/site/src/docs',
  documentTypes: [Now, Thought, Update],
})
