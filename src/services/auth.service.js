import axios from "axios";

const API_URL = "https://zvlmessenger.herokuapp.com";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + `/api/auth/signin`, { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("Token", JSON.stringify(response.data.accessToken));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("Token");
  }

  register(username, email, password, name) {
    return axios.post(API_URL + `/api/auth/signup`, {
      username,
      email,
      password,
      name,
    });
  }
}

export default new AuthService();