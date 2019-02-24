import { RouteComponentProps } from 'react-router-dom';
import { Artist } from '../../../shared/interfaces/Artist.interface';

interface OwnProps {
  artists: Artist[];
}

export type ArtistsProps = OwnProps & RouteComponentProps<any>;
