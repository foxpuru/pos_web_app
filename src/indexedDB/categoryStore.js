import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { category_store } from "./storeNames";

const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addDataInProductCategoryStore = async (categoryData) => {
  try {
    console.log("categoryData", categoryData);

    let categoryStoreRequest = await openDB(DB_NAME, VERSION);
    let transaction = categoryStoreRequest.transaction(
      [category_store],
      "readwrite"
    );
    const categoryStore = transaction.objectStore(category_store);
    categoryData?.categories.forEach((cItem) => {
      categoryStore.add({
        _id: cItem?._id,
        categoryDetails: cItem,
      });
    });

    categoryStoreRequest.close();
  } catch (error) {
    console.log("error==>categoryData", error);
  }
};

export const getataFromProductCategoryStore = async () => {
  try {
    let productCategoryStoreRequest = await openDB(DB_NAME, VERSION);
    let transaction = productCategoryStoreRequest.transaction(
      [category_store],
      "readonly"
    );
    const pCategoryStore = transaction.objectStore(category_store);
    let data = await pCategoryStore.getAll();
    console.log("getataFromProductCategoryStore", data);
    productCategoryStoreRequest.close();
    return data?.map((item) => item?.categoryDetails);
  } catch (error) {
    console.log("error==>getataFromProductCategoryStore", error);
  }
};

// export const isAuthStoreExist = async () => {
//   let productCategoryStoreRequest = await openDB(DB_NAME, VERSION);
//   console.log("is_exist", productCategoryStoreRequest?.objectStoreNames.contains("auth"));
//   const isAuthExist = productCategoryStoreRequest?.objectStoreNames.contains("auth");
//   productCategoryStoreRequest.close();
//   return isAuthExist;
// };
