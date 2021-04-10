import React, { useState, useEffect } from 'react';
import UsersApi from '../user/UsersApi';
import ImageContainer from './ImageContainer';

const Users = () => {
  const usersApi = new UsersApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    usersApi.listUsers(signal).then((data) => {
      if (data && data.error) {
        console.log('ERROR', data);
      } else {
        console.log('Success', data);
        setUsers(data);
      }
    });
    return () => abortController.abort();
  }, []);

  return (
    <>
      {users.length > 0 && (
        <>
          <div className='users'>
            <h2>Users</h2>
            {users.map((user) => (
              <div key={user._id} className='card card-user'>
                <ImageContainer cls='user-image' />
                <h2>{user.name}</h2>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
