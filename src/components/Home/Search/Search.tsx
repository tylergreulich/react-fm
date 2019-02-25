import axios, { AxiosResponse } from 'axios';
import Downshift from 'downshift';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import uuidv4 from 'uuid/v4';
import { Artist } from '../../../shared/interfaces/Artist.interface';
import { GetArtistsBySearchResultsData } from '../../../store/actions/actions.interface';
import { getArtistInfo } from '../../../store/actions/artist.actions';
import { getGenreInfo } from '../../../store/actions/genre.actions';
import { SearchProps } from './Search.interface';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchResult,
  SearchResultsContainer,
  SearchResultsWrapper
} from './Search.styles';

const Search: React.FunctionComponent<SearchProps> = ({
  history,
  getGenreInfo,
  getArtistInfo,
  searchOption
}) => {
  const [searchResults, setSearchResults] = React.useState<Artist[]>([]);
  const [searchInput, setSearchInput] = React.useState<string>('');

  const handleChange = async ({
    currentTarget
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(currentTarget.value);

    if (searchOption === 'artist') {
      const response: AxiosResponse<
        GetArtistsBySearchResultsData
      > | void = await axios
        .get(
          `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${
            currentTarget.value
          }&api_key=${
            process.env.REACT_APP_LAST_FM_API_KEY
          }&limit=5&format=json`
        )
        .catch(error => console.error(error));

      response && setSearchResults(response.data.results.artistmatches.artist);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchOption === 'genre') {
      getGenreInfo(searchInput, { history });
    } else {
      getArtistInfo(searchInput, { history });
    }
  };

  const handleSelectedItem = (selectedItem: Artist) => {
    setSearchInput(selectedItem.name!);

    getArtistInfo(selectedItem.name!, { history });
  };

  return (
    <Downshift
      onChange={selectedItem => handleSelectedItem(selectedItem)}
      itemToString={item => (item === null ? '' : item.name)}
    >
      {({
        getRootProps,
        getInputProps,
        getItemProps,
        isOpen,
        highlightedIndex,
        inputValue
      }) => (
        <SearchForm
          onSubmit={handleSubmit}
          {...getRootProps({ refKey: 'ref' })}
        >
          <div style={{ display: 'flex', width: '100%' }}>
            <SearchInput
              {...getInputProps({
                type: 'search',
                placeholder: 'Search',
                id: 'search',
                onChange: (event: any) => {
                  event.persist();
                  handleChange(event);
                }
              }) as any}
            />
            <SearchButton type="submit" disabled={searchInput.length < 1}>
              <i className="fa fa-search" />
            </SearchButton>
            {searchOption === 'artist' && isOpen && (
              <SearchResultsContainer>
                <SearchResultsWrapper>
                  {searchResults.map((item, index) => (
                    <SearchResult
                      {...getItemProps({ item })}
                      key={uuidv4()}
                      highlighted={(index === highlightedIndex).toString()}
                    >
                      {item.name}
                    </SearchResult>
                  ))}
                  {!searchResults.length && (
                    <li> Nothing Found for {inputValue}</li>
                  )}
                </SearchResultsWrapper>
              </SearchResultsContainer>
            )}
          </div>
        </SearchForm>
      )}
    </Downshift>
  );
};

export default connect(
  null,
  {
    getGenreInfo,
    getArtistInfo
  }
)(withRouter(Search));
