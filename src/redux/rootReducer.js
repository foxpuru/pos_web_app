import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";

import CartSlice from "./slices/cartSlice";
import SettingsSlice from "./slices/settingsSlice";

export const rootReducer = combineReducers({
  auth: AuthSlice,
  cart: CartSlice,
  settings: SettingsSlice,
  // any other reducers here
});
// export const rootReducer = {
//   auth: AuthSlice,
//   cart: CartSlice,
//   settings: SettingsSlice,
// };
