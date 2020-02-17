import styled from 'styled-components';
import icon from '../assets/icon-search.svg';

const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url(${icon});
  background-position: 16px center;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  border-radius: 22px;
  box-shadow: ${({ theme }) => theme.bevel.medium};
  flex: 1 1 auto;
  height: 44px;
  margin: 12px;
  padding: 0 16px 0 48px;
  transition: all 150ms linear;
  width: 100%;

  &:not(:disabled):focus,
  &:not(:disabled):active {
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: ${({ theme }) => theme.focus};
    outline: none;
  }

  @media (min-width: 900px) {
    width: auto;
  }
`;

SearchInput.defaultProps = {
  type: 'search'
};

export default SearchInput;
