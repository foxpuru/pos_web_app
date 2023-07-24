import { addDataInProductStore } from "@/indexedDB/productStore";
import { GET_PRODUCT_CATEGORIES, GET_PRODUCT } from "./api-url";
import { filterImagesUrlFromProductsArr } from "./downloadImages";

export const getProducts = async (axiosInstanceWithLoginInfo) => {
  try {
    let productData = await axiosInstanceWithLoginInfo.post(GET_PRODUCT, {});
    console.log(GET_PRODUCT + "api response", productData);
    await addDataInProductStore(productData?.data?.data);
    await filterImagesUrlFromProductsArr(productData?.data?.data?.products);
    return productData;
  } catch (error) {
    console.log(GET_PRODUCT, error);
  }
};
export const getProductCategories = async (axiosInstanceWithLoginInfo) => {
  try {
    let productCategories = await axiosInstanceWithLoginInfo.post(
      GET_PRODUCT_CATEGORIES,
      {}
    );
    console.log(GET_PRODUCT_CATEGORIES + "api response", productCategories);
    return productCategories;
  } catch (error) {
    console.log(GET_PRODUCT_CATEGORIES, error);
  }
};
