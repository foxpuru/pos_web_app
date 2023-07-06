import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

import CustomHeader from "@/components/CustomHeader"
import Loader from "@/components/Loader"
import UrlTitle from "@/components/Title"

function CustomHeaderLayout({ children }) {
  const router = useRouter()
  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.isAuthenticated)
  useEffect(() => {
    // alert("dfdfd")
    if (deviceCodes.length > 11) {
      // router.push("/plan-renewal")
    } else {
      router.push("/")
    }
  }, [deviceCodes])
  return (
    <>
      {!deviceCodes && !passcode && <Loader />}
      <UrlTitle />
      <CustomHeader />
      {children}
    </>
  )
}

export default CustomHeaderLayout
