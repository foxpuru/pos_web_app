import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
// import { store } from "@/redux/store";
import { openDB, deleteDB, wrap, unwrap } from "idb";
import {
  auth_store,
  category_store,
  merchant_store,
  modifier_store,
  product_cache_images_store,
  product_store,
  timestamp_store,
  variant_store,
} from "./storeNames";
const DB_NAME = "pos-web-app";

const VERSION = 1;

const createStore = async () => {
  await openDB(DB_NAME, VERSION, {
    upgrade(db) {
      // timestamp_store
      db.createObjectStore(timestamp_store, { keyPath: "_id" }).add({
        _id: Date.now(),
        last_updated_time: new Date().toISOString(),
      });
      // auth_store
      db.createObjectStore(auth_store, {
        keyPath: "_id",
      });
      // merchant_store
      db.createObjectStore(merchant_store, {
        keyPath: "_id",
      });
      // product_store
      db.createObjectStore(product_store, {
        keyPath: "_id",
      });
      // product_cache_images_store
      db.createObjectStore(product_cache_images_store, {
        keyPath: "_id",
      });
      // category_store
      db.createObjectStore(category_store, {
        keyPath: "_id",
      });
      // modifier_store
      db.createObjectStore(modifier_store, {
        keyPath: "_id",
      });
      // variant_store
      db.createObjectStore(variant_store, {
        keyPath: "_id",
      });
      db.close();
    },
  });
  // await getDataFromAuthStore();
};

export const IndexedDB_Connection = () => {
  if ("indexedDB" in window) {
    createStore();
    console.log("This browser support IndexedDB");
  } else {
    alert("This browser doesn't support IndexedDB");
  }
};
