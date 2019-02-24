import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../store/actions/lastFmActions';
import { NavigationProps } from './Navigation.interface';
import {
  FAQButton,
  HoverBox,
  ListItemContainer,
  NavContainer,
  NavigationLink
} from './Navigation.styles';

const Navigation: React.FunctionComponent<NavigationProps> = ({ setModal }) => (
  <NavContainer>
    <ListItemContainer>
      <li>
        <HoverBox />
        <NavigationLink to="/">REACTFM</NavigationLink>
      </li>
      <li>
        <FAQButton onClick={() => setModal(true)}>FAQ</FAQButton>
      </li>
    </ListItemContainer>
  </NavContainer>
);

export default connect(
  null,
  { setModal }
)(Navigation);
