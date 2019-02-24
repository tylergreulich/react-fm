import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { pxToEm } from '../../shared/pxToEm';

interface StyledProps {
  isVideoLoading?: boolean;
  currentVideoUrl?: string;
}

export const Footer = styled.footer<StyledProps>`
  transform: ${({ currentVideoUrl }) =>
    currentVideoUrl && currentVideoUrl!.length > 1
      ? 'translateY(1rem)'
      : 'translateY(100%)'};
  transition: transform 0.3s ease-in-out;
  width: 100%;
  bottom: 0rem;
  position: fixed;
  z-index: 600;
  height: 16rem;
  background-color: ${props => props.theme.secondary};
`;

export const ControlsWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 5%;

  @media (max-width: ${pxToEm(1200)}) {
    margin: 0 4%;
  }

  @media (max-width: ${pxToEm(870)}) {
    margin: 0 3%;
  }

  @media (max-width: ${pxToEm(640)}) {
    margin: 0 2%;
  }
`;

export const CurrentSongContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SongArtist = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.white};
  font-weight: 500;

  @media (max-width: ${pxToEm(870)}) {
    font-size: 1.25rem;
  }
`;

export const SongTitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.white};
  margin-top: 0.5rem;

  @media (max-width: ${pxToEm(870)}) {
    font-size: 1rem;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  background-color: ${props => props.theme.secondary};
  outline: none;
  border: none;
`;

export const PlayIcon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  color: ${props => props.theme.white};
  cursor: pointer;
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 1.25rem;
  color: ${props => props.theme.white};
`;
