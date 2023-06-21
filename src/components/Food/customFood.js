import CustomFoodCard from "@/components/CustomFoodCard"
import { CustomizeLayoutFields } from "@/data/food/customizeLayoutFields"
import FoodLayout from "@/layouts/FoodLayout"
import { Box, Typography } from "@mui/material"
import React from "react"

function CustomCards() {
  return (
    <Box
      height={{
        lg: "calc(100vh - 64px - 60px)",
        xs: "calc(100vh - 64px - 38px)",
      }}
      overflow="auto"
      width="100%"
      gap={{ lg: "22px", xs: "12px" }}
      p={{ lg: "22px", xs: "12px" }}
    >
      {CustomizeLayoutFields.map((item) => (
        <Box display="flex" flexDirection="column" justifyContent="start">
          <Typography
            sx={{
              fontSize: { lg: "14px", xs: "12px" },
              fontWeight: "500",
              textTransform: "uppercase",
              color: "#000000",
            }}
          >
            {item.category}
          </Typography>
          <Box
            py={{ lg: "12px", xs: "12px" }}
            display="flex"
            flexWrap="wrap"
            justifyContent=""
            gap={{ lg: "22px", xs: "12px" }}
          >
            {item.section.map((section) => (
              <CustomFoodCard field={section} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CustomCards
