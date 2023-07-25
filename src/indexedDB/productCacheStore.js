import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { product_cache_images_store } from "./storeNames";
const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addImagesInProductCacheStore = async (productImagesData) => {
  try {
    console.log("productCacheData", productImagesData);

    let productImageStoreRequest = await openDB(DB_NAME, VERSION);

    let transaction = productImageStoreRequest.transaction(
      [product_cache_images_store],
      "readwrite"
    );
    const productImagesStore = transaction.objectStore(
      product_cache_images_store
    );
    productImagesData?.forEach((pItem) => {
      productImagesStore.add({
        _id: pItem?.product_id,
        ProductImage: pItem?.downloadProductImage,
      });
    });
    productImageStoreRequest.close();
  } catch (error) {
    console.log("error==>productData", error);
  }
};
