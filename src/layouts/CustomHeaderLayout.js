import CustomHeader from "@/components/CustomHeader";
import Loader from "@/components/Loader";
import UrlTitle from "@/components/Title";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function CustomHeaderLayout({ children }) {
  const router = useRouter();
  const deviceCodes = useSelector((state) => state.auth.deviceCode);
  const passcode = useSelector((state) => state.auth.passcode);
  console.log(
    "🚀 ~ file: CustomHeaderLayout.js:12 ~ CustomHeaderLayout ~ deviceCodes:",
    passcode,
    deviceCodes
  );
  useEffect(() => {
    if (deviceCodes.length > 11 && passcode) {
      // router.push("/food");
    } else {
      router.push("/");
    }
  }, [deviceCodes]);
  return (
    <>
      {!deviceCodes && !passcode && <Loader />}
      <UrlTitle />
      <CustomHeader />
      {children}
    </>
  );
}

export default CustomHeaderLayout;
