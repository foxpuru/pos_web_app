import { addDataInProductStore } from "@/indexedDB/productStore";
import {
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCT,
  GET_PRODUCT_VARIANTS,
} from "./api-url";
import { filterImagesUrlFromProductsArr } from "./downloadImages";
import { addDataInProductCategoryStore } from "@/indexedDB/categoryStore";
import { addImagesInProductCacheStore } from "@/indexedDB/productCacheStore";
import { addDataInVariantStore } from "@/indexedDB/variantStore";

export const getProducts = async (axiosInstanceWithLoginInfo) => {
  try {
    let productData = await axiosInstanceWithLoginInfo.post(GET_PRODUCT, {});
    console.log(GET_PRODUCT + "api response", productData);

    const downloadedImages = await filterImagesUrlFromProductsArr(
      productData?.data?.data?.products
    );
    await addDataInProductStore(productData?.data?.data);
    console.log("downloadedImages", downloadedImages);
    // await addImagesInProductCacheStore(downloadedImages);
    return productData;
  } catch (error) {
    console.log(GET_PRODUCT, error);
  }
};

export const getProductVariants = async (axiosInstanceWithLoginInfo) => {
  try {
    let productVariantData = await axiosInstanceWithLoginInfo.post(
      GET_PRODUCT_VARIANTS,
      {}
    );
    console.log(GET_PRODUCT_VARIANTS + "api response", productVariantData);

    await addDataInVariantStore(
      productVariantData?.data?.data?.product_variants
    );
    // await addImagesInProductCacheStore(downloadedImages);
    return productVariantData;
  } catch (error) {
    console.log(GET_PRODUCT_VARIANTS, error);
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
