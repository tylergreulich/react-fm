import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { pxToEm } from '../pxToEm';

interface Props {
  isVideoLoading: boolean;
}

export const VideoContainer = styled.div`
  flex: 0.4;
  position: relative;

  @media (max-width: ${pxToEm(900)}) {
    display: none;
  }
`;

export const ResponsivePlayerContainer = styled.div`
  position: relative;
  height: 100%;
  padding-top: 56.25%;
`;

export const ResponsivePlayer = styled(ReactPlayer)<Props>`
  position: ${props => (!props.isVideoLoading ? 'absolute' : undefined)};
  top: ${props => (!props.isVideoLoading ? 0 : undefined)};
  left: ${props => (!props.isVideoLoading ? 0 : undefined)};
  display: ${props => (!props.isVideoLoading ? 'block' : 'none')};
`;
