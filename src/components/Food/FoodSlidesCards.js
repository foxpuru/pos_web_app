import CustomFoodCard from "@/components/CustomFoodCard"
import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import FoodCard from "../FoodCard"

function FoodSlicesCard({ foodItems }) {
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
      p={{ lg: "22px", xs: "18px" }}
    >
      <Box display="flex" flexWrap="wrap" gap={{ lg: "22px", xs: "18px" }}>
        {foodItems?.food?.slides?.map((item) => (
          <FoodCard food={item} key={item.id} />
        ))}
      </Box>
    </Box>
  )
}

export default FoodSlicesCard
