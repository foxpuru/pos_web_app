import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

function FoodLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default FoodLayout
