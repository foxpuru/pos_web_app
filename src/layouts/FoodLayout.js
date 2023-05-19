import Header from "@/components/Header"
import React from "react"

function FoodLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default FoodLayout
