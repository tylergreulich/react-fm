import { RouteComponentProps } from 'react-router-dom';

interface DispatchProps {
  setError: any;
  setModal: any;
  setLoading: any;
  getArtistsBySearch: any;
}

interface StateProps {
  isLoading: boolean;
  isModal: boolean;
}

export type HomeProps = StateProps & DispatchProps & RouteComponentProps<any>;
