import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArtistContainer,
  ArtistImage,
  ArtistName,
  ImageContainer
} from '../../../shared/styles/Artist.styles'
import { SimilarArtistsProps } from './SimilarArtists.interface'

const SimilarArtists: React.FunctionComponent<SimilarArtistsProps> = ({
  artists
}) => {
  return (
    <ArtistContainer>
      {artists &&
        artists.map(
          ({ mbid, image, name }) =>
            image &&
            image.map(
              (img) =>
                img.size === 'large' && (
                  <ImageContainer key={mbid}>
                    <Link to={`/artist/${name}`}>
                      <ArtistImage src={img['#text']} key={img['#text']} />
                      <ArtistName>{name}</ArtistName>
                    </Link>
                  </ImageContainer>
                )
            )
        )}
    </ArtistContainer>
  )
}

export default SimilarArtists
