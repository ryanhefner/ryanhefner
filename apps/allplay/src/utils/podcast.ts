import type { PodcastEpisode, PodcastFeed } from 'use-podcast'

export type PodcastListEpisode = {
  enclosure: {
    type?: string
    url: string
  }
  guid: string
  itunes: {
    duration?: number | string
  }
  link: string
  title: string
}

export type PlayablePodcastEpisode = PodcastEpisode &
  Omit<PodcastListEpisode, 'itunes'> & {
    itunes: NonNullable<PodcastEpisode['itunes']>
  }

export const isPlayablePodcastEpisode = (
  episode: PodcastEpisode | null | undefined,
): episode is PlayablePodcastEpisode =>
  Boolean(
    episode?.guid &&
    episode.link &&
    episode.title &&
    episode.enclosure?.url &&
    episode.itunes,
  )

export const getPodcastListEpisodes = (
  feed: PodcastFeed | null | undefined,
): PodcastListEpisode[] =>
  feed?.items.flatMap((episode) =>
    isPlayablePodcastEpisode(episode)
      ? [
          {
            enclosure: {
              type: episode.enclosure.type,
              url: episode.enclosure.url,
            },
            guid: episode.guid,
            itunes: {
              duration: episode.itunes.duration,
            },
            link: episode.link,
            title: episode.title,
          },
        ]
      : [],
  ) ?? []
