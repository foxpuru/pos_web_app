import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
// import { store } from "@/redux/store";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import {
  auth_store,
  merchant_store,
  modifier_store,
  product_store,
  timestamp_store,
  variant_store,
} from "./storeNames";
import { addDataInAuthStore, getDataFromAuthStore } from "./authStore";
const DB_NAME = "pos-web-app";

const VERSION = 1;

const addTimeStampStore = async () => {
  await openDB(DB_NAME, VERSION, {
    upgrade(db) {
      db.createObjectStore(timestamp_store, { keyPath: "id" }).add({
        id: Date.now(),
        last_updated_time: new Date().toISOString(),
      });
      db.createObjectStore(auth_store, {
        keyPath: "id",
      });
      db.createObjectStore(merchant_store, {
        keyPath: "id",
      });
      db.createObjectStore(product_store, {
        keyPath: "id",
      });
      db.createObjectStore(modifier_store, {
        keyPath: "id",
      });
      db.createObjectStore(variant_store, {
        keyPath: "id",
      });
      db.close();
    },
  });
  await getDataFromAuthStore();
};

export const IndexedDB_Connection = () => {
  if ("indexedDB" in window) {
    addTimeStampStore();
    console.log("This browser support IndexedDB");
  } else {
    alert("This browser doesn't support IndexedDB");
  }
};
