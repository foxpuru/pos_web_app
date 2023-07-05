import Loader from "@/components/Loader"
import UrlTitle from "@/components/Title"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

const BlankLayout = ({ children }) => {
  const router = useRouter()
  const deviceCodes = useSelector((state) => state.auth.deviceCode)

  useEffect(() => {
    // alert("dfdfd")
    if (deviceCodes.length > 11) {
      router.push("/plan-renewal")
    } else {
      router.push("/")
    }
  }, [deviceCodes])

  console.log("device code", deviceCodes)
  return (
    <>
      {/* <Loader /> */}
      <UrlTitle />
      {children}
    </>
  )
}

export default BlankLayout
