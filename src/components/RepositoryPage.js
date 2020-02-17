import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { parseISO, format } from 'date-fns';
import { QUERY_REPOSITORY } from '../queries';
import Loading from './Loading';
import Tag, { TagGroup } from './Tag';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  margin-bottom: 16px;
  word-wrap: break-word;
  text-align: center;
  width: 100%;

  @media (min-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Updated = styled.p`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 24px;
`;

function RepositoryPage({
  match: {
    params: { owner, repo }
  }
}) {
  const { loading, error, data } = useQuery(QUERY_REPOSITORY, {
    variables: { owner, repo }
  });

  if (loading) return <Loading />;

  if (error) return <Title>Repository Not Found</Title>;

  return (
    <Wrapper>
      <Title>{data.repository.nameWithOwner}</Title>
      <Updated>Updated on {format(parseISO(data.repository.updatedAt), 'dd MMMM yyyy')}</Updated>
      <TagGroup>
        <Tag>Stars: {data.repository.stargazers.totalCount}</Tag>
        <Tag>Watchers: {data.repository.watchers.totalCount}</Tag>
        {data.repository.languages.nodes.map(language => (
          <Tag key={language.id} color={language.color}>
            {language.name}
          </Tag>
        ))}
      </TagGroup>
    </Wrapper>
  );
}

export default RepositoryPage;
