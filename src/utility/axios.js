import axios from "axios";
import { loadFromLocalStorage } from "./setAndRemoveAuthData";
// import { store as storeReducer } from "../redux/store";

export const bareAxiosInstance = axios.create({
  responseType: "json",
});

axios.defaults.timeout = 20000;
axios.defaults.headers.common["device-type"] = "ANDROID";
axios.defaults.headers.common["device-name"] = "POS";
axios.defaults.headers.common["device-token"] = "1234567891";
axios.defaults.headers.common["is-debug"] = "0";
axios.defaults.headers.common["device-id"] = "12345678912";
axios.defaults.headers.common["app-version"] = "1.0";
axios.defaults.headers.common["device-os-version"] = "10";
axios.defaults.headers.common["environment"] =
  process.env.NEXT_PUBLIC_ENVIRONMENT;
axios.defaults.headers.common["locale-code"] = "en";
axios.defaults.headers.common["tm"] = "";
axios.defaults.headers.common["app-signature"] = "";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  responseType: "json",
  headers: { "Access-Control-Allow-Origin": "*" },
});

export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  responseType: "json",
  headers: { "Access-Control-Allow-Origin": "*" },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    //const statusCode = error.response.status
    return Promise.reject(error);
  }
);
axiosAuth.interceptors.request.use(function (config) {
  // config.headers.Authorization = `Bearer ${
  //   storeReducer.getState().auth.tokenData.access.token
  // }`;
  // config.headers.location = `${
  //   storeReducer.getState().location.merchantLocation
  // }`;
  return config;
});

export const createAxiosInstance = (accessToken) => {
  const axiosInstanceWithLoginInfo = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    data: { last_updated_datetime: "" },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return axiosInstanceWithLoginInfo;
};
