import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import { JSDOM } from 'jsdom'

const defaultRoots = [
  'dist/apps/site/.next/server/pages',
  'dist/apps/allplay/.next/server/pages',
]

const roots = process.argv.slice(2)
const auditRoots = roots.length ? roots : defaultRoots
const errors = []
const stats = {
  files: 0,
  jsonLdScripts: 0,
  playerCards: 0,
}

const findHtmlFiles = async (directory) => {
  let entries

  try {
    entries = await readdir(directory, { withFileTypes: true })
  } catch (error) {
    errors.push(`${directory}: unable to read build output (${error.message})`)
    return []
  }

  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name)

      return entry.isDirectory()
        ? findHtmlFiles(entryPath)
        : Promise.resolve(entryPath.endsWith('.html') ? [entryPath] : [])
    }),
  )

  return files.flat()
}

const getMetaContent = (document, selector) =>
  document.querySelector(selector)?.getAttribute('content')

const isAbsoluteHttpUrl = (value) => {
  try {
    const url = new URL(value)

    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const isHttpsUrl = (value) => {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

const schemaImageUrl = (image) => {
  if (typeof image === 'string') {
    return image
  }

  if (Array.isArray(image)) {
    return schemaImageUrl(image[0])
  }

  return image?.url ?? image?.contentUrl
}

const report = (file, message) => {
  errors.push(`${path.relative(process.cwd(), file)}: ${message}`)
}

const auditFile = async (file) => {
  const html = await readFile(file, 'utf8')
  const { document } = new JSDOM(html).window
  const canonical = document
    .querySelector('link[rel="canonical"]')
    ?.getAttribute('href')
  const openGraphUrl = getMetaContent(document, 'meta[property="og:url"]')
  const openGraphImage = getMetaContent(document, 'meta[property="og:image"]')
  const openGraphImageAlt = getMetaContent(
    document,
    'meta[property="og:image:alt"]',
  )

  stats.files += 1

  if (!canonical || !isAbsoluteHttpUrl(canonical)) {
    report(file, 'canonical URL is missing or not absolute')
  }

  if (!openGraphUrl || !isAbsoluteHttpUrl(openGraphUrl)) {
    report(file, 'og:url is missing or not absolute')
  } else if (canonical && openGraphUrl !== canonical) {
    report(file, `og:url does not match canonical (${openGraphUrl})`)
  }

  if (openGraphImage) {
    if (!isAbsoluteHttpUrl(openGraphImage)) {
      report(file, 'og:image is not absolute')
    }

    if (!openGraphImageAlt?.trim()) {
      report(file, 'og:image:alt is missing')
    }
  }

  for (const selector of [
    'meta[property="og:audio"]',
    'meta[property="og:video"]',
    'meta[name="twitter:image"]',
  ]) {
    for (const element of document.querySelectorAll(selector)) {
      const value = element.getAttribute('content')

      if (value && !isAbsoluteHttpUrl(value)) {
        report(file, `${selector} is not absolute`)
      }
    }
  }

  const twitterCard = getMetaContent(document, 'meta[name="twitter:card"]')

  if (twitterCard === 'player') {
    stats.playerCards += 1

    const playerUrl = getMetaContent(document, 'meta[name="twitter:player"]')
    const playerWidth = getMetaContent(
      document,
      'meta[name="twitter:player:width"]',
    )
    const playerHeight = getMetaContent(
      document,
      'meta[name="twitter:player:height"]',
    )

    if (!playerUrl || !isHttpsUrl(playerUrl)) {
      report(file, 'Twitter player URL is missing or not HTTPS')
    }

    if (!playerWidth || !playerHeight) {
      report(file, 'Twitter player dimensions are incomplete')
    }
  }

  const jsonLdScripts = [
    ...document.querySelectorAll('script[type="application/ld+json"]'),
  ]
  const ids = new Set()

  if (!jsonLdScripts.length) {
    report(file, 'no JSON-LD scripts were rendered')
  }

  for (const script of jsonLdScripts) {
    stats.jsonLdScripts += 1

    if (!document.body.contains(script)) {
      report(
        file,
        `JSON-LD script "${script.id || '(missing id)'}" is not in body`,
      )
    }

    if (!script.id) {
      report(file, 'JSON-LD script is missing a stable id')
    } else if (ids.has(script.id)) {
      report(file, `duplicate JSON-LD id "${script.id}"`)
    } else {
      ids.add(script.id)
    }

    let data

    try {
      data = JSON.parse(script.textContent ?? '')
    } catch (error) {
      report(file, `JSON-LD "${script.id}" is invalid JSON (${error.message})`)
      continue
    }

    if (data['@context'] !== 'https://schema.org') {
      report(file, `JSON-LD "${script.id}" has an invalid schema context`)
    }

    if (typeof data.url === 'string' && canonical && data.url !== canonical) {
      report(
        file,
        `JSON-LD "${script.id}" URL does not match canonical (${data.url})`,
      )
    }

    const imageUrl = schemaImageUrl(data.image)

    if (imageUrl && openGraphImage && imageUrl !== openGraphImage) {
      report(
        file,
        `JSON-LD "${script.id}" image does not match og:image (${imageUrl})`,
      )
    }
  }
}

const files = (
  await Promise.all(auditRoots.map((root) => findHtmlFiles(root)))
).flat()

if (!files.length && !errors.length) {
  errors.push('No rendered HTML files were found to audit')
}

await Promise.all(files.map(auditFile))

if (errors.length) {
  console.error(`Metadata audit failed with ${errors.length} error(s):`)
  errors.forEach((error) => console.error(`- ${error}`))
  process.exitCode = 1
} else {
  console.log(
    `Metadata audit passed: ${stats.files} pages, ` +
      `${stats.jsonLdScripts} JSON-LD scripts, ` +
      `${stats.playerCards} player cards.`,
  )
}
