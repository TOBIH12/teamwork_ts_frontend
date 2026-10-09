import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_FRONTEND_BASE_URL, // Replace with your backend's base URL
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
  },
});

// configure request interceptor to include the token in req.headers.Authorization
axiosInstance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
