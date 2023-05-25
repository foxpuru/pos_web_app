import Header from "@/components/Header"
import React from "react"

function MainLayout({ children, isPaymentMethod }) {
  console.log("iss", isPaymentMethod)
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
