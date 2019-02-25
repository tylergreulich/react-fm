import axios, { AxiosResponse } from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ArtistData, TagData, TrackData } from './actions.interface';
import { setError, setLoading, setModal } from './lastFmActions';
import {
  GET_GENRE_INFO,
  GET_GENRE_TOP_ARTISTS,
  GET_GENRE_TOP_TRACKS
} from './types';

export const getGenreInfo = (
  genreName: string,
  { history }: RouteComponentProps<any> | any
) => async (dispatch: Dispatch) => {
  dispatch(setError(''));
  dispatch(setLoading(true));

  const response: AxiosResponse<TagData> | void = await axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${genreName}&api_key=${
        process.env.REACT_APP_LAST_FM_API_KEY
      }&format=json`
    )
    .catch(error => console.error(error));

  if (response && response.data.tag.total !== 0) {
    dispatch({
      type: GET_GENRE_INFO,
      payload: response.data.tag
    });

    dispatch(setLoading(false));

    return history.push(`/genre/${genreName}`);
  }

  dispatch(
    setError('The genre you entered does not exist. Please enter a new one.')
  );

  dispatch(setLoading(false));

  dispatch(setModal(true));
};

export const getGenreTopArtists = (genreName: string) => async (
  dispatch: Dispatch
) => {
  const response: AxiosResponse<ArtistData> | void = await axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${genreName}&limit=9&api_key=${
        process.env.REACT_APP_LAST_FM_API_KEY
      }&format=json`
    )
    .catch(error => console.error(error));

  if (response) {
    dispatch({
      type: GET_GENRE_TOP_ARTISTS,
      payload: response.data.topartists.artist
    });
  }
};

export const getGenreTopTracks = (genreName: string) => async (
  dispatch: Dispatch
) => {
  const response: AxiosResponse<TrackData> | void = await axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genreName}&limit=15&api_key=${
        process.env.REACT_APP_LAST_FM_API_KEY
      }&format=json`
    )
    .catch(error => console.error(error));

  if (response) {
    dispatch({
      type: GET_GENRE_TOP_TRACKS,
      payload: response.data.tracks.track
    });
  }
};
