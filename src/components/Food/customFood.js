import CustomFoodCard from "@/components/CustomFoodCard"
import FoodLayout from "@/layouts/FoodLayout"
import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

function CustomCards({ foodItems }) {
  const router = useRouter()
  useEffect(() => {
    if (!foodItems) {
      // alert("lord rohit jangid")
      delete router.query.foodType
      router.push(router)
    }
  }, [foodItems])

  console.log("foodItems", foodItems)
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
      {foodItems?.food?.customizeFoodOptions?.map((item, index) => (
        <Box
          display="flex"
          flexDirection="column"
          key={index}
          justifyContent="start"
        >
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
            {item.section.map((section, index) => (
              <CustomFoodCard
                key={index}
                section={section}
                type={item.category}
                food={foodItems.food}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}


export default CustomCards
