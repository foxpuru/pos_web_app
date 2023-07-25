import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import SearchBigImg from "../assets/images/btn_search_big.png";
import TableBigImg from "../assets/images/btn_table_big.png";
import { Image } from "./styled-components";
import { Grid, Typography } from "@mui/material";
import FooterFoodCategory from "./FooterFoodCategory";
import { FoodData } from "@/data/food/foodData";
import Link from "next/link";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { PrimaryButton } from "./CusttomButtons";
import { getataFromProductCategoryStore } from "@/indexedDB/categoryStore";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const showTableManagement = useSelector((state) => state.settings.options);
  const [productCategories, setProductCategories] = React.useState([]);
  React.useEffect(() => {
    getataFromProductCategoryStore()
      .then((res) => {
        console.log("getProductCategories_res", res);
        if (res) {
          setProductCategories(res);
        }
      })
      .catch((err) => {});
  }, []);
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
      {["custom", "slides"].includes(router.query.foodType) ? (
        <PrimaryButton
          sx={{
            fontSize: { lg: "20px", xs: "16px" },
            textTransform: "capitalize",
            borderRadius: 0,
            height: { lg: "60px", xs: "38px" },
          }}
          label={"Done"}
          onClick={() => router.back()}
        />
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
            {productCategories.map((food) => (
              <Link href={`/food?category=${food._id}`} key={food._id}>
                <FooterFoodCategory
                  key={food._id}
                  path={food?._id}
                  title={food.name}
                />
              </Link>
            ))}
          </Box>
          {showTableManagement.tableManagement && (
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
          )}
        </>
      )}
    </Grid>
  );
}
