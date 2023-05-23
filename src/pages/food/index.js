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
import { PrintIcon, SaveCheckRedIcon } from "@/components/icons"

function ChineseFood() {
  const style = {
    paddingTop: { lg: "40px", xs: "20px" },
    bgcolor: "background.paper",
  }

  const router = useRouter()
  const foodItems = FoodData.find(
    (food) => food.category?.toLowerCase() === router.query?.category
  )
  console.log(foodItems)
  return (
    <Box display="flex" width="100%" alignItems="start">
      <Box
        height={{ lg: "calc(100vh - 64px - 68px)" }}
        overflow="auto"
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={{ lg: "12px", xs: "8px" }}
        p={{ lg: "22px", xs: "12px" }}
      >
        {foodItems?.foods.map((food) => (
          <FoodCard foods={food} />
        ))}
      </Box>
      <Box
        minWidth={{ lg: "370px", xs: "230px" }}
        height={{ lg: "calc(100vh - 64px)" }}
        overflow="auto"
        bgcolor="#FFFFFF"
      >
        <Box height={{ lg: "calc(100vh - 64px - 327px)" }} overflow="auto">
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
          <FoodBillingCard />
        </Box>
        <Box pt={{ lg: "40px" }}>
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
            {/* <Box
              p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
              display="flex"
              flexDirection="row"
              width="100%"
            >
              <Button
                // flexDirection="column"

                alignItems="center"
                textAlign="center"
                gap={{ lg: "20px", xs: "12px" }}
                // justifyContent="center"

                sx={{
                  // width: { lg: "780px", xs: "550px" },
                  margin: "auto",
                  py: { lg: "6px", xs: "4px" },
                  width: "100%",
                  backgroundColor: "#A5ACAE",
                  color: "#FFFFFF !important",
                  fontSize: { lg: "20px", xs: "15px" },
                  fontWeight: "400",
                  letterSpacing: "0.6px",
                  boxShadow: "3px 3px 12px #00000038",
                  borderRadius: "10px",

                  "&:hover": {
                    backgroundColor: "#A5ACAE",
                  },
                }}
              >
                SUBMIT
              </Button>
              <Button
                // flexDirection="column"
                alignItems="center"
                textAlign="center"
                // gap={{ lg: "0px", xs: "12px" }}
                // justifyContent="center"

                sx={{
                  // width: { lg: "780px", xs: "550px" },
                  margin: "auto",
                  width: "100%",
                  py: { lg: "6px", xs: "4px" },
                  backgroundColor: "#A5ACAE",
                  color: "#FFFFFF !important",
                  fontSize: { lg: "20px", xs: "15px" },
                  fontWeight: "400",
                  letterSpacing: "0.6px",
                  boxShadow: "3px 3px 12px #00000038",
                  borderRadius: "10px",

                  "&:hover": {
                    backgroundColor: "#A5ACAE",
                  },
                }}
              >
                SUBMIT
              </Button>
            </Box> */}

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
                }}
                fullWidth
                startIcon={<SaveCheckRedIcon />}
              >
                Send
              </Button>
            </Stack>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

ChineseFood.getLayout = (page) => <FoodLayout>{page}</FoodLayout>
export default ChineseFood
