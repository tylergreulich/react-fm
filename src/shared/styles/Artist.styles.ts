import styled from 'styled-components'
import { pxToEm } from '../pxToEm'
import { TrackBox } from './Track.styles'

export const ArtistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.5rem;

  @media (max-width: ${pxToEm(1200)}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${pxToEm(640)}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ArtistHeader = styled.div`
  flex: 0.4;

  @media (max-width: ${pxToEm(640)}) {
    grid-column-start: 1;
    grid-column-end: -1;
  }

  h3 {
    position: relative;
    z-index: 2;
    padding: 3rem 0;
    font-size: 2rem;
    background-color: ${(props) => props.theme.darkPurple};
    font-weight: 500;
    text-transform: uppercase;
  }
`

export const ImageContainer = styled.figure`
  background-color: black;
  position: relative;
  cursor: pointer;

  &:hover > a > img {
    opacity: 0.6;
  }

  &:hover > a > figcaption {
    transform: translateY(-2rem);
  }
`

export const ArtistImage = styled.img`
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;

  @media (max-width: ${pxToEm(1200)}) {
    width: 100%;
  }
`

export const ArtistName = styled.figcaption`
  position: absolute;
  top: 50%;
  width: 100%;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
`

export const ArtistBox = styled(TrackBox)`
  transform: translate(-0.5rem, 3rem) scaleX(113);
  transform-origin: left;
`
