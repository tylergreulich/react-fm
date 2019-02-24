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
  getArtistInfo,
  getArtistSimilarArtists,
  getArtistTopTracks
} from '../../store/actions/artist.actions';
import { setCurrentVideoUrl } from '../../store/actions/lastFmActions';
import { RootState } from '../../store/reducers/rootReducer';
import Modal from '../Modal/Modal';
import PlayerControls from '../PlayerControls/PlayerControls';
import { ArtistProps } from './Artist.interface';

const ArtistTracks = React.lazy(() => import('./ArtistTracks/ArtistTracks'));
const SimilarArtists = React.lazy(() =>
  import('./SimilarArtists/SimilarArtists')
);
const ArtistBio = React.lazy(() => import('./ArtistBio/ArtistBio'));

const Genre: React.FunctionComponent<ArtistProps> = ({
  getArtistSimilarArtists,
  getArtistTopTracks,
  getArtistInfo,
  setCurrentVideoUrl,
  match,
  artist,
  artistTracks,
  similarArtists,
  currentVideoUrl,
  history,
  isModal
}) => {
  const { name: artistName } = match.params;

  const { isVideoLoading, setIsVideoLoading } = isVideoLoadingHook();

  const [isReady, setIsReady] = React.useState<boolean>(false);
  const [songDuration, setSongDuration] = React.useState<number | null>(null);
  const [songPlayedSeconds, setSongPlayedSeconds] = React.useState<
    number | null
  >(null);

  const getLastFmData = async () => {
    // empty the currentVideoUrl in the store on mount
    await setCurrentVideoUrl('', '', true);
    await getArtistInfo(artistName, { history });
    await getArtistSimilarArtists(artistName);
    await getArtistTopTracks(artistName);
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
          <ArtistBio artist={artist} />
        </PageInfoWrapper>
        <VideoContainer>
          {currentVideoUrl && currentVideoUrl.length > 1 && (
            <>
              <SpinnerContainer>
                <Spinner isVideoLoading={isVideoLoading} />
              </SpinnerContainer>
              <ResponsivePlayerContainer>
                <ResponsivePlayer
                  url={currentVideoUrl}
                  playing={isPlaying}
                  controls={true}
                  width={!isVideoLoading ? '100%' : '0%'}
                  height={!isVideoLoading ? '100%' : '0%'}
                  onStart={() => setIsVideoLoading(false)}
                  ref={playerRef}
                  onReady={() => setIsReady(true)}
                  onDuration={(duration: number) => setSongDuration(duration)}
                  onProgress={(state: any) =>
                    setSongPlayedSeconds(state.playedSeconds)
                  }
                  key={currentVideoUrl}
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

          <ArtistTracks
            tracks={artistTracks}
            currentVideoUrl={currentVideoUrl}
          />
        </TracksHeader>
        <ArtistHeader>
          <ArtistBox />
          <h3>Similar Artists</h3>
          <SimilarArtists artists={similarArtists} />
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
        key={currentVideoUrl}
      />
    </>
  );
};

const mapStateToProps = ({ lastFm }: RootState) => ({
  artist: lastFm.artist,
  similarArtists: lastFm.similarArtists,
  artistTracks: lastFm.artistTracks,
  currentVideoUrl: lastFm.currentVideoUrl,
  isModal: lastFm.isModal
});

export default connect(
  mapStateToProps,
  {
    getArtistInfo,
    getArtistSimilarArtists,
    getArtistTopTracks,
    setCurrentVideoUrl
  }
)(withRouter(Genre));
