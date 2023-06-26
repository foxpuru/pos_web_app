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
import Link from "next/link"
import { CustomButton } from "./custom-components"
import { useRouter } from "next/router"

export default function Footer({ custom }) {
  const [value, setValue] = React.useState(0)
  const router = useRouter()
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
      {custom ? (
        <Box sx={{ width: "100%", height: { lg: "60px", xs: "38px" } }}>
          <CustomButton
            styles={{
              backgroundColor: "#E57607",
              color: "#FFFFFF ",

              height: "100%",
              fontSize: { lg: "20px", xs: "12px" },
              fontWeight: "400",
              textTransform: "capitalize",
              borderRadius: "0px",

              "&:hover": {
                backgroundColor: "#E57607 !important",
              },
            }}
            label={"Done"}
            onClick={() => {
              delete router.query.foodType
              router.push(router)
            }}
          />
        </Box>
      ) : (
        <>
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
              // height: "60px",
              overflow: "auto",
              // gap: { lg: "40px", xs: "22px" },
              px: { lg: "20px", xs: "20px" },
              "& a:hover": { textDecoration: "none" },
            }}
          >
            {FoodData.map((food) => (
              <Link href={`/food?category=${food.path}`} key={food.category}>
                <FooterFoodCategory
                  key={food.category}
                  path={food.path}
                  title={food.category}
                />
              </Link>
            ))}
          </Box>
          {/* 
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
        </Box> */}
        </>
      )}
    </Grid>
  )
}
