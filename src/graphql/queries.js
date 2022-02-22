import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query {
    repositories {
        edges {
          node {
            ...RepositoryFields
          }
        }
    }
}`;

export const ME = gql`
   query {
      me {
        id
        username
      }
    }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryFields
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;