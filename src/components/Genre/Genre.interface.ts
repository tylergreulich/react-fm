import { RouteComponentProps } from 'react-router';
import { Artist } from '../../shared/interfaces/Artist.interface';
import { Tag } from '../../shared/interfaces/Tag.interface';
import { Track } from '../../shared/interfaces/Track.interface';

interface DispatchProps {
  getGenreTopArtists: any;
  getGenreTopTracks: any;
  getGenreInfo: any;
  setCurrentVideoUrl?: any;
}

interface StateProps {
  tag: Tag;
  artists: Artist[];
  tracks: Track[];
  currentVideoUrl: string;
  isModal: boolean;
}

export type GenreProps = StateProps & DispatchProps & RouteComponentProps<any>;
