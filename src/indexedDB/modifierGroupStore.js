import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { modifiers_group_store } from "./storeNames";
const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addDataInModifiersGroupStore = async (modifiersGroupData) => {
  try {
    console.log("modifiersGroupData", modifiersGroupData);

    let modifiersGroupStoreRequest = await openDB(DB_NAME, VERSION);

    let transaction = modifiersGroupStoreRequest.transaction(
      [modifiers_group_store],
      "readwrite"
    );
    const modifiersGroupStore = transaction.objectStore(modifiers_group_store);
    modifiersGroupData.forEach((mgItem) => {
      modifiersGroupStore.add({
        ...mgItem,
      });
    });
    modifiersGroupStoreRequest.close();
  } catch (error) {
    console.log("error==>modifiersGroupData", error);
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
