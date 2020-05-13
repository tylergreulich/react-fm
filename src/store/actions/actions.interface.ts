import { Artist } from '../../shared/interfaces/Artist.interface'
import { Tag } from '../../shared/interfaces/Tag.interface'
import { Track } from '../../shared/interfaces/Track.interface'
import { VideoItem } from '../../shared/interfaces/VideoItems.interface'

export interface ArtistData {
  topartists: {
    artist: Artist
  }
}

export interface TagData {
  tag: Tag
}

export interface VideoItemData {
  etag: string
  items: VideoItem[]
}

export interface GetSimilarArtistsData {
  similarartists: {
    artist: Artist[]
  }
}

export interface TopTrackData {
  toptracks: {
    track: Track[]
  }
}

export interface GetArtistsBySearchResultsData {
  results: {
    artistmatches: {
      artist: Artist[]
    }
  }
}

export interface TrackData {
  tracks: {
    track: Track[]
  }
}
