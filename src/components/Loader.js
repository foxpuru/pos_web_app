import React from "react"
import { Image } from "./styled-components"

import loderGif from "../assets/muse_pos_m_icon_animation2.gif"
import { Box } from "@mui/material"
import BlankLayout from "@/layouts/BlankLayout"

function Loader() {
  return (
    <Box
      position="fixed"
      zIndex="100"
      top="0"
      bottom="0"
      left="0"
      right="0"
      // height="100vh"
      // width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#EEF5F6"
    >
      <Image
        src={loderGif.src}
        alt="loader gif"
        sx={{ width: { lg: "300px", xs: "240px" } }}
      />
    </Box>
  )
}

Loader.getLayout = (page) => <BlankLayout>{page}</BlankLayout>
export default Loader
