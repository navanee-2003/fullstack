import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create();

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
