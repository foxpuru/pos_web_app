import FoodBillingCard from "@/components/FoodBillingCard"
import FoodCard from "@/components/FoodCard"
import { FoodData } from "@/data/food/foodData"
import FoodLayout from "@/layouts/FoodLayout"
import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import {
  CardCardsIcon,
  CardCashIcon,
  CardGiftIcon,
  EmailIconWhite,
  PrintIcon,
  PrintIconWhite,
  SaveCheckRedIcon,
} from "@/components/icons"

import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png"
import CheckGreenImg from "../assets/images/ic_check_green.png"
import { Image } from "@/components/styled-components/tableDetails"
import MainLayout from "@/layouts/MainLayout"
import PaymentLayout from "@/layouts/PaymentLayout"
import PrinterErrorPopup from "@/components/PrinterErrorPopup"
import useModalState from "@/hooks/useModalState"

function PaymentCompleted() {
  const router = useRouter()
  const { isOpen, handleToggle, handleOpen, handleClose } = useModalState(false)
  return (
    <Box
      height="100%"
      // display="grid"
      bgcolor="#FFFFFF"
      border="1px solid #D7DBDC"
      borderRadius="10px"
      sx={{ opacity: 1 }}
    >
      <Box height="50%" textAlign="center">
        <Box
          py={{ lg: "22px", xs: "22px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src={CheckGreenImg.src}
            alt="check green"
            sx={{ width: { lg: "60px", xs: "40px" } }}
          />

          <Typography
            mt={{ lg: "20px", xs: "20px" }}
            color="#000000"
            fontWeight="400"
            fontSize={{ lg: "40px", xs: "28px" }}
            letterSpacing="0.7px"
          >
            ₹1843.90
          </Typography>
          <Typography
            color="#A1A1A1"
            fontWeight="400"
            fontSize={{ lg: "16px", xs: "12px" }}
            letterSpacing="0.53px"
          >
            Total Amount Paid
          </Typography>
        </Box>

        <Box position="relative">
          <Divider sx={{ borderBottomWidth: "1px", borderColor: "#D7DBDC" }} />
          <Grid container p={{ lg: "20px", xs: "20px" }}>
            <Grid item xs>
              <Typography
                color="#000000"
                fontWeight="400"
                fontSize={{ lg: "40px", xs: "28px" }}
                letterSpacing="0.7px"
              >
                ₹1843.90
              </Typography>
              <Typography
                color="#A1A1A1"
                fontWeight="400"
                fontSize={{ lg: "16px", xs: "12px" }}
                letterSpacing="0.53px"
                mb={{ lg: "12px", xs: "10px" }}
              >
                Total Tenderd
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs>
              <Typography
                color="#000000"
                fontWeight="400"
                fontSize={{ lg: "40px", xs: "28px" }}
                letterSpacing="0.7px"
              >
                ₹0.00
              </Typography>
              <Typography
                color="#A1A1A1"
                fontWeight="400"
                fontSize={{ lg: "16px", xs: "12px" }}
                letterSpacing="0.53px"
                mb={{ lg: "12px", xs: "10px" }}
              >
                Change Due
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        height="50%"
        display="flex"
        flexDirection="column"
        alignItems="end"
        justifyContent="end"
      >
        <Stack
          direction="row"
          justifyContent="center"
          spacing={{ lg: 3, xs: 1 }}
          //   py={{ lg: "42px", xs: "22px" }}
          px={{ lg: "22px", xs: "22px" }}
          // display="flex"
          // flexDirection="row"
          width="100%"
        >
          <Button
            sx={{
              width: { lg: "310px", xs: "100%" },
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
            startIcon={<PrintIconWhite />}
            onClick={handleOpen}
          >
            PRINT RECEIPT
          </Button>
          <PrinterErrorPopup
            isOpen={isOpen}
            handleToggle={handleToggle}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
          <Button
            sx={{
              width: { lg: "310px", xs: "100%" },
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
            startIcon={<EmailIconWhite />}
          >
            EMAIL RECEIPT
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={{ lg: 3, xs: 1 }}
          py={{ lg: "42px", xs: "22px" }}
          px={{ lg: "22px", xs: "22px" }}
          // display="flex"
          // flexDirection="row"
          width="100%"
        >
          <Button
            sx={{
              width: { lg: "644px", xs: "100%" },
              height: { lg: "60px", xs: "40px" },
              color: "#FFFFFF",
              fontSize: { lg: "18px", xs: "14px" },
              fontWeight: "400",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              backgroundColor: "#00B153",
              borderRadius: "10px",

              "&:hover": {
                backgroundColor: "#00B153 !important",
              },

              "& svg": {
                width: { lg: "32px", xs: "24px" },
                height: { lg: "32px", xs: "24px" },
              },
            }}
            onClick={() => router.push("/food?category=chinese")}
          >
            DONE
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

PaymentCompleted.getLayout = (page) => (
  <PaymentLayout isPaymentMethod>{page}</PaymentLayout>
)
export default PaymentCompleted
