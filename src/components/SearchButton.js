import styled from 'styled-components';

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.darker};
  border-radius: 22px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.bevel.medium};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  flex: none;
  font-weight: 500;
  height: 44px;
  margin: 12px;
  padding: 0 24px;
  transition: all 150ms linear;

  &:disabled {
    background: #35363a;
    color: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
  }

  &:not(:disabled):focus,
  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: ${({ theme }) => theme.focus};
    outline: none;
  }
`;

export default SearchButton;
