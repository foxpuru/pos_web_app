import Header from "@/components/Header"
import UrlTitle from "@/components/Title"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

function MainLayout({ children, isPaymentMethod }) {
  // const router = useRouter()
  // const deviceCodes = useSelector((state) => state.auth.deviceCode)

  // useEffect(() => {
  //   // alert("dfdfd")
  //   if (deviceCodes.length > 11) {
  //     router.push("/plan-renewal")
  //   } else {
  //     router.push("/")
  //   }
  // }, [deviceCodes])
  return (
    <>
      <UrlTitle />
      <Header isPaymentMethod={isPaymentMethod} />
      {children}
    </>
  )
}

export default MainLayout
