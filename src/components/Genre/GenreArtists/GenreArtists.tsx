import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  ArtistContainer,
  ArtistImage,
  ArtistName,
  ImageContainer
} from '../../../shared/styles/Artist.styles';
import { ArtistsProps } from './GenreArtists.interface';

const GenreArtists: React.FunctionComponent<ArtistsProps> = ({
  artists,
  location
}) => {
  return (
    <ArtistContainer>
      {artists &&
        artists.map(
          ({ mbid, image, name }) =>
            image &&
            image.map(
              img =>
                img.size === 'large' && (
                  <ImageContainer key={mbid}>
                    <Link
                      to={{
                        pathname: `/artist/${name}`,
                        state: {
                          prevPath: location.pathname
                        }
                      }}
                    >
                      <ArtistImage src={img['#text']} key={img['#text']} />
                      <ArtistName>{name}</ArtistName>
                    </Link>
                  </ImageContainer>
                )
            )
        )}
    </ArtistContainer>
  );
};

export default withRouter(GenreArtists);
