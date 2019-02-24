import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  width: 30rem;
  position: relative;
`;

export const SearchInput = styled.input`
  flex-grow: 2;
  border: 0.2rem solid ${props => props.theme.secondary};
  padding: 1rem;
  flex: 0.9;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  outline: none;
  flex: 0.125;
  border-style: solid;
  cursor: pointer;
  border: 1px solid ${props => props.theme.secondary};
  background: ${props => props.theme.secondary};
  color: white;
  transition: all 0.2s ease-in-out;

  &[disabled] {
    cursor: not-allowed;
  }

  &:focus {
    color: #794f96;
  }
`;

export const SearchResultsContainer = styled.div`
  position: absolute;
  z-index: 500;
  width: 100%;
  transform: translateY(6rem);
  background-color: ${props => props.theme.white};
`;

export const SearchResultsWrapper = styled.ul`
  list-style: none;
  color: ${props => props.theme.secondary};
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.19);
  font-size: 1.25rem;
`;

export const SearchResult = styled.li`
  color: ${props => props.theme.secondary};
  background-color: inherit;
  cursor: pointer;
  transition: all 0.5s ease-in-out forwards;
  padding: 1rem 0;

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.secondary};
  }
`;
