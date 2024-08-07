import { ImRss } from 'react-icons/im'

export const FeedType = {
  APPLE_PODCASTS: 'apple_podcasts',
  AMAZON_MUSIC: 'amazon_music',
  OVERCAST: 'overcast',
  POCKET_CASTS: 'pocket_casts',
  RSS: 'rss',
  SPOTIFY: 'spotify',
}

export const Feed = {
  [FeedType.APPLE_PODCASTS]:
    'https://podcasts.apple.com/us/podcast/transmits/id1760156588',
  [FeedType.AMAZON_MUSIC]:
    'https://music.amazon.com/podcasts/c0b5b0ba-cd76-406d-ac2b-c625fbee9b9d/transmits',
  [FeedType.OVERCAST]: 'https://overcast.fm/itunes1760156588/transmits',
  [FeedType.POCKET_CASTS]: 'https://pca.st/2i9fiwhr',
  [FeedType.RSS]: 'https://feeds.transistor.fm/transmits',
  [FeedType.SPOTIFY]:
    'https://open.spotify.com/show/0TolVzxtRLh7nYWxvNkZBa?si=n3GvwOAcQSOeC8-thPteXg',
}

export const feeds = [
  {
    icon: '/assets/apple-podcasts.svg',
    title: 'Apple Podcasts',
    url: Feed[FeedType.APPLE_PODCASTS],
    type: FeedType.APPLE_PODCASTS,
  },
  {
    icon: '/assets/spotify.svg',
    title: 'Spotify',
    url: Feed[FeedType.SPOTIFY],
    type: FeedType.SPOTIFY,
  },
  {
    icon: '/assets/overcast.svg',
    title: 'Overcast',
    url: Feed[FeedType.OVERCAST],
    type: FeedType.OVERCAST,
  },
  {
    icon: '/assets/pocket-casts.svg',
    title: 'Pocket Casts',
    url: Feed[FeedType.POCKET_CASTS],
    type: FeedType.POCKET_CASTS,
  },
  {
    icon: '/assets/amazon-music.png',
    title: 'Amazon Music',
    url: Feed[FeedType.AMAZON_MUSIC],
    type: FeedType.AMAZON_MUSIC,
  },
  {
    icon: ImRss,
    title: 'RSS',
    url: Feed[FeedType.RSS],
    type: FeedType.RSS,
  },
]
