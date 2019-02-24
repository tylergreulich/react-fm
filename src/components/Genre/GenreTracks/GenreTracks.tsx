import React from 'react';
import { connect } from 'react-redux';
import { setCurrentVideoUrl } from '../../../store/actions/lastFmActions';
import { TrackProps } from './GenreTracks.interface';
import { SongName } from './GenreTracks.styles';

const GenreTracks: React.FunctionComponent<TrackProps> = ({
  tracks,
  setCurrentVideoUrl
}) => (
  <>
    {tracks &&
      tracks.map(({ artist, name: trackName, mbid }, index) => (
        <SongName
          key={mbid}
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
)(GenreTracks);
