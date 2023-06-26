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
import AddTip from "@/components/modals/AddTip"

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
              spacing={{ lg: 3, xs: 1 }}
              py={{ lg: "42px", xs: "22px" }}
              px={{ lg: "22px", xs: "12px" }}
            >
              <Grid item xs={4}>
                <Button
                  sx={{
                    height: { lg: "60px", xs: "40px" },
                    color: "#FFFFFF",
                    fontSize: { lg: "18px", xs: "14px" },
                    fontWeight: "400",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    background: "linear-gradient(to right,#26B692,#38CC79)",
                    borderRadius: "10px",

                    "& svg": {
                      width: { lg: "32px", xs: "24px" },
                      height: { lg: "32px", xs: "24px" },
                    },
                  }}
                  fullWidth
                  startIcon={<CardCashIcon />}
                  onClick={() => router.push("/cash")}
                >
                  cash
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  sx={{
                    height: { lg: "60px", xs: "40px" },
                    color: "#FFFFFF",
                    fontSize: { lg: "18px", xs: "14px" },
                    fontWeight: "400",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    background: "linear-gradient(to right,#808080,#808080)",
                    borderRadius: "10px",

                    "& svg": {
                      width: { lg: "32px", xs: "24px" },
                      height: { lg: "32px", xs: "24px" },
                    },
                  }}
                  fullWidth
                  startIcon={<CardCardsIcon />}
                  onClick={handleOpenOther}
                >
                  other
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  sx={{
                    height: { lg: "60px", xs: "40px" },
                    color: "#FFFFFF",
                    fontSize: { lg: "18px", xs: "14px" },
                    fontWeight: "400",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    background: "linear-gradient(to right,#A61831,#DE4E67)",
                    borderRadius: "10px",

                    "& svg": {
                      width: { lg: "32px", xs: "24px" },
                      height: { lg: "32px", xs: "24px" },
                    },
                  }}
                  fullWidth
                  startIcon={<CardGiftIcon />}
                  onClick={handleOpen}
                >
                  GIFT CARD
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid container height="50%">
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
                  width: "100%",
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
                onClick={() => router.push("/split-payment")}
              >
                SPLIT CHECK
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                sx={{
                  width: "100%",

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
                onClick={handleOpenAddTip}
              >
                ADDITIONAL TIP
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
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
  <PaymentLayout isPaymentMethod>{page}</PaymentLayout>
)
export default PaymentMethods
