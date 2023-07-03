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
import { CardCardsIcon, CardCashIcon, CardGiftIcon } from "@/components/icons"

import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png"
import { Image } from "@/components/styled-components/tableDetails"

import PaymentLayout from "@/layouts/PaymentLayout"
import GiftCard from "@/components/GiftCard"
import useModalState from "@/hooks/useModalState"
import OtherPaymentOptions from "@/components/OtherPaymentOptions"
import { PrimaryButton } from "@/components/CusttomButtons"

function SplitPayment() {
  const router = useRouter()

  const {
    isOpen: isOpenOther,
    handleToggle: handleToggleOther,
    handleOpen: handleOpenOther,
    handleClose: handleCloseOther,
  } = useModalState(false)
  return (
    <>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        bgcolor="#FFFFFF"
        border="1px solid #D7DBDC"
        borderRadius="10px"
        sx={{ opacity: 1 }}
      >
        <Box textAlign="center">
          <Box
            py={{ lg: "12px", xs: "12px" }}
            display="flex"
            flexDirection="column"
          >
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
            >
              Total Amount Due
            </Typography>
          </Box>

          <Box position="relative">
            <Divider
              sx={{ borderBottomWidth: "1px", borderColor: "#D7DBDC" }}
            />
            <Typography
              my={{ lg: "18px", xs: "14px" }}
              color="#000000"
              fontWeight="400"
              fontSize={{ lg: "18px", xs: "12px" }}
              letterSpacing="0.68px"
            >
              Select Payment Method
            </Typography>

            <Divider
              sx={{
                borderBottomWidth: "2px",
                borderColor: "#D7DBDC",
              }}
            />
            <Image
              src={PaymentMethodArrowImg.src}
              alt="Payment Method Arrow"
              sx={{
                position: "absolute",
                bottom: { lg: "-15px", xs: "-9px" },
                left: "50%",
                transform: "translateX(-50%)",
                width: { lg: "22px", xs: "14px" },
              }}
            />
          </Box>

          {/* <Box
          py={{ lg: "12px", xs: "12px" }}
          display="flex"
          justifyContent="space-between"
        >

        </Box> */}
        </Box>

        <Grid
          container
          item
          spacing={{ lg: 4, xs: 2 }}
          p={{ lg: "22px", xs: "18px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={4} xs={6}>
            <PrimaryButton
              large
              label="SPLIT BY VALUE"
              onClick={() => router.push("/split-by-value")}
            />
          </Grid>
          <Grid item lg={4} xs={6}>
            <PrimaryButton
              large
              label="SPLIT BY ITEM"
              onClick={() => router.push("/split-by-item")}
            />
          </Grid>
        </Grid>
      </Box>
      <OtherPaymentOptions
        isOpen={isOpenOther}
        handleToggle={handleToggleOther}
        handleOpen={handleOpenOther}
        handleClose={handleCloseOther}
      />
    </>
  )
}

SplitPayment.getLayout = (page) => (
  <PaymentLayout isPaymentMethod>{page}</PaymentLayout>
)
export default SplitPayment
