import { Box, Typography } from "@mui/material"
import React from "react"

import CashPaymentMethodImg from "../assets/images/ic_cash_payment_method.png"
import ActiveCloudImg from "../assets/images/ic_active_cloud.png"

import { Image } from "./styled-components/tableDetails"

function TransactionDateCard() {
  return (
    <Box pt={{ lg: "12px", xs: "12px" }} bgColor="white">
      <Box bgcolor="#E57607" p={{ lg: "20px", xs: "16px" }}>
        <Typography
          textAlign="left"
          color="#FFFFFF"
          fontSize={{ lg: "18px", xs: "14px" }}
          fontWeight="400"
          letterSpacing="0.6px"
        >
          Mar, 13 2023
        </Typography>
      </Box>
      <Box p={{ lg: "20px", xs: "16px" }} bgcolor="#EEF5F6">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="grid">
            <Box display="flex" alignItems="center">
              <Image
                src={CashPaymentMethodImg.src}
                alt="cash card"
                sx={{ width: { lg: "30px", xs: "24px" } }}
              />
              <Typography
                ml="10px"
                textAlign="left"
                color="#00B153"
                fontSize={{ lg: "16px", xs: "14px" }}
                fontWeight="400"
                letterSpacing="0.6px"
              >
                RPD20039
              </Typography>
            </Box>
            <Typography
              textAlign="left"
              color="#A5ACAE"
              fontSize={{ lg: "14px", xs: "12px" }}
              fontWeight="400"
              letterSpacing="0.55px"
            >
              GUEST-89
            </Typography>
          </Box>
          <Typography
            textAlign="left"
            color="#000000"
            fontSize={{ lg: "16px", xs: "14px" }}
            fontWeight="400"
            letterSpacing="0.6px"
          >
            ₹333.97
          </Typography>
        </Box>
        <Box
          pt={{ lg: "8px", xs: "6px" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            textAlign="left"
            color="#000000"
            fontSize={{ lg: "16px", xs: "14px" }}
            fontWeight="400"
            letterSpacing="0.6px"
          >
            04:25 PM
          </Typography>
          <Image
            src={ActiveCloudImg.src}
            alt="cash card"
            sx={{ width: { lg: "26px", xs: "22px" } }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default TransactionDateCard
