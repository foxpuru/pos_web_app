import { createSlice } from "@reduxjs/toolkit"

const autoSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isLoggedIn: false,
    addToCart: [],
  },
  reducers: {
    // addFavourite: (state, action) => {
    //   state.favouriteNotes.push(action.payload)
    // },
    // toggleSettingsModal: (state) => {
    //   state.settingsModalOpen = !state.settingsModalOpen
    // },
  },
})

// export const { addFavourite, toggleSettingsModal } = autoSlice.actions

export default autoSlice
