import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useRouter } from "next/router"
import React from "react"

function FoodLayout({ children }) {
  const router = useRouter()

  console.log("router", router.query.foodType)
  return (
    <>
      {router.query.foodType === "custom" ? <Header /> : <Header />}
      {children}
      <Footer />
    </>
  )
}

export default FoodLayout
