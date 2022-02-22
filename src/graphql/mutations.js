import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
            expiresAt
            user {
                id
                username
                createdAt
            }
        }
    }  
`;

export const CREATE_REVIEW = gql`
    mutation createReview($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;