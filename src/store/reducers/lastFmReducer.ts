import { Artist } from '../../shared/interfaces/Artist.interface';
import { Tag } from '../../shared/interfaces/Tag.interface';
import { Track } from '../../shared/interfaces/Track.interface';
import { SetCurrentSongPayload } from '../actions/lastFmActions';
import {
  GET_ARTISTS_BY_SEARCH,
  GET_ARTIST_INFO,
  GET_ARTIST_SIMILAR_ARTISTS,
  GET_ARTIST_TOP_TRACKS,
  GET_GENRE_INFO,
  GET_GENRE_TOP_ARTISTS,
  GET_GENRE_TOP_TRACKS,
  SET_CURRENT_SONG,
  SET_CURRENT_VIDEO_URL,
  SET_ERROR,
  SET_LOADING,
  SET_MODAL
} from './../actions/types';

export interface LastFmState {
  tag: Tag;
  artists: Artist[];
  similarArtists: Artist[];
  artistTracks: Track[];
  artist: Artist;
  tracks: Track[];
  searchResults: {
    artist: Artist[];
  };
  currentVideoUrl: string;
  loading: boolean;
  isModal: boolean;
  error: string;
  currentSong: SetCurrentSongPayload;
}

const initialState: LastFmState = {
  tag: {},
  artists: [],
  similarArtists: [],
  artistTracks: [],
  artist: {},
  tracks: [],
  searchResults: {
    artist: []
  },
  currentVideoUrl: '',
  loading: false,
  isModal: false,
  error: '',
  currentSong: {
    id: '',
    songName: '',
    songArtist: ''
  }
};

export const lastFmReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_GENRE_INFO:
      return {
        ...state,
        tag: action.payload
      };
    case GET_ARTIST_INFO:
      return {
        ...state,
        artist: action.payload
      };
    case GET_ARTISTS_BY_SEARCH:
      return {
        ...state,
        searchResults:
          state.searchResults !== action.payload
            ? action.payload
            : state.searchResults
      };
    case GET_GENRE_TOP_ARTISTS:
      return {
        ...state,
        artists: action.payload
      };
    case GET_ARTIST_SIMILAR_ARTISTS:
      return {
        ...state,
        similarArtists: action.payload
      };
    case GET_GENRE_TOP_TRACKS:
      return {
        ...state,
        tracks: action.payload
      };
    case GET_ARTIST_TOP_TRACKS:
      return {
        ...state,
        artistTracks: action.payload
      };
    case SET_CURRENT_VIDEO_URL:
      return {
        ...state,
        currentVideoUrl: action.payload
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_MODAL:
      return {
        ...state,
        isModal: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
