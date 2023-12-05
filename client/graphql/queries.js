// graphql/queries.js
import { gql } from '@apollo/client';

export const GET_PHOTOS = gql`
  query GetPhotos {
    photos {
      photo_id
      title
      description
      upload_date
      file_url
      thumbnail_url
    }
  }
`;
