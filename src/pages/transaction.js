import { Box, Button, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import Divider from "@mui/material/Divider"
import { styled, alpha } from "@mui/material/styles"
import {
  CardCardsIcon,
  CardCashIcon,
  CardGiftIcon,
  PrintIcon,
  SaveCheckRedIcon,
  SearchGreyIcon,
} from "@/components/icons"

import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png"
import { Image } from "@/components/styled-components/tableDetails"
import MainLayout from "@/layouts/MainLayout"
import TransactionDateCard from "@/components/TransactionDateCard"
import InputBase from "@mui/material/InputBase"
function Transactions() {
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
      <Box
        borderTop="2px solid #e5ebec"
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

            <Box>
              <Divider
                sx={{
                  borderBottomWidth: "2px",
                  borderColor: "#D7DBDC",
                }}
              />
              <Box p={{ lg: "18px", xs: "12px" }} width="100%">
                <Box
                  px={{ lg: "30px", xs: "15px" }}
                  sx={{
                    display: "flex",
                    alignItems: "start",
                  }}
                  width="100%"
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
                      1
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
                            fontSize: { lg: "18px", xs: "12px" },
                          }}
                        >
                          Veg. triple schezwan
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            color: "#000000",
                            letterSpacing: "0.65px",
                            fontSize: { lg: "18px", xs: "12px" },
                          }}
                        >
                          ₹1843.90
                        </Typography>
                      </Box>
                      <Box textAlign="left">
                        <Typography
                          sx={{
                            fontWeight: "400",
                            color: "#A5ACAE",
                            letterSpacing: "0.55px",
                            fontSize: { lg: "14px", xs: "10px" },
                          }}
                        >
                          Veg. triple schezwan
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
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

Transactions.getLayout = (page) => (
  <MainLayout isPaymentMethod>{page}</MainLayout>
)
export default Transactions
