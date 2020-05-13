import { Image } from './Image.interface'

export interface Track {
  attr: {
    rank: number
  }
  artist: {
    mbid: string
    name: string
    url: string
  }
  duration: string
  image: Image
  mbid: string
  name: string
  streamable: {
    text: string
    fulltrack: string
  }
  url: string
}
