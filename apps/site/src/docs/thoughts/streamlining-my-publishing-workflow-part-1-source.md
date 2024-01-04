---
title: "Streamlining My Publishing Workflow: Part 1 - The Source"
description: My journey through the world of productivity and writing software and what I ultimately settled on.
date: 2023-12-29
slug: streamlining-my-publishing-workflow-part-1-source
tags:
  - NextJS
  - OSS
  - Series
  - GitHub
  - React
  - Process
  - Tools
  - Obsidian
preview: true
share: "true"
filename: streamlining-my-publishing-workflow-part-1-source
---

# Streamlining My Publishing Workflow
<Subheading>Part 1 of 3 in a series on how I streamlined my publishing workflow with Obsidian, GitHub, and NextJS + Contentlayer + Vercel.</Subheading>

In this series, I document how I settled on my writing tool of choice, the criteria and exploration in the various tools I tried, and the final setup I landed on for making publishing content to this site something I will actually do, and enjoy it.

- Part 1: Settling on my writing tool of choice/the single source of truth (Searching for the promised land)
- Part 2: Defining the criteria and exploring various options
- Part 3: Deciding on the final setup and configuring the workflow

## Settling on a “Single” Source of Truth
Over the years I have bounced around between a bunch of different tools to capture ideas and things I need to do. A lot of those have been dedicated to-do apps, while others have been various writing tools/to-do hybrids, but none of them have been both as simple as I want, while at the same time being flexible enough for both a quick to-do list and the ability to support longer form copy/articles/etc. when the case arises for that. Now those two formats–to-do’s and articles–don’t necessarily have to live together, and in fact I don't often start on a list or document within a specific context, it’s more fluid than that.

Before I get into my current workflow, I think it’s important to reflect on some of my previous attempts to organize my idea capture workflow and explain what has worked and where things did not quite line up with my ideal flow.
### Tools I’ve tried in the past...
- Things
- Apple Notes
- Do[^1]
- Wunderlist
- Google Docs
- Bear
- Tapslock
- Airtable
- Notion
- Superlist

#### Things


#### Apple Notes
As much as I like trying out new things, I am still a defaults–first person at heart. I feel like there is certain amount of resiliency when you are able to work–and work well–within the defaults, opposed to over customizing your setup and process to the point where not having access to your highly customized setup can leave you almost paralyzed when you either don’t have access to it, or are required to get something done on another person’s machine/environment. I know there are trade offs between going with the defaults vs. taking advantages of potential optimizations of customized solutions, but I am able to justify a lack of productivity on some fronts for the sake of flexibility to working in new machines/other people environments.

And, if there ever was a default app to take advantage of for notes/to-do’s/etc.—at least within the Apple/iOS world—that app would be, Apple Notes (Notes). Notes is great because you are guaranteed it will be loaded and can sync nicely across all your Apple products. Both the access and reliability of Notes makes it a great default for organizing your various notes and to-do’s, and the ability to share those lists with other Apple users and beyond adds even more flexibility of how you can use Notes personally or collaboratively.

For my criteria, I don’t typically have to share Notes with other people to collaborate on, and when I do I just use Notes. It happens so rarely in my daily life that this criteria does not make or break a tool for me.

In addition to the syncing and share ability, a great things about Notes is the flexibility. I can go from a to-do list to some copy or a full blown article all within the same note, with the ability to easily break it up with headings and what not. I love that flexibility with Notes. The only real downfall with Notes is when it comes to taking  something from Notes and publishing either a part of all of a note somewhere. Depending on the platform(s) that you are publishing on, the formatting applied via Notes is not easily copyable to other editors. And in my case, the format that is typically the most supported is Markdown, both due to the majority of stuff that I publish being something posted to GitHub, but also because over the years Markdown has become my preferred format for writing/publishing documents. So much so that I actually built a web app, [Tapslock](https://www.tapslock.com), that I was planning to use for all of my daily[^2] writing, but I didn’t end up fully adopting that/continuing to progress the app due to it being built on Firebase and also not having a clear vision where I wanted to take it, coupled with a lack of time/interest to really take it further than I already had. I still use it for time-to-time when I want to share a doc I am working on, but 

>“Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.”  
― Charles Eames

My current flow is that I use Field Notes to capture all of the stuff I am working on, along with some ideas or things notes on things I want to learn about/research more. From there, if idea starts to grow and I start to apply a dedicated effort towards a specific project, and that project warrants both outlines of ideas or architecture schema, some to-do’s, and eventually some longer form text–either fleshing out what it is or how I want to talk about it, or evolving into marketing copy or article ideas. And, to handle that my preferred format is writing in Markdown.

For me, Markdown offers the majority of the formatting needs for writing and documentation, and probably due to my open-source work my preference has heavily skewed towards doing all things in Markdown, so I don't have to do the dance of converting between different formats to Markdown, and potentially back.


![Obsidian - A private and flexible writing app that adapts to the way you think.](attachments/obsidian.svg "Obsidian - A private and flexible writing app that adapts to the way you think.")
### Obsidian


Here are a few of the things I like about Obsidian:

- Multiple clients: Mac, iPhone, iPad
- Syncs all documents via iCloud
- Markdown first writing (most flexible for _most_ publishing platforms
- Customizable (custom fonts/sizes/etc.)
- Flexible workspace (tabs/panels/etc.)
- Plugins
	- Currently using: Calendar and GitHub Publisher, but there are a ton more.
- Built in shortcut for triggering a Daily note (which is something I have been trying to do, but have a hard time sticking with, but the fact that it’s there prompts me to do it)
- There’s the whole graph thing, but I have not been exploring that, yet
- And, obviously, ability to organize documents via folders, but nice to be able to go in and just drag stuff around and clean things up and know that it’s all syncing across all the things


[^1]: Do.com was an old collaborative to-do app, maybe the first to do collaborative right, that really streamlined the capture and status of to-do’s)
[^2]: The goal was to create a writing app that encouraged you to write daily and track your streaks, and what not. Ultimately I lost traction on it when I realized that Firebase + the other stuff I wanted to track was kind of gross in the No-SQL world. 