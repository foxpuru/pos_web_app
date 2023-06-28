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

import PaymentMethodArrowImg from "@/assets/images/ic_payment_method_arrow.png"
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

import NextImg from "@/assets/images/ic_next.png"
import PrevImg from "@/assets/images/ic_previous.png"
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
        <Box
          my={{ lg: "8px", xs: "6px" }}
          display="flex"
          flexDirection="column"
          gap={{ lg: "2px", xs: "2px" }}
        >
          {row.clockedIn.map((item, index) => (
            <p style={{ margin: 0 }} key={index}>
              {item}
            </p>
          ))}
        </Box>
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
  const dates = [
    "May 12 2023",
    "May 13 2023",
    "May 14 2023",
    "May 15 2023",
    "May 16 2023",
    "May 17 2023",
    "May 18 2023",
    "May 19 2023",
    "May 20 2023",
  ]
  const [selectedDate, setSelectedDate] = useState(6)
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
      {/* <Box
        py={{ lg: "12px", xs: "12px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={{ lg: "6px", xs: "6px" }}
      > */}
      <Grid
        container
        p={{ lg: "12px", xs: "12px" }}
        py={{ lg: "22px", xs: "18px" }}
        alignItems="center"
      >
        <Grid item xs={4} display="flex" justifyContent="start">
          {selectedDate > 0 && (
            <Image
              src={PrevImg.src}
              alt="previous arrow"
              onClick={() => {
                if (selectedDate > 0) {
                  setSelectedDate(selectedDate - 1)
                }
              }}
              sx={{ width: { lg: "40px", xs: "30px" } }}
            />
          )}
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Typography
            color="#000000"
            fontWeight="500"
            fontSize={{ lg: "22px", xs: "18px" }}
            letterSpacing="0.8px"
          >
            {/* May 15 2023 */}
            {dates[selectedDate]}
          </Typography>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="end">
          {selectedDate < dates.length - 1 && (
            <Image
              src={NextImg.src}
              alt="next arrow"
              onClick={() => {
                if (selectedDate < dates.length - 1) {
                  setSelectedDate(selectedDate + 1)
                }
              }}
              sx={{ width: { lg: "40px", xs: "30px" } }}
            />
          )}
        </Grid>
      </Grid>

      {/* </Box> */}

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
  <PaymentLayout isPaymentMethod={true} reports={true}>
    {page}
  </PaymentLayout>
)
export default Reports
