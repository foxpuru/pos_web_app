import BillingItemList from "@/components/BillingItemList"
import Header from "@/components/Header"
import Loader from "@/components/Loader"
import UrlTitle from "@/components/Title"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

export default function PaymentLayout({ children, isPaymentMethod, reports }) {
  const router = useRouter()
  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    // alert("dfdfd")
    if (deviceCodes.length > 11) {
      // router.push("/plan-renewal")
    } else {
      router.push("/")
    }
  }, [deviceCodes])
  return (
    <>
      {!deviceCodes && !passcode && <Loader />}
      <UrlTitle />
      <Header isPaymentMethod={isPaymentMethod} reports={reports} />
      <Box display="flex" width="100%" alignItems="start">
        <BillingItemList reports={reports} />
        <Box
          width="100%"
          p={{ lg: "22px", xs: "12px" }}
          height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
