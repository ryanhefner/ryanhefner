import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { createPostkitRemarkPlugins } from '@postkit/react'
import { z } from 'zod'

const contentFields = {
  title: z.string(),
  description: z.string(),
  date: z.string(),
  preview: z.boolean().optional(),
  slug: z.string(),
  tags: z.array(z.string()).optional(),
  content: z.string(),
}

const toIsoDate = (value: string) => {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value)

  if (match) {
    const [, month, day, year] = match

    return new Date(
      Date.UTC(Number(year), Number(month) - 1, Number(day)),
    ).toISOString()
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid content date: ${value}`)
  }

  return date.toISOString()
}

const compile = async (
  document: Parameters<typeof compileMDX>[1],
  context: Parameters<typeof compileMDX>[0],
) =>
  compileMDX(context, document, {
    remarkPlugins: createPostkitRemarkPlugins(),
  })

export const newsletters = defineCollection({
  name: 'newsletters',
  typeName: 'Newsletter',
  directory: 'src/docs/newsletters',
  include: '**/*.md',
  schema: z.object({
    category: z.literal('newsletter').default('newsletter'),
    ...contentFields,
  }),
  transform: async (document, context) => ({
    ...document,
    date: toIsoDate(document.date),
    url: `/newsletters/${document.slug}`,
    mdx: await compile(document, context),
  }),
})

export const nows = defineCollection({
  name: 'nows',
  typeName: 'Now',
  directory: 'src/docs/now',
  include: '**/*.md',
  schema: z.object({
    category: z.literal('now').default('now'),
    location: z.string().default('Atlanta, GA'),
    ...contentFields,
  }),
  transform: async (document, context) => ({
    ...document,
    date: toIsoDate(document.date),
    url: `/now/${document.slug}`,
    mdx: await compile(document, context),
  }),
})

export const thoughts = defineCollection({
  name: 'thoughts',
  typeName: 'Thought',
  directory: 'src/docs/thoughts',
  include: '**/*.md',
  schema: z.object({
    category: z.literal('thought').default('thought'),
    updatedAt: z.string().optional(),
    ...contentFields,
  }),
  transform: async (document, context) => ({
    ...document,
    date: toIsoDate(document.date),
    ...(document.updatedAt
      ? { updatedAt: toIsoDate(document.updatedAt) }
      : {}),
    url: `/thoughts/${document.slug}`,
    mdx: await compile(document, context),
  }),
})

export const updates = defineCollection({
  name: 'updates',
  typeName: 'Update',
  directory: 'src/docs/updates',
  include: '**/*.md',
  schema: z.object({
    category: z.literal('update').default('update'),
    ...contentFields,
  }),
  transform: async (document, context) => ({
    ...document,
    date: toIsoDate(document.date),
    url: `/updates/${document.slug}`,
    mdx: await compile(document, context),
  }),
})

export default defineConfig({
  content: [newsletters, nows, thoughts, updates],
})
