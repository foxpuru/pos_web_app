import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"

function FooterFoodCategory({ title, path }) {
  const router = useRouter()
  return (
    <Box
      key={title}
      sx={{
        minWidth: { lg: "120px", xs: "80px" },

        width: { lg: "120px", xs: "80px" },
        position: "relative",
        display: "flex",
        height: { lg: "60px", xs: "38px" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { lg: "16px", xs: "12px" },
          color: router.query.category === path ? "#E57607" : "#A5ACAE",
          fontWeight: router.query.category === path ? "600" : "400",
          letterSpacing: "0.53px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "-3px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50px",
          border:
            router.query.category === path ? "3px solid #E57607" : undefined,
          borderRadius: "8px",
        }}
      ></Box>
    </Box>
  )
}

export default FooterFoodCategory
