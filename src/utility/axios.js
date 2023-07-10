import axios, { AxiosResponse } from "axios";
//import setHeader from "../utility/context/setHeaders"
import {
  SuccessNotification,
  ErrorNotification,
} from "../toastify/MyToast/myToast";
import { store as storeReducer } from "../redux/storeConfig/store";

export const bareAxiosInstance = axios.create({
  responseType: "json",
  // headers: { 'Access-Control-Allow-Origin': '*' },
});

axios.defaults.timeout = 20000;
axios.defaults.headers.common["device-type"] = "POS-WEB-APP";
axios.defaults.headers.common["device-name"] = "1234567890";
axios.defaults.headers.common["device-token"] = "1234567891";
axios.defaults.headers.common["is-debug"] = "0";
axios.defaults.headers.common["device-id"] = "12345678912";
axios.defaults.headers.common["app-version"] = "1.0";
axios.defaults.headers.common["device-os-version"] = "10";
axios.defaults.headers.common["environment"] = "DEVELOPMENT";
axios.defaults.headers.common["locale-code"] = "en";
axios.defaults.headers.common["tm"] = "";
axios.defaults.headers.common["app-signature"] = "";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: "json",
  headers: { "Access-Control-Allow-Origin": "*" },
});

export const axiosAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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
  // console.log(storeReducer.getState().auth, 'storeReducer.getState().')
  config.headers.Authorization = `Bearer ${
    storeReducer.getState().auth.tokenData.access.token
  }`;
  //   config.headers.location = `${
  //     storeReducer.getState().location.merchantLocation
  //   }`;
  return config;
});
