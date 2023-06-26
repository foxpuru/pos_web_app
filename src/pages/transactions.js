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
import CustomHeaderLayout from "@/layouts/CustomHeaderLayout"

function Transactions() {
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
  const router = useRouter()
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
    <Box display="flex" width="100%" alignItems="start">
      {/* <Box
        maxWidth={{ lg: "370px", xs: "230px" }}
        minWidth={{ lg: "370px", xs: "230px" }}
        height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
        overflow="auto"
        bgcolor="#FFFFFF"
      >
        <Box overflow="auto">
          <Box bgcolor="#D7DBDC" p={{ lg: "12px", xs: "8px" }}>
            <Search>
              <SearchIconWrapper>
                <SearchGreyIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <TransactionDateCard />
          <TransactionDateCard />
          <TransactionDateCard />
          <TransactionDateCard />
        </Box>
      </Box> */}
      <GuestDetailsProvider>
        <GuestDetailsConsumer>
          {({ orderItems }) => (
            <>
              <Box
                maxWidth={{ lg: "370px", xs: "230px" }}
                minWidth={{ lg: "370px", xs: "230px" }}
                bgcolor="#FFFFFF"
                height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
                overflow="auto"
              >
                <Box
                  bgcolor="#D7DBDC"
                  p={{ lg: "12px", xs: "8px" }}
                  mb={{ lg: "20px", xs: "14px" }}
                >
                  <Search>
                    <SearchIconWrapper>
                      <SearchGreyIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Box>
                <TransactionSideBar />
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

                  <Box
                    p={{ lg: "18px", xs: "12px" }}
                    width="100%"
                    height={{
                      lg: "calc(100% - 144px - 2px - 108px)",
                      xs: "calc(100% - 106px - 2px - 92px)",
                    }}
                  >
                    <Box
                      overflow="auto"
                      height={{
                        lg: "calc(100% - 124px )",
                        xs: "calc(100% - 88px)",
                      }}
                      // p={{ lg: "18px", xs: "12px" }}
                      sx={{ paddingTop: "0 !important" }}
                    >
                      {orderItems?.order?.map((item, index) => (
                        <Box key={index}>
                          <Box
                            px={{ lg: "16px", xs: "14px" }}
                            pb={{ lg: "16px", xs: "12px" }}
                            width="100%"
                            sx={{
                              display: "flex",
                              alignItems: "start",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#EEF5F6",
                                opactiy: "1",
                                borderRadius: { lg: "6px", xs: "4px" },
                                width: { lg: "34px", xs: "24px" },
                                height: { lg: "34px", xs: "24px" },
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  color: "#000000",
                                  letterSpacing: "0.65px",
                                  fontSize: { lg: "18px", xs: "12px" },
                                }}
                              >
                                {item.count}
                              </Typography>
                            </Box>
                            <Box
                              width="100%"
                              pl={{ lg: "12px", xs: "6px" }}
                              display="flex"
                              justifyContent="space-between"
                            >
                              <Box
                                width="100%"
                                display="grid"
                                gap={{ lg: "12px", xs: "8px" }}
                              >
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="space-between"
                                  width="100%"
                                >
                                  <Typography
                                    sx={{
                                      fontWeight: "400",
                                      color: "#000000",
                                      letterSpacing: "0.65px",
                                      fontSize: { lg: "18px", xs: "14px" },
                                    }}
                                  >
                                    {item.foodName}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontWeight: "400",
                                      color: "#000000",
                                      letterSpacing: "0.65px",
                                      fontSize: { lg: "18px", xs: "14px" },
                                    }}
                                  >
                                    {item.finalPrice}
                                  </Typography>
                                </Box>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="space-between"
                                  width="100%"
                                >
                                  <Typography
                                    sx={{
                                      fontWeight: "400",
                                      color: "#A5ACAE",
                                      letterSpacing: "0.55px",
                                      fontSize: { lg: "16px", xs: "12px" },
                                    }}
                                  >
                                    {item.foodDescription}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontWeight: "400",
                                      color: "#000000",
                                      textDecoration: "line-through",
                                      textDecorationColor: "#FFFFFF",
                                      textDecorationThickness: "2px",
                                      letterSpacing: "0.65px",
                                      fontSize: { lg: "18px", xs: "14px" },
                                    }}
                                  >
                                    {item.price}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <ListDivider
                            styles={{ mb: { lg: "16px", xs: "12px" } }}
                          />
                        </Box>
                      ))}

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
                              color: "#FF4141",
                              letterSpacing: "0.53px",
                              fontSize: { lg: "15px", xs: "11px" },
                            }}
                          >
                            Discount
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              color: "#FF4141",
                              letterSpacing: "0.55px",
                              fontSize: { lg: "16px", xs: "12px" },
                            }}
                          >
                            ₹0.00
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
                            Sub Total
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              color: "#000000",
                              letterSpacing: "0.55px",
                              fontSize: { lg: "16px", xs: "12px" },
                            }}
                          >
                            ₹1843.90
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
                            Tex
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              color: "#000000",
                              letterSpacing: "0.55px",
                              fontSize: { lg: "16px", xs: "12px" },
                            }}
                          >
                            ₹331.90
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box py={{ lg: "20px", xs: "16px" }}>
                      <Box
                        border="1px solid #D7DBDC"
                        borderRadius="8px"
                        bgcolor="#D7DBDC"
                        px={{ lg: "10px", xs: "10px" }}
                        py={{ lg: "18px", xs: "18px" }}
                        display="flex"
                        width="100%"
                        justifyContent="space-between"
                        alignItems="start"
                      >
                        <Typography
                          textAlign="left"
                          width="50%"
                          sx={{
                            fontWeight: "400",
                            color: "#000000",
                            letterSpacing: "0.6px",
                            fontSize: { lg: "18px", xs: "14px" },
                          }}
                        >
                          Payment Details
                        </Typography>
                        <Box
                          width={{ lg: "36%", xs: "50%" }}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          textAlign="right"
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                color: "#000000",
                                letterSpacing: "0.6px",
                                fontSize: { lg: "18px", xs: "14px" },
                              }}
                            >
                              Amount Tendered
                            </Typography>
                            <Typography
                              mt={{ lg: "10px", xs: "8px" }}
                              sx={{
                                fontWeight: "400",
                                color: "#000000",
                                letterSpacing: "0.6px",
                                fontSize: { lg: "18px", xs: "14px" },
                              }}
                            >
                              Change Due
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                color: "#000000",
                                letterSpacing: "0.6px",
                                fontSize: { lg: "18px", xs: "14px" },
                              }}
                            >
                              ₹1954.10
                            </Typography>
                            <Typography
                              mt={{ lg: "10px", xs: "8px" }}
                              sx={{
                                fontWeight: "400",
                                color: "#000000",
                                letterSpacing: "0.6px",
                                fontSize: { lg: "18px", xs: "14px" },
                              }}
                            >
                              ₹0.00
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
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
                          onClick={() => router.push("food?category=chinese")}
                        >
                          REFUND CHECK
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </>
          )}
        </GuestDetailsConsumer>
      </GuestDetailsProvider>
    </Box>
  )
}

Transactions.getLayout = (page) => (
  <CustomHeaderLayout>{page}</CustomHeaderLayout>
)
export default Transactions
