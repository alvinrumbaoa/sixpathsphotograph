import { gql } from '@apollo/client';

export const GET_ALL_ALBUMS = gql`
  query GetAllAlbums {
    albums {
      id
      title
      description
      user_id
    }
  }
`;

export const GET_ALBUM_BY_ID = gql`
  query GetAlbumById($id: Int!) {
    albums_by_pk(id: $id) {
      id
      title
      description
    }
  }
`;
