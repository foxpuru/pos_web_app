import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    handleAddToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1

        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        )

        state.items = [...state.items]
        state.items[existingItemIndex] = existingItem
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }]
      }

      //   const foundItem = state.items.find(
      //     (item) => item.id === action.payload.id
      //   )

      //   if (foundItem) {
      //     // alert("item founded")
      //     return (state.items = state.items.map((item) =>
      //       item.id === action.payload.id
      //         ? { ...item, quantity: state.quantity + 1 }
      //         : item
      //     ))
      //   }
    },
    handleUpdateCart(state, action) {
      state.items = action.payload
    },

    handleRemoveFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      console.log("existing item", existingItem)

      if (existingItem.quantity == 1) {
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        )
        state.items.splice(existingItemIndex, 1)
      } else if (existingItem) {
        existingItem.quantity -= 1
      }
    },
  },
})

export const { handleAddToCart, handleRemoveFromCart, handleUpdateCart } =
  CartSlice.actions

export default CartSlice.reducer
