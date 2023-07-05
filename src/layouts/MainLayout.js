import Header from "@/components/Header"
import UrlTitle from "@/components/Title"
import React from "react"
import { useSelector } from "react-redux"

function MainLayout({ children, isPaymentMethod }) {
  // const deviceCode = useSelector((state) => state.auth.deviceCode)
  // console.log("device code", deviceCode)
  return (
    <>
      <UrlTitle />
      <Header isPaymentMethod={isPaymentMethod} />
      {children}
    </>
  )
}

export default MainLayout
