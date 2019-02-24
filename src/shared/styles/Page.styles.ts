import styled from 'styled-components';
import { pxToEm } from '../pxToEm';

interface Props {
  currentVideoUrl: string;
}

export const PageContainer = styled.div<Props>`
  width: 90%;
  margin: 4rem auto
    ${props => (props.currentVideoUrl.length > 1 ? '16rem' : '0')};
  display: grid;
  grid-template-columns: 2fr 43.5%;
  grid-template-rows: 1fr;
  grid-gap: 6.5rem;

  @media (max-width: ${pxToEm(900)}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: ${pxToEm(900)}) {
    grid-column-start: 1;
    grid-column-end: -1;
  }
`;
