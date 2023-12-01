import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5005/api",
});

service.interceptors.request.use((req) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default service;
