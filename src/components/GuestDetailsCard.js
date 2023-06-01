import { GuestDetailsContext } from "@/context/guestDetailsContext"
import { Box, ListSubheader, Typography } from "@mui/material"
import React, { useContext, useEffect } from "react"
import ChecksDataCard from "./ChecksDataCard"
import TransactionDateCard from "./TransactionDateCard"

function GuestDetailsCard({ section, card }) {
  const { orderItems, setOrderItems } = useContext(GuestDetailsContext)

  return (
    <Box component={""}>
      <Box
        component={ListSubheader}
        bgcolor="#E57607 !important"
        px={{ lg: "12px", xs: "8px" }}
        py={{ lg: "8px", xs: "6px" }}
      >
        <Typography
          textAlign="left"
          color="#FFFFFF"
          fontSize={{ lg: "16px", xs: "12px" }}
          fontWeight="400"
          letterSpacing="0.6px"
        >
          {section.date}
        </Typography>
      </Box>
      <Box pb="10px">
        {!card
          ? section.orders.map((item) => (
              <TransactionDateCard
                setOrderItems={(data) => setOrderItems(data)}
                key={item.orderNumber}
                item={item}
                orderItems={orderItems}
              />
            ))
          : section.orders.map((item) => (
              <ChecksDataCard
                setOrderItems={(data) => setOrderItems(data)}
                key={item.orderNumber}
                item={item}
                orderItems={orderItems}
              />
            ))}
      </Box>
    </Box>
  )
}

export default GuestDetailsCard
