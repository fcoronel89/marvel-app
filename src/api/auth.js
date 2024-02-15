//import { axiosInstance } from "./axiosInstance";

export const login = async (user) => {
  //return await axiosInstance.post("/auth/login", user);
  return { data: { userName: user.userName } };
};

export const register = async (user) => {
  //return await axiosInstance.post("/auth/register", user);
  return { success: true, data: { userName: user.userName } };
};

export const logout = async () => {
  //return await axiosInstance.get("/auth/logout");
  return { success: true };
};
