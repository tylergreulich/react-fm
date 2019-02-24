import styled from 'styled-components';

export const Summary = styled.p`
  color: ${props => props.theme.darkGrey};
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;

  a {
    margin-top: 0.5rem;
    display: table;
  }
`;
