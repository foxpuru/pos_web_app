import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
// import { store } from "@/redux/store";
import { openDB, deleteDB, wrap, unwrap } from "idb";

const addTimeStampStore = async () => {
  // const store = db.createObjectStore(STORE_NAME, {
  //   // The 'id' property of the object will be the key.
  //   keyPath: "id",
  //   // If it isn't explicitly set, create a value by auto incrementing.
  //   autoIncrement: true,
  // });
  await openDB(DB_NAME, VERSION, {
    upgrade(db) {
      db.createObjectStore(timestamp_store, {
        // The 'id' property of the object will be the key.
        keyPath: "id",
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      db.createObjectStore(STORE_NAME, {
        // The 'id' property of the object will be the key.
        keyPath: "id",
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      // store.createIndex("lastUpdated", "id");
    },
  });
};

export const IndexedDB_Connection = () => {
  //   window.indexedDB =
  //     window.indexedDB ||
  //     window.mozIndexedDB ||
  //     window.webkitIndexedDB ||
  //     window.msIndexedDB;

  //   window.IDBTransaction =
  //     window.IDBTransaction ||
  //     window.webkitIDBTransaction ||
  //     window.msIDBTransaction;
  //   window.IDBKeyRange =
  //     window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

  //   if (!window.indexedDB) {
  //     window.alert("Your browser doesn't support a stable version of IndexedDB.");
  //   }
  if ("indexedDB" in window) {
    // store.dispatch(handle_IndexedDb_Connection(true));
    addTimeStampStore();
    console.log("This browser support IndexedDB");
  } else {
    alert("This browser doesn't support IndexedDB");
  }
};

import { handle_IndexedDb_Connection } from "@/redux/slices/indexedDb_Slice";
import { openDB, deleteDB, wrap, unwrap } from "idb";
const DB_NAME = "pos-web-app";
const VERSION = 1;

export const createAuthStore = async (authData) => {
  const STORE_NAME = "auth";
  await openDB(DB_NAME, VERSION, {
    upgrade(db) {
      const store = db.createObjectStore(STORE_NAME, {
        // The 'id' property of the object will be the key.
        keyPath: "id",
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      store.createIndex("auth", "id");
      store.add({ authData });
    },
  });
};
