import { gql } from 'apollo-boost';

export const QUERY_REPOSITORIES = gql`
  query search($searchTerm: String!, $first: Int!, $after: String) {
    search(query: $searchTerm, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          nameWithOwner
          primaryLanguage {
            id
            name
            color
          }
          stargazers {
            totalCount
          }
          watchers {
            totalCount
          }
        }
      }
    }
  }
`;

export const QUERY_REPOSITORY = gql`
  query repository($repo: String!, $owner: String!) {
    repository(name: $repo, owner: $owner) {
      id
      nameWithOwner
      updatedAt
      languages(first: 5) {
        nodes {
          ... on Language {
            id
            name
            color
          }
        }
      }
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
    }
  }
`;
