import BillingItemList from "@/components/BillingItemList"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import React from "react"

export default function PaymentLayout({ children, isPaymentMethod }) {
  return (
    <>
      <Header isPaymentMethod={isPaymentMethod} />
      <Box display="flex" width="100%" alignItems="start">
        <BillingItemList />
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
