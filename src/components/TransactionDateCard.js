import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"

import CashPaymentMethodImg from "../assets/images/ic_cash_payment_method.png"
import ActiveCloudImg from "../assets/images/ic_active_cloud.png"

import { Image } from "./styled-components/tableDetails"

function TransactionDateCard({ item, setOrderItems, orderItems }) {
  // useEffect(() => {
  //   setOrderItems({ orderNumber: item.orderNumber, order: item.order })
  // }, [])

  return (
    <Box
      px={{ lg: "12px", xs: "8px" }}
      py={{ lg: "8px", xs: "6px" }}
      bgcolor={
        orderItems.orderNumber === item.orderNumber ? "#EEF5F6" : "#FFFFFF"
      }
      borderBottom="1px solid  #D7DBDC"
      sx={{
        cursor: "pointer",
        "&:focus": {
          backgroundColor: "#2e2e2e",
        },
      }}
      onClick={() =>
        setOrderItems({ orderNumber: item.orderNumber, order: item.order })
      }
    >
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
              {item.orderNumber}
            </Typography>
          </Box>
          <Typography
            // textAlign="left"
            color="#000000"
            fontSize={{ lg: "16px", xs: "14px" }}
            fontWeight="400"
            letterSpacing="0.6px"
          >
            {item.bill}
          </Typography>
        </Box>
        <Box
          pt={{ lg: "3px", xs: "2px" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="grid">
            <Typography
              textAlign="left"
              color="#A5ACAE"
              fontSize={{ lg: "14px", xs: "12px" }}
              fontWeight="400"
              letterSpacing="0.55px"
            >
              {item.guestName}
            </Typography>
            <Typography
              textAlign="left"
              color="#000000"
              fontSize={{ lg: "16px", xs: "14px" }}
              fontWeight="400"
              letterSpacing="0.6px"
            >
              {item.time}
            </Typography>
          </Box>
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
