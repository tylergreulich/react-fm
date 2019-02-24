import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 7rem;
  background-color: transparent;
  z-index: 10;
`;

export const ListItemContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 2rem auto 0;

  li {
    > span {
      position: absolute;
      width: 0.1rem;
      background-color: ${props => props.theme.secondaryLight};
      height: 1rem;
      transform-origin: left;
      transform: translate(-0.4rem, 0rem) scaleX(0);
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }

    &:hover > span {
      transform: translate(-0.4rem, 0rem) scaleX(73);
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const HoverBox = styled.span``;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  z-index: 2;
  position: relative;
  backface-visibility: none;
  letter-spacing: 0.2rem;
`;

export const FAQButton = styled.button`
  font-size: 1.4rem;
  padding: 0.7rem 1.6rem;
  background-color: transparent;
  color: ${props => props.theme.primary};
  border: 0.25rem solid ${props => props.theme.primary};
  cursor: pointer;
  font-weight: 500;
  outline: none;
  transition: all 0.2s ease-in-out;
  backface-visibility: none;
  font-weight: bold;

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary};
  }
`;
