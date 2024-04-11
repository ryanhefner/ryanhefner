---
title: "Streamlining My Publishing Workflow: Part 1 - The Origin"
date: 12/28/2023
description: How I streamlined my publishing workflow with Obsidian, GitHub and NextJS + Contentlayer + Vercel.
slug: streamlining-my-publishing-workflow-part-1
tags:
  - Obsidian
  - GitHub
  - NextJS
  - React
  - Contentlayer
  - OSS
  - Series
---

# Streamlining My Publishing Workflow
<Subheading>Part 1 of 3 in a series on how I streamlined my publishing workflow with Obsidian, GitHub, and NextJS + Contentlayer + Vercel.</Subheading>

In this series, I document how I settled on my writing tool of choice, the
criteria and exploration in the various tools I tried, and the final setup I
landed on for making publishing content to this site something I will actually
do, and enjoy it.

## Settling on the Source

You know the classic story, you want to do something, but you have a lot of
priorities that need to be met to do the thing they way you want to. These
priorities amount to a lot of work, figuring things out, and you might not be
able to ultimately pull it off. Or you think can pull it off, but it might
require more time and effort than the thing is actually worth. That’s where I
was for a while when it comes to adding some dynamic sections to this site,
until today.

I think I have finally configured the ultimate way for me to publish content to
this site that aligns with my personal workflow of writing and managing ideas.

## Looking Back

Over the years, I have tried a lot of different ways to publish content to my
personal sites. The majority were a quickly hacked together CMS that relied on
a database and some rough admin system that would allow me to log in and access
some basic forms to publish/edit content.

I have also tried a few different static site generators, including Jekyll,

## Moving Forward

### Must haves

1. Write and publish from the same place I take notes/write documents.
2. One-click publish to site from writing app.
3. Ability to publish to multiple areas of the site from a single workflow.

### Nice to haves

1. Support for tagging content and making tags discoverable.
2. Ability to use [LinkCards](https://www.linkcards.io) for `og:image` handling.
3. Ability to use [`next-meta`](https://www.pkgstats.com/pkg:next-meta) for all Open Graph tags.


## Explorations

- Native NextJS/MDX rendering
- Contentlayer

### Native NextJS/MDX rendering

#### The Goods


#### The Bads


#### The Uglies

```js
const text = 'Here is some text with JS code style applied to it'

const moreText = 'Here is some more text with JS code style applied to it'

const aNumber = 2023 // To make sure this is rendering the proper font
```

### Contentlayer


#### The Goods


#### The Bads


#### The Uglies
