import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isAuthenticated: false,
    isLoggedIn: false,
    deviceCode: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.deviceCode = action.payload.deviceCode
    },
    loginThroughPasscode: (state, action) => {
      state.isAuthenticated = true
    },
    logout: (state, action) => {
      state.isLoading = true
      state.isAuthenticated = false
      state.deviceCode = ""
      state.isLoggedIn = false
    },
  },
})

export const { login, loginThroughPasscode, logout } = AuthSlice.actions

export default AuthSlice.reducer
