import React, { useEffect, useState } from 'react';
import UsersApi from '../user/UsersApi';
import helper from '../auth/helper';
import { Link } from 'react-router-dom';

const Profile = ({ match }) => {
  const usersApi = new UsersApi();
  const { token, user } = helper().isAuthenticated();
  const [redirection, setRedirection] = useState(false);
  const [userData, setUserData] = useState({});
  const { userId } = match.params;

  console.log(helper().isAuthenticated());

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    usersApi.read(userId, token, signal).then((data) => {
      if (data && data.error) {
        setRedirection(true);
      } else {
        setUserData(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  console.log({user});

  return (
    <>
      <h2>Profile</h2>
      {user._id === userId && (
        <>
          <Link to={`/user/edit/${userId}`}>
            <h2>Edith</h2>
          </Link>
        </>
      )}
    </>
  );
};

export default Profile;
