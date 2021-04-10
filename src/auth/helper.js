function helper() {
  function authenticate(jwt, callback) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('jwt', JSON.stringify(jwt));
      callback();
    }
  }

  function isAuthenticated() {
    let jwt = null;
    if (typeof window === 'undefined') {
      return false;
    }

    if (sessionStorage.getItem('jwt')) {
      jwt = JSON.parse(sessionStorage.getItem('jwt'));
    }
    return jwt;
  }

  function clearJWT(callback) {
    if (typeof window === 'undefined') {
      sessionStorage.removeItem('jwt');
    }
    callback();
  }

  return {
    authenticate,
    isAuthenticated,
    clearJWT,
  };
}

export default helper;
