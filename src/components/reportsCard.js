import { Avatar, Box, SvgIcon, Typography } from "@mui/material"
import React from "react"
import { Image } from "./styled-components"

import ClosedCheckImg from "../assets/images/ic_closed_check.png"

function ReportCard({ data }) {
  return (
    <Box
      border="2px solid #D7DBDC"
      borderRadius="8px"
      p={{ lg: "10px", xs: "8px" }}
      display="flex"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          width: { lg: "70px", xs: "40px" },
          height: { lg: "70px", xs: "40px" },
        }}
      >
        {data.icon}
      </Avatar>
      <Box
        ml={{ lg: "10px", xs: "8px" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
      >
        <Typography
          color="#A5ACAE"
          fontWeight="400"
          fontSize={{ lg: "15px", xs: "12px" }}
          letterSpacing="0.55px"
        >
          {data.label}
        </Typography>

        <Typography
          color="#000000"
          fontWeight="500"
          fontSize={{ lg: "30px", xs: "20px" }}
          letterSpacing="1.05px"
        >
          {data.number}
        </Typography>
      </Box>
    </Box>
  )
}

export default ReportCard
