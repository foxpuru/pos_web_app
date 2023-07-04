import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"

import Typography from "@mui/material/Typography"
import useModalState from "@/hooks/useModalState"
import SideBarDrawer from "./SideBar"

import { Image } from "./styled-components"
import { useMediaQuery } from "@mui/material"

import MuseposLogo from "../assets/images/musepos_logo_colored_nav.png"

import BtnLeftMenuImg from "../assets/images/btn_left_menu.png"

import { useRouter } from "next/router"

export default function CustomHeader() {
  const {
    isOpen: isOpenSidebar,
    handleToggle: handleToggleSidebar,
    handleOpen: handleOpenSidebar,
    handleClose: handleCloseSidebar,
  } = useModalState(false)

  const router = useRouter()
  console.log("transactions router path", router.pathname)
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          borderRadius: "0 !important",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { lg: "64px", xs: "60px" },
            p: "0 !important",
            boxShadow: "0px !important",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              width={{ lg: "370px", xs: "230px" }}
              px={{ lg: "22px", xs: "12px" }}
            >
              <Image
                src={BtnLeftMenuImg.src}
                onClick={handleOpenSidebar}
                alt="btn left"
                sx={{
                  width: { lg: "38px", xs: "28px", cursor: "pointer" },
                }}
              />

              <Typography
                sx={{
                  margin: "auto",
                  color: "#CD751E",
                  fontSize: { lg: "20px", xs: "14px" },
                  fontWeight: "400",
                  textTransform: "none",
                  letterSpacing: "0.75px",
                }}
              >
                {router.pathname === "/transactions"
                  ? "Transactions"
                  : "CHECK TOTAL"}
              </Typography>
            </Box>

            <Box
              width={{ lg: "calc(100% - 370px)", xs: "calc(100% - 230px)" }}
              px={{ lg: "22px", xs: "12px" }}
              display="flex"
              justifyContent="center"
            >
              <Image
                src={MuseposLogo.src}
                // src={}
                alt="musepos logo"
                sx={{ height: { lg: "28px", xs: "20px" }, cursor: "pointer" }}
                onClick={() => router.push("/food?category=chinese")}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <SideBarDrawer
        isOpen={isOpenSidebar}
        handleToggle={handleToggleSidebar}
        handleOpen={handleOpenSidebar}
        handleClose={handleCloseSidebar}
      />
    </>
  )
}
