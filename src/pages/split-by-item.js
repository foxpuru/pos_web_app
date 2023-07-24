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
import { PrimaryButton } from "@/components/CusttomButtons"
import CustomLayout from "@/layouts/CustomLayout"

function SplitByItem() {
  const router = useRouter()

  const {
    isOpen: isOpenOther,
    handleToggle: handleToggleOther,
    handleOpen: handleOpenOther,
    handleClose: handleCloseOther,
  } = useModalState(false)
  return (
    <>
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

        <Divider sx={{ borderBottomWidth: "1px", borderColor: "#D7DBDC" }} />
        <Grid container>
          <Grid
            container
            item
            spacing={{ lg: 3, xs: 1 }}
            // height="100%"
            alignItems="center"
            justifyContent="center"
            py={{ lg: "22px", xs: "22px" }}
            px={{ lg: "22px", xs: "12px" }}
          >
            <Grid item xs={7}>
              <Typography
                //   width="50%"
                textAlign="left"
                color="#000000"
                fontWeight="400"
                fontSize={{ lg: "18px", xs: "14px" }}
                letterSpacing="0.68px"
              >
                Payment #1
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <Box
                pl={{ lg: "10px", xS: "8px" }}
                sx={{
                  border: "1px solid #5C6568",
                  height: { lg: "60px", xs: "40px" },

                  backgroundColor: "#5C6568",
                  overflow: "hidden",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                fullWidth
              >
                <Box
                  //   ml={{ lg: "6px", xs: "4px" }}
                  bgcolor="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                  sx={
                    {
                      // borderRightTopRadius: "10px",
                      // borderRightBottomRadius: "10px",
                    }
                  }
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: { lg: "22px", xs: "16px" },
                      fontWeight: "400",
                      letterSpacing: "0.88px",
                      textTransform: "capitalize",
                    }}
                  >
                    Charge ₹0.00
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid
          container
          item
          spacing={{ lg: 3, xs: 1 }}
          height="100%"
          alignItems="end"
          justifyContent="center"
          pt={{ lg: "22px", xs: "22px" }}
          px={{ lg: "22px", xs: "12px" }}
        >
          <Grid item xs={4}>
            <PrimaryButton large label="split check" />
          </Grid>
          <Grid item xs={4}>
            <PrimaryButton large label="PRINT ALL" />
          </Grid>
          <Grid item xs={4}>
            <PrimaryButton large label="SAVE CHECK" />
          </Grid>
        </Grid>
      </Grid>

      <OtherPaymentOptions
        isOpen={isOpenOther}
        handleToggle={handleToggleOther}
        handleOpen={handleOpenOther}
        handleClose={handleCloseOther}
      />
    </>
  )
}

SplitByItem.getLayout = (page) => (
  <CustomLayout paymentMethod header={{ label: "check total" }}>
    {page}
  </CustomLayout>
)
export default SplitByItem
