import FoodBillingCard from "@/components/FoodBillingCard"
import FoodCard from "@/components/FoodCard"
import { FoodData } from "@/data/food/foodData"
import FoodLayout from "@/layouts/FoodLayout"
import { Box, Button, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
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
  PrintIcon,
  SaveCheckRedIcon,
} from "@/components/icons"

import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png"
import { Image } from "@/components/styled-components/tableDetails"

function PaymentMethods() {
  const style = {
    bgcolor: "background.paper",
  }

  return (
    <Box display="flex" width="100%" alignItems="start">
      <Box
        borderTop="2px solid #e5ebec"
        maxWidth={{ lg: "370px", xs: "230px" }}
        minWidth={{ lg: "370px", xs: "230px" }}
        height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
        overflow="auto"
        bgcolor="#FFFFFF"
      >
        <Box
          height={{
            lg: "calc(100vh - 60px - 174px)",
            xs: "calc(100vh - 166px)",
          }}
          overflow="auto"
        >
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
          <FoodBillingCard discount={false} counterButton={false} />
        </Box>
        <Box pt={{ lg: "44px", xs: "22px" }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <Divider light />
            <Box
              p={{ lg: "8px 10px 8px 10px", xs: "4px 10px 4px 10px" }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    xs: "12px",
                    color: "#FF4141",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  },
                }}
              >
                Discount
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    xs: "12px",
                    color: "#FF4141",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  },
                }}
              >
                ₹0.00
              </Typography>
            </Box>
            <Divider light />
            <Box
              p={{ lg: "8px 10px 8px 10px", xs: "4px 10px 4px 10px" }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    xs: "12px",
                    color: "#A5ACAE",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  },
                }}
              >
                Subtotal
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    xs: "12px",
                    color: "#000000",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  },
                }}
              >
                ₹1562.62
              </Typography>
            </Box>
            <Divider light />
            <Box
              p={{ lg: "8px 10px 8px 10px", xs: "4px 10px 4px 10px" }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    xs: "12px",
                    color: "#A5ACAE",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  },
                }}
              >
                Tax
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    xs: "12px",
                    color: "#000000",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  },
                }}
              >
                ₹281.28
              </Typography>
            </Box>
            <Divider light />
          </List>
        </Box>
      </Box>
      <Box
        width="100%"
        p={{ lg: "22px", xs: "12px" }}
        height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
      >
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
                my={{ lg: "12px", xs: "12px" }}
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
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={{ lg: 3, xs: 1 }}
              py={{ lg: "42px", xs: "22px" }}
              px={{ lg: "22px", xs: "12px" }}
              // display="flex"
              // flexDirection="row"
              // width="100%"
            >
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
              >
                cash
              </Button>
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
              >
                other
              </Button>
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
              >
                GIFT CARD
              </Button>
            </Stack>
          </Box>
          <Box
            height="50%"
            display="flex"
            alignItems="end"
            justifyContent="end"
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={{ lg: 3, xs: 1 }}
              py={{ lg: "42px", xs: "22px" }}
              px={{ lg: "22px", xs: "12px" }}
              // display="flex"
              // flexDirection="row"
              // width="100%"
            >
              <Button
                sx={{
                  width: { lg: "310px", xs: "156.33px" },
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
              >
                SPLIT CHECK
              </Button>
              <Button
                sx={{
                  width: { lg: "310px", xs: "156.33px" },

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
                ADDITIONAL TIP
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PaymentMethods
