import { Image } from "@/components/styled-components/tableDetails"
import { Box, Button, Grid, Typography } from "@mui/material"
import React, { useState } from "react"
import OtpInput from "react-otp-input"

import BackgroundBannerImg from "../assets/images/clock_in_bg.png"
import LogoImg from "../assets/images/musepos_logo_colored_white.png"
import ClockImg from "../assets/images/ic_clock_in.png"
import { Form, Formik } from "formik"
import BlankLayout from "@/layouts/BlankLayout"

function Passcode() {
  const [otp, setOtp] = useState("")

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundBannerImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      height="100vh"
      //   width="100%"
      display="grid"
      alignItems="center"
      justifyContent="center"
    >
      <Formik
        initialValues={{
          password: "",
        }}
        // onSubmit={onSubmit}
      >
        <Form>
          <Box display="grid" gap={{ sm: "30px", xs: "20px" }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              gap={{ sm: "20px", xs: "12px" }}
              justifyContent="center"
              sx={{
                p: { sm: "30px", xs: "15px" },
                backgroundColor: "white",
                boxShadow: "3px 3px 12px #00000038",
                borderRadius: "10px",
              }}
            >
              <Image
                src={LogoImg.src}
                alt="logo"
                sx={{
                  height: { sm: "30px", xs: "20px" },
                }}
              />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={ClockImg.src}
                  alt="logo"
                  sx={{
                    height: { sm: "44px", xs: "32px" },
                    width: { sm: "44px", xs: "32px" },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { sm: "20px", xs: "14px" },
                    color: "#000000",
                    fontWeight: "500",
                    // lineHeight: 0,
                    letterSpacing: "0.5px",
                  }}
                >
                  Clock In
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { sm: "22px", xs: "15px" },
                  color: "#000000",
                  fontWeight: "400",
                  // lineHeight: 0,
                  letterSpacing: "0.55px",
                }}
              >
                Enter Your Passcode
              </Typography>
              <OtpInput
                containerStyle="otp-form-control"
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => {
                  return (
                    <input
                      {...props}
                      className={!!props.value ? "fill-otp" : undefined}
                    />
                  )
                }}
              />
            </Box>
            
              width="100%"
              // flexDirection="column"
              alignItems="center"
              textAlign="center"
              // gap={{ sm: "0px", xs: "12px" }}
              // justifyContent="center"
              sx={{
                py: { sm: "6px", xs: "4px" },
                backgroundColor: otp.length == 4 ? "#E57607" : "#A5ACAE",
                color: "white",
                fontSize: { sm: "24px", xs: "16px" },
                fontWeight: "400",
                letterSpacing: "0.6px",
                boxShadow: "3px 3px 12px #00000038",
                borderRadius: "10px",

                "&:hover": {
                  backgroundColor: "#E57607",
                },
              }}
              disabled={otp.length < 4}
            >
              SUBMIT
            </Button><Button
          </Box>
        </Form>
      </Formik>
    </Box>
  )
}

Passcode.getLayout = (page) => <BlankLayout>{page}</BlankLayout>
export default Passcode
