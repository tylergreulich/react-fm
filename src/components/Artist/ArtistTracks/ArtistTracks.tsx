import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { setCurrentVideoUrl } from '../../../store/actions/lastFmActions';
import { SongName } from '../../Genre/GenreTracks/GenreTracks.styles';
import { TrackProps } from './ArtistTracks.interface';

const ArtistTracks: React.FunctionComponent<TrackProps> = ({
  tracks,
  setCurrentVideoUrl
}) => (
  <>
    {tracks &&
      tracks.map(({ artist, name: trackName }, index) => (
        <SongName
          key={uuidv4()}
          onClick={() => setCurrentVideoUrl(artist.name, trackName)}
        >
          <span style={{ width: '2rem', display: 'block' }}>{index + 1}</span>
          <span className="icon-container">
            <i className="fa fa-play" />
          </span>
          <span className="track">
            {artist && artist.name && `${artist.name} -`} {trackName}
          </span>
        </SongName>
      ))}
  </>
);

export default connect(
  null,
  { setCurrentVideoUrl }
)(ArtistTracks);
