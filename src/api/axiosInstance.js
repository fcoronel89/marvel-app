import axios from "axios";
import md5 from "md5";
import {
  apiUrl,
  marvelApiUrl,
  marvelApiKey,
  marvelPrivateApiKey,
} from "../utils/helpers";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});


export const axiosInstanceMarvel = axios.create({
  baseURL: marvelApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstanceMarvel.interceptors.request.use((config) => {
  const timestamp = new Date().getTime().toString();
  const hash = md5(timestamp + marvelPrivateApiKey + marvelApiKey );

  config.params = {
    ...config.params,
    apikey: marvelApiKey,
    ts: timestamp,
    hash: hash,
  };

  return config;
});
