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

export default function FoodCard({ foods, index }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minWidth: { lg: "160px", xs: "119px" },
        width: { lg: "160px", xs: "119px" },
        height: { lg: "160px", xs: "119px" },
        position: "relative",
      }}
    >
      <Card
        sx={{
          height: foods.isCutomizable
            ? { lg: "153px", xs: "116px" }
            : { lg: "160px", xs: "120px" },
          padding: { lg: "3px", xs: "2px" },
          display: "flex",
          position: "relative",
          border:
            foods.foodType == "veg"
              ? "3px solid #00B153"
              : foods.foodType == "non-veg"
              ? "3px solid #000000"
              : "3px solid #FF4141",
          // "3px solid #000000",
          borderRadius: "10px",
        }}
      >
        <Box borderRadius="10px" overflow="hidden">
          <CardMedia
            // sx={{ borderRadius: "10px" }}
            component="img"
            // sx={{ width: 131 }}
            image={`https://source.unsplash.com/featured/?category=${foods.foodType}`}
            alt="Live from space album cover"
          />
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.8)",
              // py: { lg: "6px", xs: "3px" },
              alignItems: "center",
              display: "grid",
              textAlign: "center",
              textAlign: "center",
              width: { lg: "calc(100% - 6px)", xs: "calc(100% - 4px)" },
              height: { lg: "38px", xs: "26px" },
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
              }}
            >
              {foods.name}
            </Typography>
          </Box>
        </Box>
      </Card>
      {foods.isCutomizable && (
        <Box
          position="absolute"
          sx={{
            py: { lg: "5px", xs: "3px" },
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "10px",
            width: { lg: "calc(100% - 16px)", xs: "calc(100% - 10px)" },
            border:
              foods.foodType == "veg"
                ? "3px solid #00B153"
                : foods.foodType == "non-veg"
                ? "3px solid #000000"
                : "3px solid #FF4141",
            zIndex: -1,
            bottom: "-2px",
          }}
        />
      )}
    </Box>
  )
}