import * as React from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LocationOnIcon from "@mui/icons-material/LocationOn"

import SearchBigImg from "../assets/images/btn_search_big.png"
import TableBigImg from "../assets/images/btn_table_big.png"
import { Image } from "./styled-components/tableDetails"
import { Grid, Typography } from "@mui/material"
import FooterFoodCategory from "./FooterFoodCategory"
import { FoodData } from "@/data/food/foodData"

export default function Footer() {
  const [value, setValue] = React.useState(0)

  return (
    <Grid
      display="flex"
      alignItems="center"
      bgcolor="white"
      width={{ lg: "calc(100% - 370px)", xs: "calc(100% - 230px)" }}
      boxShadow="0px -3px 6px #0000001A"
      sx={{
        position: "fixed",
        // overflow: "auto",
        bottom: 0,
        left: 0,
      }}
    >
      <Box
        // height="100%"
        display="flex"
        alignItems="center"
        p={{ lg: "10px 16px 10px 16px", xs: "6px" }}
        sx={{ backgroundColor: "#D7DBDC" }}
      >
        <Image
          src={SearchBigImg.src}
          alt="search"
          sx={{ width: { lg: "40px", xs: "26px" } }}
        />
      </Box>

      <Box
        sx={{
          width: {
            lg: "calc(100% - 72px - 72px)",
            xs: "calc(100% - 38px - 38px)",
          },
          alignItems: "center",
          // justifyContent: "center",
          display: "flex",
          overflow: "auto",
          // gap: { lg: "40px", xs: "22px" },
          px: { lg: "20px", xs: "20px" },
        }}
      >
        {FoodData.map((food) => (
          <FooterFoodCategory title={food.category}/>
        ))}
      </Box>

      <Box
        // height="100%"
        display="flex"
        alignItems="center"
        p={{ lg: "10px 16px 10px 16px", xs: "6px" }}
        sx={{ backgroundColor: "#D7DBDC" }}
      >
        <Image
          src={TableBigImg.src}
          alt="search"
          sx={{ width: { lg: "40px", xs: "26px" } }}
        />
      </Box>
    </Grid>
  )
}
