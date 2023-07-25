import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { modifier_store } from "./storeNames";
const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addDataInModifierStore = async (modifierData) => {
  try {
    console.log("modifierData", modifierData);

    let modifierStoreRequest = await openDB(DB_NAME, VERSION);

    let transaction = modifierStoreRequest.transaction(
      [modifier_store],
      "readwrite"
    );
    const modifierStore = transaction.objectStore(modifier_store);
    modifierData.forEach((mItem) => {
      modifierStore.add({
        ...mItem,
      });
    });
    modifierStoreRequest.close();
  } catch (error) {
    console.log("error==>modifierData", error);
  }
};

// export const getDataFromProductStore = async () => {
//   try {
//     let productStoreRequest = await openDB(DB_NAME, VERSION);

//     let transaction = productStoreRequest.transaction(
//       [product_store],
//       "readwrite"
//     );
//     const productStore = transaction.objectStore(product_store);
//     let data = await productStore.getAll();
//     productStoreRequest.close();
//     return data;
//   } catch (error) {
//     console.log("error==>getDataFromProductStore", error);
//   }
// };
