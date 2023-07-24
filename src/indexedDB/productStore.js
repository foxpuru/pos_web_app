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
    productStore.add({
      id: Date.now(),
      merchantData: productData,
    });
    productStoreRequest.close();
  } catch (error) {
    console.log("error==>productData", error);
  }
};
