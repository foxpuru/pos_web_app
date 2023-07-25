import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { merchant_store } from "./storeNames";
const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addDataInMerchantStore = async (merchantData) => {
  try {
    console.log("merchantData", merchantData);

    let merchantStoreRequest = await openDB(DB_NAME, VERSION);

    let transaction = merchantStoreRequest.transaction(
      [merchant_store],
      "readwrite"
    );
    const merchantStore = transaction.objectStore(merchant_store);
    merchantStore.add({
      _id: merchantData?.merchant_info?._id,
      ...merchantData,
    });
    merchantStoreRequest.close();
  } catch (error) {
    console.log("error==>merchantData", error);
  }
};
