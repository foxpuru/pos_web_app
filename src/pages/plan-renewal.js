import { Image } from "@/components/styled-components/tableDetails"
import BlankLayout from "@/layouts/BlankLayout"
import { Box, Button, Typography } from "@mui/material"
import React from "react"

import navLogoImg from "../assets/images/musepos_logo_colored_nav.png"

import PlanRenewalImg from "../assets/images/ic_plan_renewal_payment_problem.png"
import { useRouter } from "next/router"

function PlanRenewal() {
  const router = useRouter()
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
      <Box p={{ lg: "30px", xs: "15px" }}>
        <Box display="flex" justifyContent="right">
          <Button
            sx={{
              px: { lg: "40px", xs: "20px" },
              color: "#E57607",
              fontSize: { sm: "16px", xs: "12px" },
              fontWeight: "500",
              textTransform: "capitalize",
              border: "0.5px solid #E57607",
              borderRadius: "4px",

              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            // disabled={otp.length < 4}
            onClick={() => router.push("/passcode")}
          >
            Continue
          </Button>
        </Box>
        <Box
          display="grid"
          alignContent="center"
          height="calc(100vh - 60px - 107px)"
        >
          <Box
            p={{ lg: "30px", xs: "15px" }}
            display="flex"
            justifyContent="center"
          >
            <Image
              src={PlanRenewalImg.src}
              alt="nav logo"
              sx={{ width: { lg: "180px", xs: "150px" } }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { sm: "26px", xs: "18px" },
              color: "#232323",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Plan Renewal Payment Problem
          </Typography>
          <Typography
            mt={{ lg: "20px", xs: "10px" }}
            width={{ lg: "625px", xs: "100%" }}
            margin="auto"
            sx={{
              fontSize: { sm: "16px", xs: "12px" },
              color: "#5C6568",
              textAlign: "center",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            We would like to inform you that your
            <Typography
              component={"span"}
              sx={{
                color: "#E57607",
              }}
            >
              {" "}
              Muse
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "#2C007E",
              }}
            >
              POS
            </Typography>
            <Typography component={"span"}>
              {" "}
              plan has not been updated as there seem to be some payment issues.
              It is important for you to know that you have a grace period of
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "#000000",
                fontWeight: "500",
              }}
            >
              {" "}
              7 days
            </Typography>
            <Typography component={"span"}>
              {" "}
              to resolve the payment issue, after which you will not be able to
              use the system until the payment methods are rectified from the
              merchant back office.
            </Typography>
          </Typography>
          <Box
            pt={{ lg: "30px", xs: "15px" }}
            display="flex"
            justifyContent="center"
          >
            <Button
              sx={{
                px: { lg: "40px", xs: "20px" },
                color: "#ffffff",
                backgroundColor: "#E57607",
                fontSize: { sm: "16px", xs: "12px" },
                fontWeight: "400",
                textTransform: "capitalize",
                borderRadius: "4px",

                "&:hover": {
                  backgroundColor: "#E57607",
                },
              }}
              // disabled={otp.length < 4}
            >
              Click Here
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

PlanRenewal.getLayout = (page) => <BlankLayout>{page}</BlankLayout>
export default PlanRenewal
