import FoodBillingCard from "@/components/FoodBillingCard"
import FoodCard from "@/components/FoodCard"
import { FoodData } from "@/data/food/foodData"

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
import { Image } from "@/components/styled-components"


import GiftCard from "@/components/modals/GiftCard"
import useModalState from "@/hooks/useModalState"
import OtherPaymentOptions from "@/components/modals/OtherPaymentOptions"
import AddTip from "@/components/modals/AddTip"

import { PrimaryButton } from "@/components/CusttomButtons"
import CustomLayout from "@/layouts/CustomLayout"

const btnStyle = {
  // height: { lg: "60px", xs: "50px" },
  color: "#FFFFFF",

  backgroundColor: "#E57607",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: "#E57607 !important",
  },

  "& svg": {
    width: { lg: "32px", xs: "24px" },
    height: { lg: "32px", xs: "24px" },
  },
}

function PaymentMethods() {
  const router = useRouter()

  const [tip, setTip] = useState("")
  const { isOpen, handleToggle, handleOpen, handleClose } = useModalState(false)
  const {
    isOpen: isOpenOther,
    handleToggle: handleToggleOther,
    handleOpen: handleOpenOther,
    handleClose: handleCloseOther,
  } = useModalState(false)

  const {
    isOpen: isOpenAddTip,
    handleToggle: handleToggleAddTip,
    handleOpen: handleOpenAddTip,
    handleClose: handleCloseAddTip,
  } = useModalState(false)
  return (
    <>
      <Box textAlign="center">
        <Box pb="12px" display="flex" flexDirection="column">
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
          <Divider sx={{ borderBottomWidth: "1px", borderColor: "#D7DBDC" }} />
          <Typography
            my="12px"
            color="#000000"
            fontWeight="400"
            fontSize={{ lg: "18px", xs: "12px" }}
            letterSpacing="0.68px"
          >
            Select Payment Method
          </Typography>
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
            mb="12px"
          >
            Amount Paid
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

        <Grid container>
          <Grid
            container
            item
            spacing={{ lg: 4, xs: 2 }}
            // py={{ lg: "42px", xs: "22px" }}

            // px={{ lg: "22px", xs: "12px" }}
            p={{ lg: "22px", md: "18px", xs: "12px" }}
            pt={{ lg: "44px", md: "36px", xs: "24px" }}
          >
            <Grid item md={4} xs={6}>
              <PrimaryButton
                large
                sx={{
                  background: "linear-gradient(to right,#26B692,#38CC79)",
                }}
                startIcon={<CardCashIcon />}
                onClick={() => router.push("/cash")}
                label="cash"
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <PrimaryButton
                large
                sx={{
                  background: "linear-gradient(to right,#808080,#808080)",
                }}
                startIcon={<CardCardsIcon />}
                onClick={handleOpenOther}
                label="Other"
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <PrimaryButton
                large
                sx={{
                  background: "linear-gradient(to right,#A61831,#DE4E67)",
                }}
                startIcon={<CardGiftIcon />}
                onClick={handleOpen}
                label="GIFT CARD"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid
          container
          item
          spacing={{ lg: 4, xs: 2 }}
          alignItems="end"
          // py={{ lg: "22px", xs: "22px" }}
          px={{ lg: "22px", md: "18px", xs: "12px" }}
          pt={{ lg: "22px", md: "18px", xs: "12px" }}
        >
          <Grid item display={{ md: "flex", xs: "none" }} md={4}></Grid>
          <Grid item md={4} xs={6}>
            <PrimaryButton
              large
              onClick={() => router.push("/split-payment")}
              label="SPLIT CHECK"
            />
          </Grid>
          <Grid item md={4} xs={6}>
            <PrimaryButton
              large
              onClick={handleOpenAddTip}
              label="ADDITIONAL TIP"
            />
          </Grid>
        </Grid>
      </Grid>

      <GiftCard
        isOpen={isOpen}
        handleToggle={handleToggle}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <OtherPaymentOptions
        isOpen={isOpenOther}
        handleToggle={handleToggleOther}
        handleOpen={handleOpenOther}
        handleClose={handleCloseOther}
      />
      <AddTip
        isOpen={isOpenAddTip}
        tip={tip}
        onChange={(value) => setTip(value)}
        handleOpen={handleOpenAddTip}
        handleClose={handleCloseAddTip}
      />
    </>
  )
}

PaymentMethods.getLayout = (page) => (
  <CustomLayout paymentMethod header={{ label: "check total" }}>
    {page}
  </CustomLayout>
)
export default PaymentMethods
