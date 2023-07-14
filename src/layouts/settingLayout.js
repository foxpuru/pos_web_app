import BillingItemList from "@/components/BillingItemList"
import { PrimaryButton } from "@/components/CusttomButtons"
import Header from "@/components/Header"
import Loader from "@/components/Loader"
import SideBarDrawer from "@/components/SideBar"
import { Image } from "@/components/styled-components"
import UrlTitle from "@/components/Title"
import useModalState from "@/hooks/useModalState"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import BtnLeftMenuImg from "../assets/images/btn_left_menu.png"

export default function SettingsLayout({ tableEdit, children }) {
  const {
    isOpen: isOpenSidebar,
    handleToggle: handleToggleSidebar,
    handleOpen: handleOpenSidebar,
    handleClose: handleCloseSidebar,
  } = useModalState(false)

  const router = useRouter()
  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.isAuthenticated)
  console.log("pathName", router.pathname)

  useEffect(() => {
    if (deviceCodes.length > 11) {
      // router.push("/plan-renewal")
    } else {
      router.push("/")
    }
  }, [deviceCodes])

  return (
    <>
      {!deviceCodes && !passcode && <Loader />}

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
            position: "relative",
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
          <Typography
            color="black"
            fontWeight="600"
            letterSpacing="0.65"
            fontSize={{ lg: "20px", xs: "17px" }}
            textTransform="capitalize"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {router.pathname.split("/")[1].split("-").join(" ")}
          </Typography>
          {router.pathname === "/settings" && (
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
          )}
          {router.pathname === "/table-management" && (
            <PrimaryButton
              sx={{
                width: { lg: "200px", xs: "170px" },
                color: "#000000",
                backgroundColor: "#EEF5F6",
                fontSize: { lg: "18px", xs: "16px" },
                fontWeight: "400",

                "&:hover": {
                  backgroundColor: "#EEF5F6 !important",
                },
              }}
              label="EDIT"
            />
          )}
        </Box>
      </AppBar>
      <Box display="flex" width="100%" alignItems="start">
        <Box
          width="100%"
          overflow="auto"
          height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 48px)" }}
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
