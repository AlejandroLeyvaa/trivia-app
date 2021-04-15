import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthApi from '../auth/AuthApi';
import helper from '../auth/helper';
import ImageContainer from './ImageContainer';

const Header = ({ userImage, userName, heroImage, path, history }) => {
  const authApi = new AuthApi();
  const [modal, setModal] = useState(false);

  function handleModal(e) {
    console.log(modal);
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  return (
    <header className='header'>
      <Link className='logo' to='/'>
        <span>Educacion ambiental</span>
      </Link>
      <button type='button' className='menu' onClick={handleModal}>
        <div className='burguer'>
          <div className='rec' />
          <div className='rec' />
          <div className='rec' />
        </div>
      </button>
      {modal === true && (
        <nav className='modal'>
          {!helper().isAuthenticated() && (
            <>
              <button type='button' className='close' onClick={handleClose}>
                <div className='circle'>
                  <div className='rec' />
                  <div className='rec' />
                </div>
              </button>
              <Link className='route' onClick={handleClose} to='/signup'>
                <h2>Sign Up</h2>
              </Link>
              <Link className='route' onClick={handleClose} to='/signin'>
                <h2>Sign In</h2>
              </Link>
              <Link className='route' onClick={handleClose} to='/questions'>
                <h2>Play</h2>
              </Link>
            </>
          )}
          {helper().isAuthenticated() && (
            <>
              <Link
                className='route'
                onClick={handleClose}
                to={`/user/${helper().isAuthenticated().user._id}`}
              >
                <h2>Profile</h2>
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
