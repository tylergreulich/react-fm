import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { isVideoLoadingHook } from '../../shared/hooks/isVideoLoading.hook';
import { playerControlsHook } from '../../shared/hooks/playerControls.hook';
import { Spinner } from '../../shared/Spinner';
import { ArtistBox, ArtistHeader } from '../../shared/styles/Artist.styles';
import {
  PageContainer,
  PageInfoWrapper
} from '../../shared/styles/Page.styles';
import { SpinnerContainer } from '../../shared/styles/SpinnerContainer';
import {
  TrackBox,
  TrackLabel,
  TrackLabelContainer,
  TracksHeader
} from '../../shared/styles/Track.styles';
import {
  ResponsivePlayer,
  ResponsivePlayerContainer,
  VideoContainer
} from '../../shared/styles/VideoPlayer.styles';
import {
  getGenreInfo,
  getGenreTopArtists,
  getGenreTopTracks
} from '../../store/actions/genre.actions';
// import { setCurrentVideoUrl } from '../../store/actions/lastFmActions';
import { RootState } from '../../store/reducers/rootReducer';
import Modal from '../Modal/Modal';
import PlayerControls from '../PlayerControls/PlayerControls';
import { GenreProps } from './Genre.interface';

const GenreTracks = React.lazy(() => import('./GenreTracks/GenreTracks'));
const GenreArtists = React.lazy(() => import('./GenreArtists/GenreArtists'));
const GenreBio = React.lazy(() => import('./GenreBio/GenreBio'));

const Genre: React.FunctionComponent<GenreProps> = ({
  getGenreInfo,
  getGenreTopArtists,
  getGenreTopTracks,
  // setCurrentVideoUrl,
  currentVideoUrl,
  isModal,
  tag,
  tracks,
  artists,
  match,
  history
}) => {
  const { name: genreName } = match.params;

  const { isVideoLoading, setIsVideoLoading } = isVideoLoadingHook();

  const [isReady, setIsReady] = React.useState<boolean>(false);
  const [songDuration, setSongDuration] = React.useState<number | null>(null);
  const [songPlayedSeconds, setSongPlayedSeconds] = React.useState<
    number | null
  >(null);

  const getLastFmData = async () => {
    // await setCurrentVideoUrl('', '', true);
    await getGenreInfo(genreName, { history });
    await getGenreTopArtists(genreName);
    await getGenreTopTracks(genreName);
  };

  React.useEffect(() => {
    getLastFmData();
  }, []);

  const { isPlaying, toggleIsPlaying, playerRef } = playerControlsHook();

  return (
    <>
      {isModal && <Modal isModal={isModal} />}
      <PageContainer currentVideoUrl={currentVideoUrl ? currentVideoUrl : ''}>
        <PageInfoWrapper>
          <GenreBio tag={tag} />
        </PageInfoWrapper>
        <VideoContainer>
          {currentVideoUrl && currentVideoUrl.length > 1 && (
            <>
              <SpinnerContainer>
                <Spinner isVideoLoading={isVideoLoading} />
              </SpinnerContainer>
              <ResponsivePlayerContainer>
                <ResponsivePlayer
                  url={currentVideoUrl || 'http://'}
                  playing={isPlaying}
                  controls={true}
                  width={'100%'}
                  height={'100%'}
                  onStart={() => setIsVideoLoading(false)}
                  isVideoLoading={isVideoLoading}
                  ref={playerRef}
                  onReady={() => setIsReady(true)}
                  onDuration={(duration: number) => setSongDuration(duration)}
                  onProgress={(state: any) =>
                    setSongPlayedSeconds(state.playedSeconds)
                  }
                />
              </ResponsivePlayerContainer>
            </>
          )}
        </VideoContainer>
        <TracksHeader>
          <TrackBox />
          <h3>Top Tracks</h3>
          <div>
            <TrackLabelContainer>
              <TrackLabel>Title</TrackLabel>
            </TrackLabelContainer>
          </div>
          <GenreTracks tracks={tracks} currentVideoUrl={currentVideoUrl} />
        </TracksHeader>
        <ArtistHeader>
          <ArtistBox />
          <h3>Top Artists</h3>
          <GenreArtists artists={artists} />
        </ArtistHeader>
      </PageContainer>
      <PlayerControls
        currentVideoUrl={currentVideoUrl ? currentVideoUrl : undefined}
        isVideoLoading={isVideoLoading}
        toggleIsPlaying={toggleIsPlaying}
        isPlaying={!isPlaying}
        isReady={isReady}
        songDuration={songDuration}
        songPlayedSeconds={songPlayedSeconds}
      />
    </>
  );
};

const mapStateToProps = ({ lastFm }: RootState) => ({
  tag: lastFm.tag,
  artists: lastFm.artists,
  tracks: lastFm.tracks,
  currentVideoUrl: lastFm.currentVideoUrl,
  isModal: lastFm.isModal
});

export default connect(
  mapStateToProps,
  {
    getGenreInfo,
    getGenreTopArtists,
    getGenreTopTracks
    // setCurrentVideoUrl
  }
)(withRouter(Genre));
