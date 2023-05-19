import FoodCard from "@/components/FoodCard"
import { FoodData } from "@/data/food/foodData"
import FoodLayout from "@/layouts/FoodLayout"
import { Box } from "@mui/material"
import React from "react"

function ChineseFood() {
  return (
    <Box p={"22px"}>
      <FoodCard />
    </Box>
  )
}

ChineseFood.getLAyout = (page) => <FoodLayout>{page}</FoodLayout>
export default ChineseFood
