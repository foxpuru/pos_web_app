import FoodBillingCard from "@/components/FoodBillingCard"
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
    <Box display="flex" width="100%" alignItems="start">
      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={{ lg: "12px", xs: "8px" }}
        p={{ lg: "22px", xs: "12px" }}
      >
        {foodItems?.foods.map((food) => (
          <FoodCard foods={food} />
        ))}
      </Box>
      <Box minWidth={{ lg: "388px", xs: "240px" }} bgcolor="#FFFFFF">
        <FoodBillingCard />
        <FoodBillingCard />
        <FoodBillingCard />
        <FoodBillingCard />
        <FoodBillingCard />
        <FoodBillingCard />
        <FoodBillingCard />
        <FoodBillingCard />
      </Box>
    </Box>
  )
}

ChineseFood.getLAyout = (page) => <FoodLayout>{page}</FoodLayout>
export default ChineseFood
