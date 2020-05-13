export interface ThumbnailProps {
  height: number
  url: string
  width: number
}

export interface Thumbnail {
  default: {
    [key: string]: ThumbnailProps
  }
  medium: {
    [key: string]: ThumbnailProps
  }
  high: {
    [key: string]: ThumbnailProps
  }
}

export interface Snippet {
  channelId: string
  channelTitle: string
  description: string
  liveBroadcastContent: string
  publishedAt: string
  thumbnails: Thumbnail[]
  title: string
}

export interface VideoItem {
  etag: string
  id: {
    kind: string
    videoId: string
  }
  kind: string
  snippet: Snippet
}
