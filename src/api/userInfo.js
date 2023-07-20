import { GET_USER_INFO } from "./api-url";

export const getUserInfo = async (axiosInstanceWithLoginInfo) => {
  try {
    let userData = await axiosInstanceWithLoginInfo.get(GET_USER_INFO);
    console.log(GET_USER_INFO + "api response", userData);
    return userData;
  } catch (error) {
    console.log(GET_USER_INFO, error);
  }
};
