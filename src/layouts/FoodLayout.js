import Footer from "@/components/Footer"
import Header from "@/components/Header"
import UrlTitle from "@/components/Title"
import { useRouter } from "next/router"
import React from "react"

function FoodLayout({ children, custom }) {
  const router = useRouter()

  // console.log("router", router.query.foodType)
  return (
    <>
    <UrlTitle />
      {/* {router.query.foodType === "custom"  ? <Header custom /> : <Header />} */}
      <Header />
      {children}
      {router.query.foodType === "custom" ? <Footer custom /> : <Footer />}
    </>
  )
}

export default FoodLayout
