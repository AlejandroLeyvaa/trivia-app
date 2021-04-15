class UsersApi {
  constructor() {
    this.API = 'http://localhost:3001/api/users';
  }

  async createUser(user) {
    try {
      const response = await fetch(this.API, {
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

  async listUsers(signal) {
    try {
      const response = await fetch(this.API, {
        method: 'GET',
        signal,
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  async read(params, credentials, signal) {
    try {
      const response = await fetch(`${this.API}/${params}`, {
        method: 'GET',
        signal,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `'Bearer '${credentials}`,
        },
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  async update(params, credentials, user) {
    try {
      const response = fetch(`${this.API}/${params.userId}`, {
        method: 'PUT',
        signal,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `'Bearer '${credentials.t}`,
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }

  async delete(params, credentials, signal) {
    let response = null;
    try {
      response = fetch(`${this.API}/${params.userId}`, {
        method: 'DELETE',
        signal,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `'Bearer '${credentials.t}`,
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
}

export default UsersApi;
