import FoodCard from "@/components/FoodCard"
import FoodLayout from "@/layouts/FoodLayout"
import { Box } from "@mui/material"
import React from "react"

function ChineseFood() {
  return (
    <Box>
      <FoodCard />
    </Box>
  )
}

ChineseFood.getLAyout = (page) => <FoodLayout>{page}</FoodLayout>
export default ChineseFood
