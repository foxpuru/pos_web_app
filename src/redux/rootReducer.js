import { combineReducers } from "@reduxjs/toolkit"
import CartSlice from "./slices/cartSlice"

export const rootReducer = combineReducers({
  cart: CartSlice,
  // any other reducers here
})
