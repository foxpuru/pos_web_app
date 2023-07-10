// import React from "react";
// import styled from "styled-components";
// import bgBack from "../img/bg404.png";
// import GreyDesignBg from "../img/retail/grey_design_bg.png";
// import ic_404_error from "../img/ic_404_error.png";
import { Box, Typography } from "@mui/material"

import ErrorPageIcon from "@/assets/images/Group 25075.png"
import { Image } from "@/components/styled-components"
import BlankLayout from "@/layouts/BlankLayout"
import { PrimaryButton } from "@/components/CusttomButtons"
import { useRouter } from "next/router"

function Custom404() {
  const router = useRouter()
  return (
    <Box
      sx={{ width: "100%", height: "100vh " }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={{ lg: "44px", xs: "36px" }}
      >
        <Image
          src={ErrorPageIcon.src}
          alt="error page banner image"
          sx={{ width: { lg: "440px", xs: "400px" } }}
        />
        <Typography fontSize={{ lg: "28px", xs: "24px" }} fontWeight="600">
          Page Not Found
        </Typography>
        <Typography
          width="53%"
          margin="auto"
          fontSize={{ lg: "16px", xs: "14px" }}
          fontWeight="400"
        >
          The page you are looking for doesn't exist or an other error occurred.
          Go back, or head over to musepos.com to choose a new direction.
        </Typography>
        <PrimaryButton
          large
          label="GO TO HOME PAGE"
          onClick={() => router.push("/food?category=1c1716111a0c1a")}
          sx={{
            width: { lg: "240px", xs: "260px" },
            height: { lg: "50px", xs: "40px" },
          }}
        />
      </Box>
    </Box>
  )
}

Custom404.getLayout = (page) => <BlankLayout>{page}</BlankLayout>
export default Custom404
