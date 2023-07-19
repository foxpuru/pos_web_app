import { GET_MODIFIERS } from "./api-url";
import axios from "axios";

export const getModifiers = async (axiosInstanceWithLoginInfo) => {
  try {
    let modifiersData = await axiosInstanceWithLoginInfo.post(
      GET_MODIFIERS,
      {}
    );
    console.log(GET_MODIFIERS + "api response", modifiersData);
    return modifiersData;
  } catch (error) {
    console.log(GET_MODIFIERS, error);
  }
};
