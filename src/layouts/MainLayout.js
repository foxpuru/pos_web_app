import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import UrlTitle from "@/components/Title";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function MainLayout({ children, isPaymentMethod }) {
  const router = useRouter();
  const deviceCodes = useSelector((state) => state.auth.deviceCode);
  const passcode = useSelector((state) => state.auth.passcode);

  useEffect(() => {
    if (!deviceCodes || !passcode) {
      router.push("/");
    }
  }, [passcode, deviceCodes]);

  return deviceCodes && passcode ? (
    <>
      <UrlTitle />
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <Loader />
  );
}

export default MainLayout
