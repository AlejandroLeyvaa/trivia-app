class Auth {
  constructor() {
    this.API = 'http://localhost:3001/auth';
  }

  async signIn(user) {
    console.log({user});
    try {
      const response = await fetch(`${this.API}/signin`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  async signOut() {
    try {
      const response = await fetch(`${this.API}/signout`, { method: 'GET' });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
}

export default Auth;
