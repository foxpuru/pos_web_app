import { Image } from "@/components/styled-components";
import BlankLayout from "@/layouts/BlankLayout";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";

import navLogoImg from "../assets/images/musepos_logo_colored_nav.png";

import PlanRenewalImg from "../assets/images/ic_plan_renewal_payment_problem.png";
import { useRouter } from "next/router";
import { PrimaryButton } from "@/components/CusttomButtons";
import UrlTitle from "@/components/Title";
import { useSelector } from "react-redux";
import { getData, saveData } from "@/components/OfflineData";

function PlanRenewal() {
  const router = useRouter();
  // const deviceCodes = useSelector((state) => state.auth.deviceCode)
  // useEffect(async () => {
  //   saveData("espn_hola", { lang: "espn", greet: "hola" });

  //   // Get data from IndexedDB
  //   const data = await getData("espn_hola");
  //   console.log("espn_hola", data);
  //   return () => {};
  // }, []);
  return (
    <Box>
      <UrlTitle />
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
          <PrimaryButton
            sx={{
              px: { lg: "40px", xs: "32px" },
              width: "auto",
              color: "#E57607 !important",
              backgroundColor: "transparent !important",
              fontSize: { sm: "16px", xs: "14px" },
              textTransform: "capitalize",
              border: "0.5px solid #E57607",
              borderRadius: "4px",

              "&:hover": {
                backgroundColor: "transparent !important",
              },
            }}
            onClick={() => router.push("/passcode")}
            label="Continue"
          />
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
            <PrimaryButton
              sx={{
                width: "auto",
                px: { lg: "40px", xs: "32px" },
                fontSize: { lg: "16px", xs: "14px" },
                textTransform: "capitalize",
                borderRadius: "4px",
              }}
              label="Click Here"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

PlanRenewal.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
export default PlanRenewal;
