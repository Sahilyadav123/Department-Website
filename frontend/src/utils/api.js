import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const loginUser = (credentials) => API.post("/login", credentials);
export const uploadCertificate = (data) => API.post("/upload", data);
// Add other API calls here
