import FoodBillingCard from "@/components/FoodBillingCard"
import FoodCard from "@/components/FoodCard"
import { FoodData } from "@/data/food/foodData"
import FoodLayout from "@/layouts/FoodLayout"
import { Box, Button, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"

import { PrintIcon, SaveCheckRedIcon } from "@/components/icons"
import { useSelector } from "react-redux"
import CustomCards from "@/components/Food/customFood"

function ChineseFood() {
  const style = {
    bgcolor: "background.paper",
  }

  const router = useRouter()
  const foodItems = FoodData.find(
    (food) => food.path?.toLowerCase() === router.query?.category
  )
  console.log("router query", router.query.category)

  const cardData = useSelector((state) => state.cart.items)
  console.log("cardData", cardData)

  // const [showCustom, setShowCustom] = useState(false)
  const [customizeFoodItem, setCustomizeFoodItem] = useState(null)

  

  return (
    <Box display="flex" width="100%" alignItems="start">
      {customizeFoodItem ? (
        <CustomCards />
      ) : (
        <Box
          height={{
            lg: "calc(100vh - 64px - 60px)",
            xs: "calc(100vh - 64px - 38px)",
          }}
          overflow="auto"
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={{ lg: "12px", xs: "8px" }}
          p={{ lg: "22px", xs: "12px" }}
        >
          {foodItems?.foods.map((food, index) => (
            <FoodCard
              setCustomizeFoodItem={(e) => setCustomizeFoodItem(e)}
              food={food}
              key={index}
            />
          ))}
        </Box>
      )}
      <Box
        maxWidth={{ lg: "370px", xs: "230px" }}
        minWidth={{ lg: "370px", xs: "230px" }}
        height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
        overflow="auto"
        bgcolor="#FFFFFF"
      >
        <Box
          height={{
            lg: "calc(100vh - 60px - 288px)",
            xs: "calc(100vh - 250px)",
          }}
          overflow="auto"
        >
          {cardData.map((item) => (
            <FoodBillingCard {...item} key={item.id} />
          ))}
          {/* <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard /> */}
        </Box>
        <Box pt={{ lg: "44px", xs: "22px" }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <Divider light />
            <Box
              p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
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
              p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
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
              p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
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

            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={2}
              p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
              // display="flex"
              // flexDirection="row"
              // width="100%"
            >
              <Button
                sx={{
                  height: { lg: undefined, xs: "40px" },
                  color: "#E57607",
                  fontSize: { lg: "16px", xs: "12px" },
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  backgroundColor: "#EEF5F6",
                  borderRadius: "10px",

                  "& svg": {
                    width: { lg: "32px", xs: "24px" },
                    height: { lg: "32px", xs: "24px" },
                  },
                }}
                fullWidth
                startIcon={<PrintIcon />}
              >
                Print
              </Button>
              <Button
                sx={{
                  height: { lg: undefined, xs: "40px" },
                  color: "#00B153",
                  fontSize: { lg: "16px", xs: "12px" },
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  backgroundColor: "#EEF5F6",
                  borderRadius: "10px",

                  "& svg": {
                    width: { lg: "32px", xs: "24px" },
                    height: { lg: "32px", xs: "24px" },
                  },
                }}
                fullWidth
                startIcon={<SaveCheckRedIcon />}
              >
                Send
              </Button>
            </Stack>

            <Box>
              <Button
                onClick={() => router.push("/payment-methods")}
                sx={{
                  height: { lg: "60px", xs: "38px" },
                  color: "#FFFFFF",
                  justifyContent: "space-between",

                  fontWeight: "300",
                  letterSpacing: "0.8px",
                  backgroundColor: "#00B153",
                  borderRadius: "0px",
                  textTransform: "capitalize",

                  "&:hover": {
                    backgroundColor: "#00B153",
                  },
                }}
                fullWidth
              >
                <Typography sx={{ fontSize: { lg: "20px", xs: "12px" } }}>
                  Charge
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "28px", xs: "18px", fontWeight: "600" },
                  }}
                >
                  ₹0.00
                </Typography>
              </Button>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

ChineseFood.getLayout = (page) => <FoodLayout>{page}</FoodLayout>
export default ChineseFood
