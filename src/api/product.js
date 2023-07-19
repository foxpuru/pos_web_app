import { GET_PRODUCT_CATEGORIES } from "./api-url";

export const getProductCategories = async (axiosInstanceWithLoginInfo) => {
  try {
    let getProductCategoriesData = await axiosInstanceWithLoginInfo.post(
      GET_PRODUCT_CATEGORIES,
      {}
    );
    console.log(
      GET_PRODUCT_CATEGORIES + "api response",
      getProductCategoriesData
    );
    return getProductCategoriesData;
  } catch (error) {
    console.log(GET_PRODUCT_CATEGORIES, error);
  }
};
