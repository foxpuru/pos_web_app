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
import { Image } from "@/components/styled-components"
import InputBase from "@mui/material/InputBase"
import { ListDivider } from "@/components/ListDivider"
import TransactionSideBar from "@/components/transaction-side-bar"
import {
  GuestDetailsConsumer,
  GuestDetailsProvider,
} from "@/context/guestDetailsContext"
import ChecksDataCard from "@/components/ChecksDataCard"
import CustomHeaderLayout from "@/layouts/CustomHeaderLayout"
import { PrimaryButton } from "@/components/CusttomButtons"
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
function Checks() {
  // const [orderItems, setOrderItems] = useState([])

  // console.log("order items", orderItems)

  const style = {
    bgcolor: "background.paper",
  }

  return (
    <Box display="flex" width="100%" alignItems="start">
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
                <TransactionSideBar card={ChecksDataCard} />
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
                        top: "0px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: { lg: "22px", xs: "14px" },
                      }}
                    />
                  </Box>
                  <Box
                    p={{ lg: "18px", md: "16px", xs: "12px" }}
                    width="100%"
                    // height={{
                    //   lg: "calc(100% - 144px - 2px - 108px)",
                    //   xs: "calc(100% - 106px - 2px - 92px)",
                    // }}
                  >
                    <Box
                      overflow="auto"
                      height={{
                        lg: "calc(100% - 124px)",
                        xs: "calc(100% - 106px)",
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
                            sx={{ mb: { lg: "16px", xs: "12px" } }}
                          />
                        </Box>
                      ))}
                    </Box>
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
                          Tax
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

                  <Grid
                    container
                    item
                    spacing={{ lg: 3, md: 2, xs: 1 }}
                    // height="100%"
                    // alignItems="end"
                    // py={{ lg: "22px", xs: "22px" }}
                    px={{ lg: "22px", md: "16px", xs: "12px" }}
                  >
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <PrimaryButton
                        large
                        startIcon={<PrintIconWhite />}
                        label="receipt"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <PrimaryButton large label="refund check" />
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

Checks.getLayout = (page) => <CustomHeaderLayout>{page}</CustomHeaderLayout>
export default Checks
