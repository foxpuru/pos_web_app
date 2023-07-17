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
import { Image } from "@/components/styled-components"
import MainLayout from "@/layouts/MainLayout"
import TransactionDateCard from "@/components/TransactionDateCard"
import InputBase from "@mui/material/InputBase"
import { ListDivider } from "@/components/ListDivider"
import TransactionSideBar from "@/components/transaction-side-bar"
import {
  GuestDetailsConsumer,
  GuestDetailsProvider,
} from "@/context/guestDetailsContext"
import PaymentLayout from "@/layouts/PaymentLayout"
import ReportCard from "@/components/reportsCard"
import { CloseDayReportData } from "@/data/closeDayReportData"
import { PrimaryButton } from "@/components/CusttomButtons"

function CloseDayReport() {
  const [items, setItems] = useState([
    {
      count: "1",
      foodName: "Veg. triple schezwan",
      foodDescription: "Veg. triple schezwan",
      price: "₹1843.90",
      finalPrice: "₹1622.20",
    },
    {
      count: "3",
      foodName: "Veg. triple schezwan",
      foodDescription: "Veg. triple schezwan",
      price: "₹1843.90",
      finalPrice: "₹1622.20",
    },
  ])

  // const [orderItems, setOrderItems] = useState([])

  // console.log("order items", orderItems)

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  }))

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      width: "32px",
      height: "32px",
    },
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#B1B6B9",
    fontWeight: "400",
    leterSpacing: "0.6px",
    fontSize: { lg: "16px", xs: "12px" },
    "& .MuiInputBase-input": {
      color: "#B1B6B9",
      fontWeight: "400",
      leterSpacing: "0.6px",
      fontSize: { lg: "16px", xs: "12px" },
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }))

  const style = {
    bgcolor: "background.paper",
  }

  return (
    <Box
      height="100%"
      // display="grid"
      bgcolor="#FFFFFF"
      border="1px solid #D7DBDC"
      borderRadius="10px"
      sx={{ opacity: 1 }}
      textAlign="center"
      display="flex"
      flexDirection="column"
      overflow="auto"
      justifyContent={{ lg: "space-between", xs: "start" }}
      py={{ lg: "22px", xs: "22px" }}
    >
      <Box>
        <Box
          pb={{ lg: "22px", xs: "22px" }}
          display="flex"
          flexDirection="column"
          gap={{ lg: "6px", xs: "6px" }}
        >
          <Typography
            color="#000000"
            fontWeight="500"
            fontSize={{ lg: "24px", xs: "20px" }}
            letterSpacing="0.8px"
          >
            All Employees, Current Device
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
      </Box>

      <Grid
        container
        item
        spacing={{ lg: 3, xs: 1 }}
        px={{ lg: "22px", xs: "12px" }}
        py={{ lg: undefined, xs: "22px" }}
      >
        {CloseDayReportData.map((item, index) => (
          <Grid item xs={6} key={index}>
            <ReportCard data={item} />
          </Grid>
        ))}
      </Grid>
      <Box px={{ lg: "22px", xs: "12px" }} pb={{ lg: undefined, xs: "22px" }}>
        <Box border="1px solid #D7DBDC" borderRadius="8px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            px={{ lg: "10px", xs: "10px" }}
            py={{ lg: "8px", xs: "8px" }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                color: "#5C6568",
                letterSpacing: "0.53px",
                fontSize: { lg: "15px", xs: "11px" },
              }}
            >
              14 Closed Checks
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                color: "#0090FF",
                letterSpacing: "0.55px",
                fontSize: { lg: "16px", xs: "12px" },
              }}
            >
              2 Open Checks
            </Typography>
          </Box>
          <Divider
            sx={{
              borderBottomWidth: "1px",
              borderColor: "#D7DBDC",
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            px={{ lg: "10px", xs: "12px" }}
            py={{ lg: "8px", xs: "8px" }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                color: "#A5ACAE",
                letterSpacing: "0.53px",
                fontSize: { lg: "15px", xs: "11px" },
              }}
            >
              $0.00 Non-Cash Tip
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                color: "#0090FF",
                letterSpacing: "0.55px",
                fontSize: { lg: "16px", xs: "12px" },
              }}
            >
              No Unadjusted Tips
            </Typography>
          </Box>
          <Divider
            sx={{
              borderBottomWidth: "1px",
              borderColor: "#D7DBDC",
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            px={{ lg: "10px", xs: "12px" }}
            py={{ lg: "8px", xs: "8px" }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                color: "#0090FF",
                letterSpacing: "0.53px",
                fontSize: { lg: "15px", xs: "11px" },
              }}
            >
              1 Cash Drawer Open
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                color: "#000000",
                letterSpacing: "0.55px",
                fontSize: { lg: "16px", xs: "12px" },
              }}
            >
              No Clocked In Employees
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        item
        // spacing={{ lg: 3, md: 0, xs: 1 }}
        justifyContent="center"
        pb={{ lg: undefined, xs: "22px" }}
      >
        <Grid item lg={4} xs={6}>
          <PrimaryButton
            large
            label="RUN CLOSE OF DAY"
            // sx={{ width: { lg: undefined, xs: "180px" } }}
          />
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="center">
        <Typography
          width="80%"
          // margin="auto"
          color="#A5ACAE"
          fontWeight="400"
          fontSize={{ lg: "14px", xs: "12px" }}
          letterSpacing="0.5px"
        >
          Running Close of day will settle all credit card tips. Close open
          checks and review tips to avoid an inaccurate report, Connect a
          printer for a printed report.
        </Typography>
      </Box>
    </Box>
  )
}

CloseDayReport.getLayout = (page) => (
  <PaymentLayout isPaymentMethod={true} reports={true}>
    {page}
  </PaymentLayout>
)
export default CloseDayReport
