import { gql } from '@apollo/client';

export const GET_ALL_PHOTOS = gql`
  query GetAllPhotos {
    photos {
      id
      title
      description
      url
      user_id
    }
  }
`;

export const GET_PHOTO_BY_ID = gql`
  query GetPhotoById($id: Int!) {
    photos_by_pk(id: $id) {
      id
      title
      description
      url
    }
  }
`;
