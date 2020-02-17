import React from 'react';
import { SearchContextProvider } from './SearchContext';
import RepositoryList from './RepositoryList';
import SearchForm from './SearchForm';

function HomePage() {
  return (
    <SearchContextProvider>
      <SearchForm />
      <RepositoryList />
    </SearchContextProvider>
  );
}

export default HomePage;
