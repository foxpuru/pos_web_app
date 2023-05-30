import React from "react"
import { Box, Button, Stack, Typography } from "@mui/material"
import Divider from "@mui/material/Divider"
import { useRouter } from "next/router"

import { Image } from "@/components/styled-components/tableDetails"
import PaymentLayout from "@/layouts/PaymentLayout"
import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png"

function Cash() {
  const router = useRouter()
  return (
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
          <Divider sx={{ borderBottomWidth: "1px", borderColor: "#D7DBDC" }} />
          <Typography
            my={{ lg: "18px", xs: "14px" }}
            color="#000000"
            fontWeight="400"
            fontSize={{ lg: "18px", xs: "12px" }}
            letterSpacing="0.68px"
          >
            Add Cash Payment
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
      </Box>

      <Box height="50%" display="flex" alignItems="end" justifyContent="end">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={{ lg: 3, xs: 1 }}
          py={{ lg: "42px", xs: "22px" }}
          px={{ lg: "22px", xs: "12px" }}
          // display="flex"
          // flexDirection="row"
          width="100%"
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
            onClick={() => router.push("/payment-completed")}
          >
            CHARGE
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

Cash.getLayout = (page) => <PaymentLayout isPaymentMethod>{page}</PaymentLayout>

export default Cash
