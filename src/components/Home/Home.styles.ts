import styled from 'styled-components'
import { pxToEm } from '../../shared/pxToEm'

interface Props {
  searchOption: string
}

export const HomeContainer = styled.div`
  text-align: center;
  height: 89.4vh;
  position: relative;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 0 20%;
  height: 70%;

  h1 {
    color: ${(props) => props.theme.primary};
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: ${pxToEm(870)}) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  @media (max-width: ${pxToEm(730)}) {
    h1 {
      font-size: 2rem;
    }
  }
`

export const OptionsContainer = styled.ul<Props>`
  display: flex;
  margin-top: 2.5rem;
  list-style: none;
  position: relative;
  transition: left 0.2s ease-in;
  left: 0%;

  &::after {
    content: '';
    position: absolute;
    height: 0.175rem;
    background: ${(props) => props.theme.secondary};
    top: 110%;
    width: 50%;
    left: ${(props) => (props.searchOption === 'artist' ? '50%' : '0%')};
  }
`

export const StyledListItem = styled.li`
  flex: 0.5;
  cursor: pointer;
  color: ${(props) => props.theme.darkGrey};
  font-size: 1.2rem;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
`
