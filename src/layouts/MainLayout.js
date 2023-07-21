import Header from "@/components/Header";
import UrlTitle from "@/components/Title";
import { getDataFromAuthStore } from "@/indexedDB/authStore";
import { lofginThroughIndexedDb } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MainLayout({ children, isPaymentMethod }) {
  // const router = useRouter()
  // const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const dispatch = useDispatch();
  useEffect(async () => {
    let isDataPresentInAuthStore = await getDataFromAuthStore();
    console.log("isDataPresentInAuthStore", isDataPresentInAuthStore);
    // dispatch(lofginThroughIndexedDb());
    return () => {
      console.log("This will be logged on unmount");
    };
  }, []);
  return (
    <>
      <UrlTitle />
      <Header isPaymentMethod={isPaymentMethod} />
      {children}
    </>
  );
}

export default MainLayout;
