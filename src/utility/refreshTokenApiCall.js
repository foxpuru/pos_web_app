import { store } from "../redux/store";
import axios from "axios";
import { extractDataFromResponse, parseApiErrorResponse } from "./apiUtils";
import { Router } from "next/router";
import { handleLogin, handleLogout } from "../redux/slices/authSlice";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const refreshTokenRequest = async ({ refreshToken }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}admin/refresh`,
      {},
      {
        headers: {
          Authorization: "Bearer " + refreshToken,
        },
      }
    );
    return extractDataFromResponse({
      response,
      showErrorToast: false,
      showSuccessToast: false,
    });
  } catch (error) {
    return parseApiErrorResponse({
      error,
      showToast: false,
    });
  }
};

export const callApi = async ({
  requestFunction,
  successCode = 200,
  showToastOnSuccess = true,
  showPopUpOnSuccess = true,
  showToastOnError = true,
  callRefreshTokenOnAuthError = true,
  authErrorCode = 401,
}) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  // const accessToken = store.getState().auth.accessToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  const axiosInstance = axios.create({
    headers,
  });
  if (requestFunction) {
    try {
      const response = await requestFunction(axiosInstance);
      return extractDataFromResponse({
        response,
        successCode,
        showSuccessToast: showToastOnSuccess,
        showErrorToast: showToastOnError,
        showPopUpOnSuccess: showPopUpOnSuccess,
      });
    } catch (error) {
      if (error.response) {
        if (
          error.response?.data?.statusCode === authErrorCode ||
          error.response?.data.code === authErrorCode
        ) {
          if (callRefreshTokenOnAuthError) {
            const refreshToken = store.getState().auth.refreshToken;

            console.log("refresh token check", refreshToken);
            const refreshTokenResponseData = await refreshTokenRequest({
              refreshToken,
            });
            console.log(
              "-> refreshTokenResponseDatdfda",
              refreshTokenResponseData
            );
            if (refreshTokenResponseData.error) {
              console.log(
                "logout called refreshTokenResponseData.error",
                refreshTokenResponseData.error
              );
              // removeValueLocalStorage();
              store.dispatch(handleLogout());
              Router.push("login");
              return { error: true };
            }
            if (refreshTokenResponseData?.statusCode == 200) {
              console.log(
                "refresh token response checking",
                refreshTokenResponseData?.data
              );
              // setValueLocalStorage(refreshTokenResponseData?.data);
              store.dispatch(handleLogin(refreshTokenResponseData?.data));
              return callApi({
                requestFunction,
                successCode,
                showToastOnSuccess,
                showToastOnError,
                showPopUpOnSuccess,
                callRefreshTokenOnAuthError: false,
              });
            } else {
              return { error: true };
            }
          }
          return { error: true };
        } else if (error?.response?.data?.statusCode === 403) {
          removeValueLocalStorage();
          store.dispatch(handleLogout());
          Router.push("login");
          return { error: true };
        }

        return parseApiErrorResponse({
          error,
          showToast: showToastOnError,
        });
      }
    }
  }
  return { error: true };
};
