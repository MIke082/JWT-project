export default function authHeader() {
    const token = JSON.parse(localStorage.getItem("Token"));
  
    if (token) {
      // For Spring Boot back-end
      // return { Authorization: "Bearer " + user.accessToken };
  
      // for Node.js Express back-end
      return { 'Authorization': 'Bearer ' + token , 'Content-Type': 'application/json' };
    } else {
      return {};
    }
  }