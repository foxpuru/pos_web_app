import { Box, Typography } from "@mui/material"
import React from "react"

function FooterFoodCategory({ title }) {
  return (
    <Box
      key={title}
      sx={{
        minWidth: { lg: "120px", xs: "80px" },
        width: { lg: "120px", xs: "80px" },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { lg: "16px", xs: "12px" },
          color: "#A5ACAE",
          fontWeight: "400",
          letterSpacing: "0.53px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default FooterFoodCategory
