import { RouteComponentProps } from 'react-router';
import { Artist } from '../../shared/interfaces/Artist.interface';
import { Track } from '../../shared/interfaces/Track.interface';

interface DispatchProps {
  getArtistSimilarArtists: any;
  getArtistTopTracks: any;
  getArtistInfo: any;
  setCurrentVideoUrl?: any;
}

interface StateProps {
  artist: Artist;
  similarArtists: Artist[];
  artistTracks: Track[];
  currentVideoUrl: string;
  isModal: boolean;
}

export type ArtistProps = StateProps & DispatchProps & RouteComponentProps<any>;
