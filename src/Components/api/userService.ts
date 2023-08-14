import axios from "../../config/axios";

export const singupApi = (userData: { userName: string;email: string;password: string}) => {
 return axios.post("sign-up", userData);
};

export const loginApi = (userData: { email: string; password: string }) => {
  return axios.post("login", userData);
};
