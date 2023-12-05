// pages/index.js
import { useQuery } from '@apollo/client';
import { GET_PHOTOS } from '../graphql/queries';
import client from '../lib/apolloClient';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.photos.map(({ photo_id, title, description }) => (
        <div key={photo_id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
