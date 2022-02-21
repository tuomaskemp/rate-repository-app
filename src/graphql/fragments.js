import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    id
    description
    forksCount
    fullName
    language
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
    url
  }
`;