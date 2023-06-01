import { Box, Typography } from "@mui/material"
import React from "react"

function ChecksDataCard({ item, setOrderItems, orderItems }) {
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
          {item.orderNumber}
        </Typography>
        <Typography
          textAlign="left"
          color="#000000"
          fontSize={{ lg: "16px", xs: "14px" }}
          fontWeight="400"
          letterSpacing="0.6px"
        >
          {item.bill}
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
          {item.time}
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
    </Box>
  )
}

export default ChecksDataCard
