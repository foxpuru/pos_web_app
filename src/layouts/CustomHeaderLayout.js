import CustomHeader from "@/components/CustomHeader";
import Loader from "@/components/Loader";
import UrlTitle from "@/components/Title";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function CustomHeaderLayout({ children }) {
  const router = useRouter();
  const deviceCodes = useSelector((state) => state.auth.deviceCode);
  console.log("hell");
  const passcode = useSelector((state) => state.auth.passcode);
  useEffect(() => {
    if (deviceCodes.length > 11 && passcode) {
      router.push("/food");
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
