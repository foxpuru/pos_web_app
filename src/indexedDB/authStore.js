import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import { auth_store } from "./storeNames";

const DB_NAME = "pos-web-app";
const VERSION = 1;

export const addDataInAuthStore = async (authData) => {
  try {
    const { access, refresh } = authData?.tokens;
    let authStoreRequest = await openDB(DB_NAME, VERSION);
    let transaction = authStoreRequest.transaction([auth_store], "readwrite");
    const authStore = transaction.objectStore(auth_store);
    authStore.add({
      id: Date.now(),
      tokens: { access: access?.token, refresh: refresh?.token },
    });
    authStoreRequest.close();
  } catch (error) {
    console.log("error==>addDataInAuthStore", error);
  }
};

export const getDataFromAuthStore = async () => {
  try {
    let authStoreRequest = await openDB(DB_NAME, VERSION);
    let transaction = authStoreRequest.transaction([auth_store], "readonly");
    const authStore = transaction.objectStore(auth_store);
    let data = await authStore.getAll();
    console.log("datas", data);
    authStoreRequest.close();
    return data;
  } catch (error) {
    console.log("error==>addDataInAuthStore", error);
  }
};
