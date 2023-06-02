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

function Reports() {
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

      <Grid
        container
        height={
          {
            // lg: "calc(100% - 144px - 247px)",
            // xs: "calc(100% - 120px - 195px)",
          }
        }
      >
        <Grid
          container
          item
          spacing={{ lg: 3, xs: 1 }}
          height="100%"
          alignItems="end"
          py={{ lg: "22px", xs: "22px" }}
          px={{ lg: "22px", xs: "12px" }}
        >
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              sx={{
                height: { lg: "60px", xs: "40px" },
                color: "#FFFFFF",
                fontSize: { lg: "18px", xs: "14px" },
                fontWeight: "400",
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                backgroundColor: "#E57607",
                borderRadius: "10px",

                "&:hover": {
                  backgroundColor: "#E57607",
                },

                "& svg": {
                  width: { lg: "32px", xs: "24px" },
                  height: { lg: "32px", xs: "24px" },
                },
              }}
              fullWidth
              startIcon={<PrintIconWhite />}
            >
              RECEIPT
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{
                height: { lg: "60px", xs: "40px" },
                color: "#FFFFFF",
                fontSize: { lg: "19px", xs: "14px" },
                fontWeight: "400",
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                backgroundColor: "#E57607",
                borderRadius: "10px",

                "&:hover": {
                  backgroundColor: "#E57607",
                },

                "& svg": {
                  width: { lg: "32px", xs: "24px" },
                  height: { lg: "32px", xs: "24px" },
                },
              }}
              fullWidth
            >
              REFUND CHECK
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

Reports.getLayout = (page) => (
  <PaymentLayout reports={true}>{page}</PaymentLayout>
)
export default Reports
