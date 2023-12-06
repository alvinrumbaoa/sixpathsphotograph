import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      username
      email
      profile_picture
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: Int!) {
    users_by_pk(id: $id) {
      id
      username
      email
      profile_picture
    }
  }
`;
