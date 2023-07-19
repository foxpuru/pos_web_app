import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "@/utility/axios";
import { toast } from "react-toastify";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { clearLocalStorage } from "@/utility/setAndRemoveAuthData";

export const login = createAsyncThunk("login", async (data, thunkApi) => {
  try {
    const res = await axiosInstance.post("auth/login", data);
    console.log("res login", res);
    // toast.configure();
    toast.success(res?.data?.message);
    thunkApi.fulfillWithValue({ ...res?.data?.data, data });
    return Promise.resolve(res);
  } catch (error) {
    const message = error?.response?.data?.message ?? "Something went wrong";
    toast.error(message);
    console.log("error", error);
    thunkApi.rejectWithValue(error);
    return Promise.reject(error);
  }
});
export const logout = createAsyncThunk("logout", async (data, thunkApi) => {
  try {
    const res = await axiosInstance.post("auth/logout", data);
    console.log("res logout", res);
    toast.success(res?.data?.message);
    thunkApi.fulfillWithValue({ data: {} });
    clearLocalStorage();
    return Promise.resolve(res);
  } catch (error) {
    const message = error?.response?.data?.message ?? "Something went wrong";
    toast.error(message);
    console.log("error", error);
    thunkApi.rejectWithValue(error);
    return Promise.reject(error);
  }
});
const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    submitButtonLoading: false,
    isAuthenticated: false,
    isLoggedIn: false,
    deviceCode: "",
    passcode: "",
    userData: {},
  },
  reducers: {
    // login: (state, action) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = false;
    //   state.deviceCode = action.payload.deviceCode;
    // },
    loginThroughPasscode: (state, action) => {
      console.log("action", action);
      state.passcode = action.payload;
    },
    // logout: (state, action) => {
    //   state.isLoading = false;
    //   state.isAuthenticated = false;
    //   state.submitButtonLoading = false;
    //   state.deviceCode = "";
    //   state.passcode = "";
    //   state.isLoggedIn = false;
    //   state.userData = {};
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.submitButtonLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("state_action_success", action.payload?.data?.data?.tokens);
        const { access, refresh } = action.payload?.data?.data?.tokens;
        state.submitButtonLoading = false;
        state.isLoggedIn = true;
        state.deviceCode = action?.meta.arg?.device_code;
        state.isAuthenticated = true;
        state.userData = {
          access: access.token,
          refresh: refresh.token,
        };
      })
      .addCase(login.rejected, (state, action) => {
        console.log("state_action_error", action.payload);
        state.submitButtonLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.deviceCode = "";
        state.isAuthenticated = false;
        state.userData = {};
        state.passcode = "";
      });
    // .addCase(logout.pending, (state, action) => {})
    // .addCase(logout.rejected, (state, action) => {});
  },
});
const persistConfig = {
  key: "root",
  storage,
};
export const { loginThroughPasscode } = AuthSlice.actions;
// persistReducer(persistConfig, AuthSlice.reducer);
export default persistReducer(persistConfig, AuthSlice.reducer);
