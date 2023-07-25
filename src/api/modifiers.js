import { addDataInModifierStore } from "@/indexedDB/modifierStore";
import { GET_MODIFIERS, GET_MODIFIERS_GROUPS } from "./api-url";
import axios from "axios";
import { addDataInModifiersGroupStore } from "@/indexedDB/modifierGroupStore";

export const getModifiers = async (axiosInstanceWithLoginInfo) => {
  try {
    let modifiersData = await axiosInstanceWithLoginInfo.post(
      GET_MODIFIERS,
      {}
    );
    console.log(GET_MODIFIERS + "api response", modifiersData);
    await addDataInModifierStore(modifiersData?.data?.data?.modifiers);
    return modifiersData;
  } catch (error) {
    console.log(GET_MODIFIERS, error);
  }
};

export const getModifierGroups = async (axiosInstanceWithLoginInfo) => {
  try {
    let modifierGroupData = await axiosInstanceWithLoginInfo.post(
      GET_MODIFIERS_GROUPS,
      {}
    );
    console.log(GET_MODIFIERS_GROUPS + "api response", modifierGroupData);
    await addDataInModifiersGroupStore(
      modifierGroupData?.data?.data?.modifier_groups
    );
    return modifierGroupData;
  } catch (error) {
    console.log(GET_MODIFIERS_GROUPS, error);
  }
};
