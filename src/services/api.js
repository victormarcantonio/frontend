import axios from "axios";

const api = axios.create({
     baseURL: "https://omnistack-backend-v.herokuapp.com",
});

export default api;