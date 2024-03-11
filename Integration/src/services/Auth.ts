import axios, { AxiosResponse } from "axios";
import instance from "./Axios";

const api_uri = "http://localhost:8181";

interface UserData {
  // Define the structure of your user data if needed
}

export const login = (data: UserData) =>
  axios.post(`${api_uri}/api/v1/auth/login`, data);

export const register = (data: UserData) =>
  axios.post(`${api_uri}/api/v1/auth/register`, data);

export const logout = () =>
  instance.post(`${api_uri}/api/v1/auth/logout`) as Promise<AxiosResponse<void>>;

export const forgotPassword = (data: any) =>
  axios.patch(`${api_uri}/api/v1/auth/forgot_password`, data);
