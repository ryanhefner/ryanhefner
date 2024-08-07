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
    'https://podcasts.apple.com/us/podcast/all-play-w-ryan-hefner/id1744906646?uo=4',
  [FeedType.AMAZON_MUSIC]:
    'https://music.amazon.com/podcasts/9cc10c94-b61c-45c9-9dc3-47da6ec088f2/all-play-w-ryan-hefner',
  [FeedType.OVERCAST]: 'https://overcast.fm/itunes1744906646',
  [FeedType.POCKET_CASTS]: 'https://pca.st/9rgrbhmc',
  [FeedType.RSS]: 'https://feeds.transistor.fm/allplay',
  [FeedType.SPOTIFY]: 'https://open.spotify.com/show/0HpMRKrH0HOCHrIebJhmci',
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
