import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_REPOSITORIES } from '../queries';
import { SearchContext } from './SearchContext';
import RepositoryListItem from './RepositoryListItem';
import Loading from './Loading';

function RepositoryList() {
  const { searchTerm } = useContext(SearchContext);

  const { loading, error, data } = useQuery(QUERY_REPOSITORIES, {
    variables: { searchTerm, first: 20 }
  });

  if (searchTerm) {
    if (loading) return <Loading />;

    if (error) return <p>He's Dead Jim&hellip;</p>;

    return data.search.nodes.map((item, index) => (
      <RepositoryListItem key={item.id} item={item} index={index} />
    ));
  } else {
    return null;
  }
}

export default RepositoryList;
