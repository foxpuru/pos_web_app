import BillingItemList from "@/components/BillingItemList"
import Header from "@/components/Header"
import SideBarDrawer from "@/components/SideBar"
import { Image } from "@/components/styled-components"
import UrlTitle from "@/components/Title"
import useModalState from "@/hooks/useModalState"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import React from "react"

import BtnLeftMenuImg from "../assets/images/btn_left_menu.png"

export default function SettingsLayout({ children }) {
  const {
    isOpen: isOpenSidebar,
    handleToggle: handleToggleSidebar,
    handleOpen: handleOpenSidebar,
    handleClose: handleCloseSidebar,
  } = useModalState(false)

  return (
    <>
      <UrlTitle />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          borderRadius: "0 !important",
        }}
      >
        <Box
          height={{ lg: "64px", xs: "48px" }}
          px={{ lg: "22px", xs: "16px" }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src={BtnLeftMenuImg.src}
            onClick={handleOpenSidebar}
            alt="btn left"
            sx={{
              width: { lg: "38px", xs: "28px", cursor: "pointer" },
            }}
          />
          <Typography color="black" fontWeight="500">
            Settings
          </Typography>
          <Button
            sx={{
              height: { lg: "32.13px", xs: "25.25px" },
              p: 0,
              width: { lg: "150px", xs: "120px" },

              backgroundColor: "#00B153",
              borderRadius: "10px",
              color: "#FFFFFF",
              fontSize: { lg: "18px", xs: "16px" },
              fontWeight: "400",

              "&:hover": {
                backgroundColor: "#00B153 !important",
              },
            }}
          >
            SAVE
          </Button>
        </Box>
      </AppBar>
      <Box display="flex" width="100%" alignItems="start">
        <Box
          width="100%"
          overflow="auto"
          height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
        >
          {children}
        </Box>
      </Box>

      <SideBarDrawer
        isOpen={isOpenSidebar}
        handleToggle={handleToggleSidebar}
        handleOpen={handleOpenSidebar}
        handleClose={handleCloseSidebar}
      />
    </>
  )
}
