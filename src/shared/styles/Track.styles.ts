import styled from 'styled-components'
import { pxToEm } from '../pxToEm'

export const TracksHeader = styled.div`
  @media (max-width: ${pxToEm(640)}) {
    grid-column-start: 1;
    grid-column-end: -1;
  }

  h3 {
    padding: 3rem 0;
    position: relative;
    z-index: 2;
    font-size: 2rem;
    background-color: ${props => props.theme.darkPurple};
    font-weight: 500;
    text-transform: uppercase;
  }
`

export const TrackLabelContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0 5rem;
  margin-bottom: 0.75rem;
`

export const TrackLabel = styled.li`
  font-size: 1.35rem;
`

export const TrackBox = styled.span`
  transform: translate(-0.5rem, 3rem) scaleX(113);
  position: absolute;
  width: 0.05rem;
  background-color: ${props => props.theme.secondaryLight};
  height: 1.25rem;
  transform-origin: left;
`
