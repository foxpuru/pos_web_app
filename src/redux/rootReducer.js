import { combineReducers } from "@reduxjs/toolkit"
import CartSlice from "./slices/cartSlice"
import SettingsSlice from "./slices/settingsSlice"

export const rootReducer = combineReducers({
  cart: CartSlice,
  settings: SettingsSlice,
  // any other reducers here
})
