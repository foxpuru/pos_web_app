import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";

import CartSlice from "./slices/cartSlice";
import SettingsSlice from "./slices/settingsSlice";
import IndexedDB_Slice from "./slices/indexedDb_Slice";
export const rootReducer = combineReducers({
  auth: AuthSlice,
  indexedDB: IndexedDB_Slice,
  cart: CartSlice,
  settings: SettingsSlice,

  // any other reducers here
});
// export const rootReducer = {
//   auth: AuthSlice,
//   cart: CartSlice,
//   settings: SettingsSlice,
// };
