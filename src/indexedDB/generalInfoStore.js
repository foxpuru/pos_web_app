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
      id: Date.now(),
      merchantData: merchantData,
    });
    merchantStoreRequest.close();
  } catch (error) {
    console.log("error==>merchantData", error);
  }
};

// console.log("merchantStoreRequest0", merchantStoreRequest.objectStoreNames);
// console.log(
//   "merchantStoreRequest1",
//   merchantStoreRequest.objectStoreNames.contains(merchant_store)
// );
// if (!merchantStoreRequest.objectStoreNames.contains(merchant_store)) {
//   merchantStoreRequest.createObjectStore(merchant_store, {
//     keyPath: "id",
//   });
// }
