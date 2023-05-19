import FoodCard from "@/components/FoodCard"
import { FoodData } from "@/data/food/foodData"
import FoodLayout from "@/layouts/FoodLayout"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

function ChineseFood() {
  const router = useRouter()
  const foodItems = FoodData.find(
    (food) => food.category?.toLowerCase() === router.query?.category
  )
  console.log(foodItems)
  return (
    <Box p={{ lg: "22px", xs: "12px" }}>
      <Box display="flex" gap={{ lg: "22px", xs: "12px" }}>
        {foodItems?.foods.map((food) => (
          <FoodCard foods={food} />
        ))}
      </Box>
    </Box>
  )
}

ChineseFood.getLAyout = (page) => <FoodLayout>{page}</FoodLayout>
export default ChineseFood
