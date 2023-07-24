import { PrimaryButton } from "@/components/CusttomButtons"


import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material"
import React, { useState } from "react"
import PlusImg from "../assets/images/ic_plus.png"
import MinusImg from "../assets/images/ic_minus.png"
import { Image } from "@/components/styled-components"
import CustomLayout from "@/layouts/CustomLayout"

const buttonStyles = {
  borderRadius: "0px 0px 10px 10px",
  fontSize: { lg: "16px", xs: "16px" },
  height: { lg: "50px", xs: "40px" },
  letterSpacing: 0,
}

const BoxStyles = {
  display: "flex",
  alignItems: "center",
  px: { lg: "22px", xs: "18px" },
  justifyContent: "space-between",
}

const TypographyStyles = {
  fontSize: { lg: "18px", xs: "16px" },
  fontWeight: "400",
  letterSpacing: "0.65px",
  textTransform: "capitalize",
  color: "#000000",
}

const AmountColumn = ({ item, handleAdd, handleRemove }) => {
  return (
    <Grid item md={6} xs={12}>
      <Box sx={{ ...BoxStyles }}>
        <Typography
          width={{ lg: "150px", xs: "150px" }}
          sx={{
            ...TypographyStyles,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.amount >= 100
            ? `${item.amount} Rupees`
            : `${item.amount} Rupees Coin`}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap={{ lg: "22px", xs: "18px" }}
        >
          <Image
            src={MinusImg.src}
            alt="minus"
            sx={{ width: { lg: "42px", xs: "36px" }, cursor: "pointer" }}
            // onClick={handleRemove()}
          />
          <Box
            bgcolor="#D7DBDC"
            borderRadius="4px"
            height={{ lg: "36px", xs: "32px" }}
            width={{ lg: "100px", xs: "80px" }}
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Typography
              color="black"
              fontWeight="400"
              letterSpacing="0.65px"
              textTransform="capitalize"
            >
              {item.quantity}
            </Typography>
          </Box>
          <Image
            src={PlusImg.src}
            alt="plus"
            sx={{ width: { lg: "42px", xs: "36px" } }}
          />
        </Box>
        <Typography
          textAlign="right"
          width={{ lg: "120px", xs: "100px" }}
          sx={{
            ...TypographyStyles,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {/* ₹{item.amount * item.quantity} */}
          3443432
        </Typography>
      </Box>
    </Grid>
  )
}

function CashManagement() {
  const [count, setCount] = useState([
    {
      amount: 2000,
      quantity: 4,
    },
    {
      amount: 20,
      quantity: 0,
    },
    {
      amount: 500,
      quantity: 0,
    },
    {
      amount: 10,
      quantity: 0,
    },
    {
      amount: 200,
      quantity: 0,
    },
    {
      amount: 5,
      quantity: 0,
    },
    {
      amount: 100,
      quantity: 0,
    },
    {
      amount: 2,
      quantity: 0,
    },
  ])

  return (
    <Box
      p={{ lg: "22px", xs: "18px" }}
      pt="0 !important"
      height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
      overflow="auto"
    >
      <Box
        height="100%"
        overflow="auto"
        px={{ lg: "22px", xs: "18px" }}
        bgcolor="#FFFFFF"
        borderRadius="0px 0px 10px 10px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            bgcolor="#EEF5F6"
            p={{ lg: "22px", xs: "18px" }}
            borderRadius="0px 0px 10px 10px"
          >
            <Typography
              color="black"
              fontWeight="500"
              letterSpacing="0.65px"
              fontSize={{ lg: "20px", xs: "17px" }}
            >
              Close Cash Register
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ lg: 2, xs: 1 }}
            px={{ lg: "44px", xs: "36px" }}
          >
            <Grid item xs={3}>
              <PrimaryButton
                label="OPEN DRAWER"
                sx={{
                  ...buttonStyles,
                  color: "#E57607",
                  backgroundColor: "#D7DBDC",
                  "&:hover": {
                    backgroundColor: "#D7DBDC !important",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <PrimaryButton
                label="PAY IN"
                sx={{
                  ...buttonStyles,

                  backgroundColor: "#00B118",
                  "&:hover": {
                    backgroundColor: "#00B118 !important",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <PrimaryButton
                label="PAY OUT"
                sx={{
                  ...buttonStyles,

                  backgroundColor: "#FF5151",
                  "&:hover": {
                    backgroundColor: "#FF5151 !important",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <PrimaryButton
                label="ADD NOTE"
                sx={{
                  ...buttonStyles,
                  color: "#E57607",
                  backgroundColor: "#D7DBDC",
                  "&:hover": {
                    backgroundColor: "#D7DBDC !important",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={{ lg: "22px", xs: "18px" }}
            columnSpacing={{ lg: 4, xs: 2 }}
            p={{ lg: "22px", xs: "18px" }}
          >
            {count.map((item, index) => (
              <AmountColumn
                key={index}
                item={item}
                handleAdd={() => setCount()}
                handleRemove={() => setCount()}
              />
            ))}
          </Grid>
        </Box>
        <Box
          borderTop="2px solid #D7DBDC"
          p={{ lg: "22px", xs: "18px" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ ...TypographyStyles }}>
            Confirm Cash And Close The Register
          </Typography>
          <Box
            width="40%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: { lg: "36px", xs: "30px" },
                fontWeight: "400",
                letterSpacing: "1.5px",
                width: { lg: "300px", xs: "260px" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              ₹0.00
            </Typography>
            <PrimaryButton
              large
              label="CLOSE"
              sx={{
                width: { lg: "240px", xs: "200px" },
                height: { lg: "50px", xs: "40px" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

CashManagement.getLayout = (page) => (
  <CustomLayout blankHeader header={{ label: "Cash management" }}>
    {page}
  </CustomLayout>
)

export default CashManagement
