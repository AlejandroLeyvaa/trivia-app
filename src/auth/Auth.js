class Auth {
  constructor(API) {
    this.API = API;
  }

  async signIn(user) {
    let response = null;
    try {
      response = fetch(this.API, {
        method: 'POST',
        signal,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(user),
      });
    } catch (err) {
      console.error(err);
    }
    return response.json();
  }

  async signOut() {
    let response = null;
    try {
      response = await fetch(this.API, { method: 'GET' });
    } catch (err) {
      console.error(err);
    }
    return response;
  }
}

export default Auth;
