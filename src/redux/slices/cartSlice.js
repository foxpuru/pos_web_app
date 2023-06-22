import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    customizableFoodItem: null,
    items: [],
  },

  reducers: {
    // handle cart actions
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

    // handle custom food
    handleAddCustomizableFoodItem(state, action) {
      console.log("action", action.payload)

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        // existingItem.quantity += 1

        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        )

        const existingCustomFoodItem = existingItem?.customFoodOptions?.find(item => item.id === action?.payload?.customFoodOption?.id)

        // existingItem.customFoodOptions

        console.log("state.items[existingItemIndex]", existingItem)
        return

        state.items = [...state.items]
        state.items[existingItemIndex] = existingItem

        // state.items = [
        //   ...state.items,
        //   {
        //     ...action.payload,
        //     // customs: [...action.payload.customs.label],
        //   },
        // ]
      } else {
        const customFood = { ...action.payload.customFoodOption }
        delete action.payload.customFoodOption

        state.items = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
            customFoodOptions: [customFood],
          },
        ]
      }
    },
  },
})

export const {
  handleAddToCart,
  handleRemoveFromCart,
  handleUpdateCart,
  handleAddCustomizableFoodItem,
} = CartSlice.actions

export default CartSlice.reducer
