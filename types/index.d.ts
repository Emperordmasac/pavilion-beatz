export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    twitter: string
    github: string
  }
}

export interface Album {
  name: string
  artist: string
  cover: string
}

export type Playlist = typeof playlists[number]
