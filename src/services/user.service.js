import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://zvlmessenger.herokuapp.com";

class UserService {

  getPosts() {
    return axios.get(API_URL + `/getposts`, { headers: authHeader() }); // поменял user на getposts
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();