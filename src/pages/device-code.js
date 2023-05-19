import { Image } from "@/components/styled-components/tableDetails"
import { Box, Button, Grid, Typography } from "@mui/material"
import React, { useState } from "react"

import navLogoImg from "../assets/images/musepos_logo_colored_nav.png"
import signWithDeviceLogoImg from "../assets/images/ic_sign_in_with_device_code.png"
import { Form, Formik } from "formik"
import { FormikInput } from "@/components/inputs"
import OTPInput from "react-otp-input"
import BlankLayout from "@/layouts/BlankLayout"
import { useRouter } from "next/router"

const GridItem = () => {
  return (
    <Grid
      px={{ sm: "42px", xs: "26px" }}
      sm={4}
      xs={12}
      display="flex"
      justifyContent="space-between"
      border="2px solid #D7DBDC"
      bgcolor="white"
    >
      <Typography></Typography>
    </Grid>
  )
}

function DeviceCode() {
  const [otp, setOtp] = useState("")

  const Router = useRouter()

  return (
    <Box>
      <Box
        bgcolor="#ffffff"
        py={{ sm: "20px", xs: "12px" }}
        justifyContent="center"
        display="flex"
      >
        <Image
          src={navLogoImg.src}
          alt="nav logo"
          sx={{ height: { xs: "20px" } }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={{ sm: "30px", xs: "15px" }}
        gap={{ sm: "20px", xs: "12px" }}
        alignItems="center"
        // justifyContent="center"
        // textAlign="center"
      >
        <Image
          src={signWithDeviceLogoImg.src}
          alt="sign in logo"
          sx={{ width: { sm: "360px", xs: "250px" } }}
        />
        <Typography
          sx={{
            fontSize: { sm: "26px", xs: "18px" },
            color: "#232323",
            fontWeight: "500",
          }}
        >
          Sign in with Device Code
        </Typography>

        <Typography
          sx={{
            margin: "auto",
            textAlign: "center",
            fontSize: { sm: "18px", xs: "13px" },
            color: "#5C6568",
            fontWeight: "400",
            letterSpacing: "0.5px",
          }}
        >
          The MusePOS app requires a device code create on Dashboard to log In.
          <Typography
            component={"span"}
            sx={{
              fontSize: { sm: "18px", xs: "13px" },
              color: "#0090FF",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            {" "}
            Create a Device Code
          </Typography>
        </Typography>
        <Formik
          initialValues={{
            password: "",
          }}
          // onSubmit={onSubmit}
        >
          <Form>
            <Grid
              py={4}
              sx={{ width: { lg: "1200px", xs: "650px" }, margin: "auto" }}
            >
              <OTPInput
                containerStyle="device-code-form-control"
                value={otp}
                onChange={setOtp}
                inputType="text"
                placeholder="------------"
                numInputs={12}
                renderInput={(props) => {
                  return (
                    <input
                      {...props}
                      // className={!!props.value ? "fill-otp" : undefined}
                    />
                  )
                }}
              />
            </Grid>
            <Box
              pb={4}
              // px={{ lg: "30px", xs: "20px" }}
            >
              <Typography
                width={{ lg: "840px", xs: "600px" }}
                margin="auto"
                sx={{
                  fontSize: { sm: "18px", xs: "13px" },
                  color: "#5C6568",
                  textAlign: "center",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                }}
              >
                Device code are created in dashboard for each new device,
                allowing you in sign in without ever sharing your email and
                password. Learn more in
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: { sm: "18px", xs: "13px" },
                    color: "#0090FF",
                    fontWeight: "400",
                    letterSpacing: "0.5px",
                  }}
                >
                  {" "}
                  Support Centre
                </Typography>
              </Typography>
            </Box>
            <Box width="100%" justifyContent="center" display="flex">
              <Button
                // flexDirection="column"
                alignItems="center"
                textAlign="center"
                // gap={{ sm: "0px", xs: "12px" }}
                // justifyContent="center"

                sx={{
                  width: { lg: "780px", xs: "550px" },
                  margin: "auto",
                  py: { sm: "6px", xs: "4px" },
                  backgroundColor: otp.length == 12 ? "#E57607" : "#A5ACAE",
                  color: "#FFFFFF !important",
                  fontSize: { sm: "20px", xs: "15px" },
                  fontWeight: "400",
                  letterSpacing: "0.6px",
                  boxShadow: "3px 3px 12px #00000038",
                  borderRadius: "10px",

                  "&:hover": {
                    backgroundColor: otp.length == 12 ? "#E57607" : "#A5ACAE",
                  },
                }}
                disabled={otp.length == 12 ? false : true}
                onClick={() =>
                  otp.length == 12 ? Router.push("/") : undefined
                }
              >
                SUBMIT
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  )
}

DeviceCode.getLayout = (page) => <BlankLayout>{page}</BlankLayout>
export default DeviceCode
