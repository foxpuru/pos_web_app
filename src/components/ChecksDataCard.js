import { Box, Typography } from "@mui/material"
import React from "react"

import CashPaymentMethodImg from "../assets/images/ic_cash_payment_method.png"
import ActiveCloudImg from "../assets/images/ic_active_cloud.png"

import { Image } from "./styled-components/tableDetails"

function ChecksDataCard() {
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={{ lg: "4px", xs: "4px" }}
        >
          <Typography
            textAlign="left"
            color="#00B153"
            fontSize={{ lg: "16px", xs: "14px" }}
            fontWeight="400"
            letterSpacing="0.6px"
          >
            RPD20039
          </Typography>
          <Typography
            textAlign="left"
            color="#000000"
            fontSize={{ lg: "16px", xs: "14px" }}
            fontWeight="400"
            letterSpacing="0.6px"
          >
            ₹35.50
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            textAlign="left"
            color="#000000"
            fontSize={{ lg: "16px", xs: "14px" }}
            fontWeight="400"
            letterSpacing="0.6px"
          >
            04:25 PM
          </Typography>
          <Typography
            textAlign="left"
            color="#000000"
            fontSize={{ lg: "16px", xs: "14px" }}
            fontWeight="400"
            letterSpacing="0.6px"
          >
            03:27 PM
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ChecksDataCard
