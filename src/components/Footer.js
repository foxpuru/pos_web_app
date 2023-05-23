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
import { Grid } from "@mui/material"

export default function Footer() {
  const [value, setValue] = React.useState(0)

  return (
    <Grid
      display="flex"
      alignItems="center"
      bgcolor="white"
      width={{ lg: "calc(100% - 370px)", xs: "60%" }}
      boxShadow="0px -3px 6px #0000001A"
      sx={{
        height: "calc(100vh - 64px - 640px)",
        position: "absolute",
        // overflow: "show",
      }}
    >
      <Box
        height="100%"
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
        height="100%"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          sx={{
            display: "flex",
            height: "100%",
            gap: { lg: "40px", xs: "22px" },

            "& .MuiBottomNavigationAction-label": {
              fontSize: { lg: "16px", xs: "12px" },
              color: "#A5ACAE",
              fontWeight: "400",
              letterSpacing: "0.53px",
              textTransform: "uppercase",
            },

            "& .Mui-selected": {
              color: "#E57607",
              borderTop: "3px solid#E57607",
              //   borderRadius: "6px",
              fontWeight: "600",

              "& span": {
                fontSize: { lg: "16px", xs: "12px" },
                borderTop: "0",
              },
            },
          }}
        >
          <BottomNavigationAction label="CHINESE" />
          <BottomNavigationAction label="GUJARATI" />
          <BottomNavigationAction label="RICE & NOODLES" />
          <BottomNavigationAction label="DESSERTS" />
          <BottomNavigationAction label="BEVERAGES" />
        </BottomNavigation>

        <Box
          height="100%"
          display="flex"
          alignItems="center"
          p={{ lg: "10px 16px 10px 16px", xs: "6px" }}
          sx={{ backgroundColor: "#D7DBDC" }}
        >
          <Image
            src={TableBigImg.src}
            alt="table image"
            sx={{ width: { lg: "40px", xs: "26px" } }}
          />
        </Box>
      </Box>
    </Grid>
  )
}
