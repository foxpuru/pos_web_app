import { addDataInProductStore } from "@/indexedDB/productStore";
import { GET_PRODUCT_CATEGORIES, GET_PRODUCT } from "./api-url";
import { filterImagesUrlFromProductsArr } from "./downloadImages";
import { addDataInProductCategoryStore } from "@/indexedDB/categoryStore";
import { addImagesInProductCacheStore } from "@/indexedDB/productCacheStore";

export const getProducts = async (axiosInstanceWithLoginInfo) => {
  try {
    let productData = await axiosInstanceWithLoginInfo.post(GET_PRODUCT, {});
    console.log(GET_PRODUCT + "api response", productData);
    await addDataInProductStore(productData?.data?.data);
    const downloadedImages = await filterImagesUrlFromProductsArr(
      productData?.data?.data?.products
    );
    console.log("downloadedImages", downloadedImages);
    await addImagesInProductCacheStore(downloadedImages);
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
    console.log(
      GET_PRODUCT_CATEGORIES + "api response",
      productCategories?.data?.data
    );
    await addDataInProductCategoryStore(productCategories?.data?.data);
    return productCategories;
  } catch (error) {
    console.log(GET_PRODUCT_CATEGORIES, error);
  }
};
