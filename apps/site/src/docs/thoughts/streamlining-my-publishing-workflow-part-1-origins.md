---
title: "Streamlining My Publishing Workflow: Part 1 - The Origins"
description: My journey through the world of productivity and writing software and what I ultimately settled on.
date: 2023-12-29
slug: streamlining-my-publishing-workflow-part-1-origins
tags:
  - Obsidian
  - NextJS
  - MDX
  - Markdown
  - OSS
  - Series
  - GitHub
  - React
preview: true
share: "true"
filename: streamlining-my-publishing-workflow-part-1-origins
---

# Streamlining My Publishing Workflow
<Subheader>Part 1 of 3 in a series on how I streamlined my publishing workflow with Obsidian, GitHub, and NextJS + Contentlayer + Vercel.</Subheader>

In this series, I document how I settled on my writing tool of choice, the criteria and exploration in the various tools I tried, and the final setup I landed on for making publishing content to this site something I will actually do, and enjoy it.

- Part 1: Settling on my writing tool of choice (Searching for the promised land)
- Part 2: Defining the criteria and exploring various options
- Part 3: Deciding on the final setup and configuring the workflow

## Settling on the Source of Truth
Over the years I have bounced around between a bunch of different tools to try to capture ideas and things I need to/should do. A lot of those have been dedicated to-do apps, while others have been various writing tools/to-do hybrids, but none of them have been both as simple as I want, while at the same time being flexible enough for both a quick to-do list and supporting longer form copy/articles. Now those to formats don’t necessarily have to live together, and in fact I don't often start on a list or document within a specific context.
### Tools I’ve tried in the past
- Apple Notes
- Do (old collaborative to-do app, maybe the first to do collaborative right, that really streamlined the capture and status of to-do’s)
- Things
- Wunderlist
- Google Docs
- Bear
- Tapslock
- Airtable
- Notion
- Superlist

My current flow is that I use Field Notes to capture all of the stuff I am working on, along with some ideas or things notes on things I want to learn about/research more. From there, if idea starts to grow and I start to apply a dedicated effort towards a specific project, and that project warrants both outlines of ideas or architecture schema, some to-do’s, and eventually some longer form text–either fleshing out what it is or how I want to talk about it, or evolving into marketing copy or article ideas. And, to handle that my preferred format is writing in Markdown.

For me, Markdown offers the majority of the formatting needs for writing and documentation, and probably due to my open-source work my preference has heavily skewed towards doing all things in Markdown, so I don't have to do the dance of converting between different formats to Markdown, and potentially back.

```js
const someCode = 'This is some code'

const soWhat = 'It will look like this'

function andWhy() {
	return someCode + soWhat
}

// This is just a test
```