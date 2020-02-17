import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SearchContext } from './SearchContext';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import logo from '../assets/logo.svg';

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -12px;
  padding-bottom: 32px;
  width: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    padding-bottom: 64px;
  }
`;

const Logo = styled.img`
  height: 24px;
  margin: 12px;

  @media (min-width: 900px) {
    height: 32px;
  }
`;

function SearchForm() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [value, setValue] = useState(searchTerm);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(`${value} sort:stars`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Logo src={logo} alt="Github" />
      <SearchInput
        placeholder="Search&hellip;"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <SearchButton disabled={!value.length}>Search</SearchButton>
    </Form>
  );
}

export default SearchForm;
