import axios from "axios";

const service = axios.create({  
  baseURL: import.meta.env.VITE_SERVER_URL,
});

service.interceptors.request.use((req) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default service;
