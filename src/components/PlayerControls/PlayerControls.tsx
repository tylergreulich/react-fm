import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../../shared/Spinner';
import { RootState } from '../../store/reducers/rootReducer';
import { PlayerControlsProps } from './PlayerControls.interface';
import {
  ControlsWrapper,
  CurrentSongContainer,
  Footer,
  IconContainer,
  PlayIcon,
  SongArtist,
  SongTitle,
  StyledButton,
  TimeContainer
} from './PlayerControls.styles';

const PlayerControls: React.FunctionComponent<PlayerControlsProps> = ({
  currentVideoUrl,
  toggleIsPlaying,
  isPlaying,
  isReady,
  currentSong,
  songDuration,
  songPlayedSeconds,
  isVideoLoading
}) => {
  const pad = (num: number) => ('0' + num).slice(-2);

  const convertToHMS = (secs: number) => {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    return `${pad(minutes)}:${pad(secs)}`;
  };

  return (
    <>
      <Footer
        currentVideoUrl={
          currentVideoUrl !== undefined ? currentVideoUrl : undefined
        }
      >
        <ControlsWrapper>
          <CurrentSongContainer>
            <SongArtist>{currentSong.songArtist}</SongArtist>
            <SongTitle>{currentSong.songName}</SongTitle>
          </CurrentSongContainer>
          <IconContainer>
            {currentVideoUrl && currentVideoUrl.length > 1 ? (
              <StyledButton onClick={toggleIsPlaying} disabled={!isReady}>
                {isVideoLoading ? (
                  <Spinner
                    isVideoLoading={isVideoLoading}
                    style={{
                      zIndex: '1000000',
                      margin: '0 auto'
                    }}
                    isMobileDrawer={true}
                  />
                ) : (
                  <PlayIcon icon={isPlaying ? 'play-circle' : 'pause-circle'} />
                )}
              </StyledButton>
            ) : null}
          </IconContainer>
          <TimeContainer>
            {songPlayedSeconds
              ? convertToHMS(Math.floor(songPlayedSeconds))
              : '00:00'}{' '}
            / {songDuration ? convertToHMS(songDuration) : '00:00'}
          </TimeContainer>
        </ControlsWrapper>
      </Footer>
    </>
  );
};

const mapStateToProps = ({ lastFm }: RootState) => ({
  currentSong: lastFm.currentSong
});

export default connect(
  mapStateToProps,
  null
)(PlayerControls);
