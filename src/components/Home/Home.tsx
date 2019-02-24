import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Spinner } from '../../shared/Spinner';
import { getArtistsBySearch } from '../../store/actions/artist.actions';
import {
  setError,
  setLoading,
  setModal
} from '../../store/actions/lastFmActions';
import { RootState } from '../../store/reducers/rootReducer';
import Modal from '../Modal/Modal';
import { HomeProps } from './Home.interface';
import {
  Header,
  HomeContainer,
  OptionsContainer,
  StyledListItem
} from './Home.styles';
import Search from './Search/Search';

const Home: React.FunctionComponent<HomeProps> = ({ isLoading, isModal }) => {
  const [searchOption, setSearchOption] = React.useState<string>('');

  React.useEffect(() => {
    setSearchOption('genre');
  }, []);

  return (
    <>
      <Modal isModal={isModal} />
      <HomeContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <Header>
            <div>
              <h1>Discover new music or listen to your favorite artists!</h1>
              <p>
                Enjoy unlimited free music, get similar artists, top tracks, and
                much more!
              </p>
            </div>
            <div>
              <>
                <Search searchOption={searchOption} />
                <OptionsContainer searchOption={searchOption}>
                  <StyledListItem onClick={() => setSearchOption('genre')}>
                    Genre
                  </StyledListItem>
                  <StyledListItem onClick={() => setSearchOption('artist')}>
                    Artist
                  </StyledListItem>
                </OptionsContainer>
              </>
            </div>
          </Header>
        )}
      </HomeContainer>
    </>
  );
};

const mapStateToProps = ({ lastFm }: RootState) => ({
  isModal: lastFm.isModal,
  isLoading: lastFm.loading
});

export default connect(
  mapStateToProps,
  {
    setError,
    setLoading,
    setModal,
    getArtistsBySearch
  }
)(withRouter(Home));
