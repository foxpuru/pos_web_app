import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Loader from "@/components/Loader"
import UrlTitle from "@/components/Title"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

function FoodLayout({ children, custom }) {
  const router = useRouter()

  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    // alert("dfdfd")
    if (deviceCodes.length > 11) {
      router.push("/food?category=1c1716111a0c1a")
    } else {
      router.push("/")
    }
  }, [deviceCodes])

  console.log("router", router.query.foodType)
  return (
    <>
      {!deviceCodes && !passcode && <Loader />}
      <UrlTitle />
      {/* {router.query.foodType === "custom"  ? <Header custom /> : <Header />} */}
      <Header />
      {children}
      {router.query.foodType === "custom" ? <Footer custom /> : <Footer />}
    </>
  )
}

export default FoodLayout
