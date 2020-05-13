import { Image } from './Image.interface'

export interface Artist {
  attr?: {
    rank: number
  }
  image?: Image[]
  mbid?: string
  name?: string
  streamable?: string
  url?: string
  bio?: {
    summary: string
  }
}
