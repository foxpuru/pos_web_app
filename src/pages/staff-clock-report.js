import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Divider from "@mui/material/Divider"
import { styled, alpha } from "@mui/material/styles"
import {
  CardCardsIcon,
  CardCashIcon,
  CardGiftIcon,
  PrintIcon,
  PrintIconWhite,
  SaveCheckRedIcon,
  SearchGreyIcon,
} from "@/components/icons"

import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png"
import { Image } from "@/components/styled-components/tableDetails"
import MainLayout from "@/layouts/MainLayout"
import TransactionDateCard from "@/components/TransactionDateCard"
import InputBase from "@mui/material/InputBase"
import { ListDivider } from "@/components/custom-components/ListDivider"
import TransactionSideBar from "@/components/transaction-side-bar"
import {
  GuestDetailsConsumer,
  GuestDetailsProvider,
} from "@/context/guestDetailsContext"
import PaymentLayout from "@/layouts/PaymentLayout"
import Table from "@/components/Table"

const data = [
  {
    staff: "Joe Pizza",
    clockedIn: ["May 15 2023 | 08:38 AM", "May 15 2023 | 08:38 AM"],
    clockedOut: "May 15 2023 | 08:38 AM",
    hours: "00:00:20: hr",
  },
]

function Reports() {
  const coloums = [
    {
      name: "Staff",
      selector: (row) => row.staff,
    },
    {
      name: "Clocked In",
      center: true,
      cell: (row) => (
        <div>
          {row.clockedIn.map((item) => (
            <p style={{ margin: "0" }}>{item}</p>
          ))}
        </div>
      ),
    },
    {
      name: "Clocked Out",
      selector: (row) => row.clockedOut,
      right: true,
    },
    {
      name: "Work Hours",
      selector: (row) => row.hours,
      right: true,
    },
  ]
  return (
    <Box
      height="100%"
      // display="grid"
      bgcolor="#FFFFFF"
      border="1px solid #D7DBDC"
      borderRadius="10px"
      sx={{ opacity: 1 }}
      textAlign="center"
    >
      <Box
        py={{ lg: "12px", xs: "12px" }}
        display="flex"
        flexDirection="column"
        gap={{ lg: "6px", xs: "6px" }}
      >
        <Typography
          color="#000000"
          fontWeight="400"
          fontSize={{ lg: "40px", xs: "28px" }}
          letterSpacing="0.7px"
        >
          ₹2175.8
        </Typography>
        <Typography
          color="#A1A1A1"
          fontWeight="400"
          fontSize={{ lg: "16px", xs: "12px" }}
          letterSpacing="0.53px"
        >
          Total Amount Paid (Cash)
        </Typography>
        <Typography
          color="#A1A1A1"
          fontWeight="400"
          fontSize={{ lg: "16px", xs: "12px" }}
          letterSpacing="0.53px"
        >
          <Typography component={"span"} color="#00B153">
            Successful{" "}
          </Typography>
          Mar 13 2023 - 04:25 PM - The Muse
        </Typography>
      </Box>

      <Box position="relative">
        <ListDivider
          styles={{
            borderBottomWidth: "2px",
            borderColor: "#D7DBDC",
          }}
        />
        <Image
          src={PaymentMethodArrowImg.src}
          alt="Payment Method Arrow"
          sx={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            width: { lg: "22px", xs: "14px" },
          }}
        />
      </Box>

      <Box p={{ lg: "22px", xs: "12px" }}>
        <Table columns={coloums} data={data} />
      </Box>
    </Box>
  )
}

Reports.getLayout = (page) => (
  <PaymentLayout reports={true}>{page}</PaymentLayout>
)
export default Reports
