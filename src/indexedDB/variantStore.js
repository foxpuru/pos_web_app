import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { product_variant_store } from "./storeNames";
const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addDataInVariantStore = async (variantData) => {
  try {
    console.log("variantData", variantData);

    let variantStoreRequest = await openDB(DB_NAME, VERSION);

    let transaction = variantStoreRequest.transaction(
      [product_variant_store],
      "readwrite"
    );
    const variantStore = transaction.objectStore(product_variant_store);
    variantData.forEach((pItem) => {
      variantStore.add({
        ...pItem,
      });
    });
    variantStoreRequest.close();
  } catch (error) {
    console.log("error==>variantData", error);
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
