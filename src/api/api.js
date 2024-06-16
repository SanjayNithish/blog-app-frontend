import axios from "axios";

const API_URI = "https://blog-app-backend-spea.onrender.com";

export const api = axios.create({
  baseURL: API_URI,
  withCredentials: true,
});
