export type EpisodeAnalytics = {
  data: {
    id: string
    type: string
    attributes: {
      downloads: {
        date: Date
        downloads: number
      }[]
      start_date: Date
      end_date: Date
    }
    relationships: {
      show: {
        data: {
          id: string
          type: string
        }
      }
    }
  }
}

export type Show = {
  amazon_music: string
  anghami: string
  apple_podcasts: string
  author: string
  castbox: string
}

export type User = {
  created_at: Date
  image_url: string
  name: string
  time_zone: string
  update_at: Date
}
