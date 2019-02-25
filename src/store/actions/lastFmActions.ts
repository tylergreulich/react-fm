import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import uuidv4 from 'uuid/v4';
import { VideoItemData } from './actions.interface';
import {
  SET_CURRENT_SONG,
  SET_CURRENT_VIDEO_URL,
  SET_ERROR,
  SET_LOADING,
  SET_MODAL
} from './types';

export const setCurrentVideoUrl = (
  songArtist: string,
  songName: string,
  stop?: boolean
) => async (dispatch: Dispatch) => {
  if (stop) {
    dispatch({
      type: SET_CURRENT_VIDEO_URL,
      payload: null
    });

    return;
  }

  const response: AxiosResponse<VideoItemData> | void = await axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=${
        process.env.REACT_APP_YOUTUBE_API_KEY
      }&part=snippet&q=
      ${songArtist + ' ' + songName}&type=video`
    )
    .catch(error => console.error(error));

  if (response) {
    const videoId = response!.data.items[0].id.videoId;

    const url = `https://www.youtube.com/watch?v=${videoId}`;

    dispatch({
      type: SET_CURRENT_VIDEO_URL,
      payload: url
    });

    const currentSongPayload = {
      id: uuidv4(),
      songName,
      songArtist
    };

    dispatch(setCurrentSong(currentSongPayload));
  }
};

export const setError = (payload: string) => ({
  type: SET_ERROR,
  payload
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setModal = (payload: boolean) => ({
  type: SET_MODAL,
  payload
});

export interface SetCurrentSongPayload {
  id: string;
  songName: string;
  songArtist: string;
}

export const setCurrentSong = (payload: SetCurrentSongPayload) => ({
  type: SET_CURRENT_SONG,
  payload
});
