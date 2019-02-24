import styled from 'styled-components';

export const SongName = styled.p`
  display: flex;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  color: ${props => props.theme.primary};
  border-top: 0.1rem solid;
  cursor: pointer;

  .track {
    transform: translateX(0rem);
    transition: all 0.2s ease-in-out;
  }

  .icon-container {
    position: relative;
    left: 1.2rem;
    svg {
      opacity: 0;
      transition: all 0.1s ease-in-out;
    }
  }

  &:hover > .track {
    transform: translateX(2rem);
  }

  &:hover > .icon-container {
    svg {
      opacity: 1;
    }
  }
`;
