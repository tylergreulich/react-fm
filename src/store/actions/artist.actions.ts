import axios, { AxiosResponse } from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import {
  GetArtistsBySearchResultsData,
  GetSimilarArtistsData,
  TopTrackData
} from './actions.interface';
import { setError, setLoading, setModal } from './lastFmActions';
import {
  GET_ARTISTS_BY_SEARCH,
  GET_ARTIST_INFO,
  GET_ARTIST_SIMILAR_ARTISTS,
  GET_ARTIST_TOP_TRACKS
} from './types';

export const getArtistInfo = (
  artistName: string,
  { history }: RouteComponentProps<any> | any
) => async (dispatch: Dispatch) => {
  dispatch(setError(''));
  dispatch(setLoading(true));

  const response: AxiosResponse<any> | any = await axios
    .get(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${
        process.env.REACT_APP_LAST_FM_API_KEY
      }&format=json`
    )
    .catch(error => {
      dispatch(setError(error.data.message));
      dispatch(setLoading(false));
      dispatch(setModal(true));
    });

  if (response.data.message) {
    dispatch(setError(response.data.message));
    dispatch(setLoading(false));
    dispatch(setModal(true));
    return;
  }

  dispatch({
    type: GET_ARTIST_INFO,
    payload: response.data.artist
  });

  dispatch(setLoading(false));

  return history.push(`/artist/${artistName}`);
};

export const getArtistSimilarArtists = (artistName: string) => async (
  dispatch: Dispatch
) => {
  dispatch(setLoading(true));

  const response: AxiosResponse<GetSimilarArtistsData> | void = await axios
    .get(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artistName}&limit=9&api_key=${
        process.env.REACT_APP_LAST_FM_API_KEY
      }&format=json`
    )
    .catch(error => console.error(error));

  if (response) {
    dispatch(setLoading(false));
    dispatch({
      type: GET_ARTIST_SIMILAR_ARTISTS,
      payload: response.data.similarartists.artist
    });
  }
};

export const getArtistTopTracks = (artistName: string) => async (
  dispatch: Dispatch
) => {
  dispatch(setLoading(true));

  const response: AxiosResponse<TopTrackData> | void = await axios
    .get(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&limit=15&api_key=${
        process.env.REACT_APP_LAST_FM_API_KEY
      }&format=json`
    )
    .catch(error => console.error(error));

  if (response) {
    dispatch(setLoading(false));

    dispatch({
      type: GET_ARTIST_TOP_TRACKS,
      payload: response.data.toptracks.track
    });
  }
};

export const getArtistsBySearch = (searchInput: string) => async (
  dispatch: Dispatch
) => {
  const response: AxiosResponse<
    GetArtistsBySearchResultsData
  > | void = await axios
    .get(
      `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchInput}&api_key=${
        process.env.REACT_APP_LAST_FM_API_KEY
      }&limit=10&format=json`
    )
    .catch(error => console.error(error));

  if (response) {
    dispatch({
      type: GET_ARTISTS_BY_SEARCH,
      payload: response.data.results.artistmatches
    });
  }
};
