import Header from "@/components/Header"
import React from "react"

function MainLayout({ children, isPaymentMethod }) {
  console.log("iss", isPaymentMethod)
  return (
    <>
      <Header isPaymentMethod={isPaymentMethod} />
      {children}
    </>
  )
}

export default MainLayout
