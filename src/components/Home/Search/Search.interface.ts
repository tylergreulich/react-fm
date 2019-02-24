import { RouteComponentProps } from 'react-router-dom';

interface DispatchProps {
  getGenreInfo: any;
  getArtistInfo: any;
}

interface OwnProps {
  searchOption: string;
}

export type SearchProps = OwnProps & DispatchProps & RouteComponentProps<any>;
