import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isLoggedIn: false,
    deviceCode: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.deviceCode = action.payload.deviceCode
    },
  },
})

export const { login } = AuthSlice.actions

export default AuthSlice.reducer
