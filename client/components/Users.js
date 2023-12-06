import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/users';
import React from 'react'
const Users = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.users.map(user => (
        <div key={user.id}>
          <p>{user.username}</p>
          {/* other user details */}
        </div>
      ))}
    </div>
  );
}; 

export default Users
