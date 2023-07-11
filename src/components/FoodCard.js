import * as React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import SkipNextIcon from "@mui/icons-material/SkipNext"

import FoodFishImg from "../assets/images/food_fish.jpg"
import { useDispatch, useSelector } from "react-redux"
import {
  handleAddCustomizableFoodItem,
  handleAddToCart,
  handleUpdateCart,
} from "@/redux/slices/cartSlice"
import { useRouter } from "next/router"

export default function FoodCard({
  food,
  setCustomizeFoodItem,
  setSlidesItem,
}) {
  const theme = useTheme()
  const dispatch = useDispatch()
  const router = useRouter()

  const cartData = useSelector((state) => state.cart.items)
  console.log("cart data", cartData)
  // const existId = cartData.filter((item) => item.id === food.id)

  function isItemExist(itemId) {
    console.log("isItemExist", itemId)
    return cartData.map((item) => {
      item.id === itemId ? true : false
    })
  }

  console.log(
    "card data",
    cartData.map((item) => item.id)
  )

  const addToCart = (food) => {
    if (food.isCutomizable) {
      setCustomizeFoodItem({ food })
      router.query.foodType = "custom"
      router.push(router)

      const defaultVarient = food?.customizeFoodOptions?.find(
        (item) => item?.category?.toLowerCase() === "varient"
      )?.section[0]
      dispatch(
        handleAddCustomizableFoodItem({
          id: food.id,
          name: food.name,
          description: food.description,
          price: food.price,
          customFoodOption: defaultVarient,
          // customFoodOption: food,
        })
      )
    } else if (food.slides) {
      setSlidesItem({ food })
      router.query.foodType = "slides"
      router.push(router)
    } else {
      dispatch(
        handleAddToCart({
          name: food.name,
          description: food.description,
          id: food.id,
          price: food.price,
        })
      )
      isItemExist(food.id)
    }
  }
  return (
    <Box
      sx={{
        minWidth: { lg: "160px", xs: "119px" },
        width: { lg: "160px", xs: "119px" },
        height: { lg: "160px", xs: "119px" },
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => addToCart(food)}
    >
      {/* {JSON.stringify(cartData?.some((item) => item.id === food.id))} */}
      <Card
        sx={{
          height: food.slides
            ? { lg: "153px", xs: "116px" }
            : { lg: "160px", xs: "120px" },
          padding: { lg: "3px", xs: "2px" },
          display: "flex",
          position: "relative",
          // border: "2px solid #000000",
          // border: () =>
            // isItemExist(food.id) ? "4px solid #000000" : " 1px solid #000000",
          borderRadius: "10px",
        }}
      >
        <Box borderRadius="10px" overflow="hidden">
          <CardMedia
            // sx={{ borderRadius: "10px" }}
            component="img"
            // sx={{ width: 131 }}
            // image={`https://source.unsplash.com/featured/?category=food}`}
            image={food.image.src}
            alt="Live from space album cover"
          />
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.8)",
              px: { lg: "6px", xs: "3px" },
              alignItems: "center",
              display: "grid",
              textAlign: "center",
              textAlign: "center",
              width: { lg: "calc(100% - 6px)", xs: "calc(100% - 4px)" },
              height: { lg: "24px", xs: "20px" },
              position: "absolute",
              overflow: "hidden",
              bottom: { lg: "3px", xs: "2px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "13px", xs: "9px" },
                fontWeight: "500",
                color: "#000000",
                width: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {food.name}
            </Typography>
          </Box>
        </Box>
      </Card>
      {food.slides && (
        <Box
          position="absolute"
          sx={{
            py: { lg: "5px", xs: "3px" },
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "10px",
            width: { lg: "calc(100% - 16px)", xs: "calc(100% - 10px)" },
            border: "2px solid #000000",
            zIndex: -1,
            bottom: "-2px",
          }}
        />
      )}
    </Box>
  )
}
