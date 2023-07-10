import { openDB } from "idb";

const DB_NAME = "pos-web-app-database";
const DB_VERSION = 1;
const STORE_NAME = "my-store";

// Open the IndexedDB database
const openDatabase = () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

// Save data to IndexedDB
export const saveData = async (key, value) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.put(value, key);
  await tx.done;
};

// Get data from IndexedDB
export const getData = async (key) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  return store.get(key);
};
