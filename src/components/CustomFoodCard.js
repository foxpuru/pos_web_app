import * as React from "react"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import FoodLayout from "@/layouts/FoodLayout"
import { useDispatch } from "react-redux"
import { handleAddCustomizableFoodItem } from "@/redux/slices/cartSlice"

function CustomFoodCard({ section, food, type }) {
  const dispatch = useDispatch()

  const addCustomFoodToCart = (food) => {
    const customFoodOption = {
      type,
      label: section.label,
      price: section.price,
      id: section.id,
    }
    dispatch(
      handleAddCustomizableFoodItem({
        id: food.id,
        name: food.name,
        description: food.description,
        price: food.price,
        customFoodOption,
      })
    )
  }

  return (
    <Card
      onClick={() => addCustomFoodToCart(food)}
      sx={{
        height: { lg: "160px", xs: "120px" },
        width: { lg: "160px", xs: "120px" },
        cursor: "pointer",
        border: "2px solid #A5ACAE",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
          height: { lg: "calc(100% - 38px)", xs: "calc(100% - 26px)" },
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "13px", xs: "11px" },
            fontWeight: "400",
            color: "#000000",
          }}
        >
          {section.label}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#D7DBDC",
          alignItems: "center",
          display: "grid",
          textAlign: "center",
          textAlign: "center",
          width: "100%",
          height: { lg: "38px", xs: "26px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "12px", xs: "10px" },
            fontWeight: "500",
            color: "#000000",
          }}
        >
          {section.price}
        </Typography>
      </Box>
    </Card>
  )
}

CustomFoodCard.getLayout = (page) => <FoodLayout>{page}</FoodLayout>
export default CustomFoodCard
