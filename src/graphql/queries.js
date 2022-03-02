import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query(
    $orderDirection: OrderDirection, 
    $orderBy: AllRepositoriesOrderBy, 
    $searchKeyword: String,
    $after: String,
    $first: Int) {
    repositories(
      orderDirection: $orderDirection, 
      orderBy: $orderBy, 
      searchKeyword: $searchKeyword,
      after: $after,
      first: $first) {
        edges {
          node {
            ...RepositoryFields
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
    }
}`;

export const ME = gql`
  ${REVIEW_FIELDS}
   query getCurrentUser($includeReviews: Boolean = false) {
      me {
        id
        username
        reviews @include(if: $includeReviews) {
          edges {
            node {
              ...ReviewFields
            }
            cursor
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
          }
        }
      }
    }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
  query ($repositoryId: ID!, $after: String, $first: Int) {
    repository(id: $repositoryId) {
      ...RepositoryFields
      reviews(after: $after, first: $first) {
        totalCount
        edges {
          node {
            ...ReviewFields
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;