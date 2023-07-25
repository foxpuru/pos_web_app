import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { product_store } from "./storeNames";
const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addDataInProductStore = async (productData) => {
  try {
    console.log("productData", productData);

    let productStoreRequest = await openDB(DB_NAME, VERSION);

    let transaction = productStoreRequest.transaction(
      [product_store],
      "readwrite"
    );
    const productStore = transaction.objectStore(product_store);
    productData?.products.forEach((pItem) => {
      productStore.add({
        _id: pItem?._id,
        productDetails: pItem,
      });
    });
    productStoreRequest.close();
  } catch (error) {
    console.log("error==>productData", error);
  }
};

export const getDataFromProductStore = async () => {
  try {
    let productStoreRequest = await openDB(DB_NAME, VERSION);

    let transaction = productStoreRequest.transaction(
      [product_store],
      "readwrite"
    );
    const productStore = transaction.objectStore(product_store);
    let data = await productStore.getAll();
    productStoreRequest.close();
    return data?.map((item) => item?.productDetails);
  } catch (error) {
    console.log("error==>getDataFromProductStore", error);
  }
};
