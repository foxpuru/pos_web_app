import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, createAxiosInstance } from "@/utility/axios";
import { toast } from "react-toastify";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { clearLocalStorage } from "@/utility/setAndRemoveAuthData";
import { getUserInfo } from "@/api/userInfo";
import axios from "axios";
import { getModifierGroups, getModifiers } from "@/api/modifiers";
import {
  getProductCategories,
  getProducts,
  getProductVariants,
} from "@/api/product";
import {
  addDataInAuthStore,
  getDataFromAuthStore,
  isAuthStoreExist,
} from "@/indexedDB/authStore";
import { IndexedDB_Connection } from "@/indexedDB/connection";

export const login = createAsyncThunk("login", async (data, thunkApi) => {
  try {
    const authData = await axiosInstance.post("auth/login", data);
    if (authData?.data?.data) {
      IndexedDB_Connection();
    }
    thunkApi.fulfillWithValue({ ...authData?.data?.data, data });
    console.log("authData login", authData);
    await addDataInAuthStore(authData?.data?.data);
    const accessToken = authData?.data?.data?.tokens?.access?.token;
    const axiosInstanceWithLoginInfo = createAxiosInstance(accessToken);
    const userData = await getUserInfo(axiosInstanceWithLoginInfo);
    const modifiersData = await getModifiers(axiosInstanceWithLoginInfo);
    const modifierGroupsData = await getModifierGroups(
      axiosInstanceWithLoginInfo
    );
    let productCategoriesData = await getProductCategories(
      axiosInstanceWithLoginInfo
    );
    let productData = await getProducts(axiosInstanceWithLoginInfo);
    let productVariantsData = await getProductVariants(
      axiosInstanceWithLoginInfo
    );
    console.log({
      userData,
      modifiersData,
      modifierGroupsData,
      productCategoriesData,
      productData,
      productVariantsData,
    });
    toast.success(authData?.data?.message);
    return Promise.resolve(authData);
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
    clearLocalStorage();
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
    deviceCode: "",
    passcode: "",
    userData: {},
    // ...(localStorage.getItem("isAuth")
    //   ? getDataFromAuthStore({ isReduxInitialState: true })
    //   : {}),
  },
  reducers: {
    // login: (state, action) => {
    //   state.isLoading = false;
    //   state.deviceCode = action.payload.deviceCode;
    // },
    loginThroughPasscode: (state, action) => {
      console.log("action", action);
      state.passcode = action.payload;
    },
    lofginThroughIndexedDb: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // logout: (state, action) => {
    //   state.isLoading = false;
    //   state.isAuthenticated = false;
    //   state.submitButtonLoading = false;
    //   state.deviceCode = "";
    //   state.passcode = "";
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
        state.deviceCode = "";
        state.isAuthenticated = false;
        state.userData = {};
        state.passcode = "";
      })
      .addCase(logout.rejected, (state, action) => {
        state.deviceCode = "";
        state.isAuthenticated = false;
        state.userData = {};
        state.passcode = "";
      });
  },
});
const persistConfig = {
  key: "root",
  storage,
};
export const { loginThroughPasscode, lofginThroughIndexedDb } =
  AuthSlice.actions;
// persistReducer(persistConfig, AuthSlice.reducer);
export default persistReducer(persistConfig, AuthSlice.reducer);
