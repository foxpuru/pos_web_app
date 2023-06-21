import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

function FoodLayout({ children, isCustom }) {
  if (isCustom) {
    // alert("bfmhgmsdghjkh")
  }
  return (
    <>
      <Header />
      {children}
      {isCustom ? "sdsd" : <Footer />}
    </>
  )
}

export default FoodLayout
