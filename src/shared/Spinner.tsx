import React from 'react';
import styled from 'styled-components';
import './Spinner.css';

const StyledDiv = styled.div<any>`
  margin: ${props =>
    props.isMobileDrawer ? '0 auto' : '100px auto'} !important;

  > div::before {
    background-color: ${props =>
      props.isMobileDrawer ? props.theme.white : props.theme.black} !important;
  }
`;

export const Spinner: React.FunctionComponent<any> = ({
  isVideoLoading,
  isMobileDrawer
}) => (
  <StyledDiv
    className="sk-circle"
    style={{
      display: `${isVideoLoading ? 'block' : 'none'}`
    }}
    isMobileDrawer={isMobileDrawer}
  >
    <div className="sk-circle1 sk-child" />
    <div className="sk-circle2 sk-child" />
    <div className="sk-circle3 sk-child" />
    <div className="sk-circle4 sk-child" />
    <div className="sk-circle5 sk-child" />
    <div className="sk-circle6 sk-child" />
    <div className="sk-circle7 sk-child" />
    <div className="sk-circle8 sk-child" />
    <div className="sk-circle9 sk-child" />
    <div className="sk-circle10 sk-child" />
    <div className="sk-circle11 sk-child" />
    <div className="sk-circle12 sk-child" />
  </StyledDiv>
);
