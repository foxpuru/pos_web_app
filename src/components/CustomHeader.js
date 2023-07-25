import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import useModalState from "@/hooks/useModalState";
import SideBarDrawer from "./SideBar";

import { Image } from "./styled-components";
import { useMediaQuery } from "@mui/material";

import BtnBackArrow from "../assets/images/btn_back_arrow.png";
import MuseposLogo from "../assets/images/musepos_logo_colored_nav.png";

import BtnLeftMenuImg from "../assets/images/btn_left_menu.png";

import { useRouter } from "next/router";
import { PrimaryButton } from "./CusttomButtons";

export default function CustomHeader({
  paymentMethod,
  reports,
  blankHeader,
  header,
}) {
  const {
    isOpen: isOpenSidebar,
    handleToggle: handleToggleSidebar,
    handleOpen: handleOpenSidebar,
    handleClose: handleCloseSidebar,
  } = useModalState(false);

  const router = useRouter();
  console.log("transactions router path", router.pathname);
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
          {blankHeader ? (
            <Box
              // height={{ lg: "64px", xs: "60px" }}
              width="100%"
              px={{ lg: "22px", md: "18px", xs: "12px" }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
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
                fontWeight="500"
                letterSpacing="0.65"
                fontSize={{ lg: "20px", xs: "17px" }}
                textTransform="capitalize"
                sx={{
                  margin: "auto",
                }}
              >
                {header.label}
              </Typography>
              {router.pathname === "/settings" && (
                <PrimaryButton
                  sx={{
                    height: { lg: "32.13px", xs: "25.25px" },
                    p: 0,
                    width: { lg: "130px", xs: "110px" },

                    backgroundColor: "#00B153",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: { lg: "18px", xs: "16px" },
                    fontWeight: "400",

                    "&:hover": {
                      backgroundColor: "#00B153 !important",
                    },
                  }}
                  label="SAVE"
                />
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
          ) : (
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
                width={{ lg: "350px", md: "300px", xs: "250px" }}
                px={{ lg: "22px", md: "18px", xs: "12px" }}
              >
                {!paymentMethod && (
                  <Image
                    src={BtnLeftMenuImg.src}
                    onClick={handleOpenSidebar}
                    alt="btn left"
                    sx={{
                      width: { lg: "38px", xs: "28px", cursor: "pointer" },
                    }}
                  />
                )}
                <Typography
                  sx={{
                    margin: "auto",
                    color: "#CD751E",
                    fontSize: { lg: "20px", xs: "14px" },
                    fontWeight: "400",
                    textTransform: "capitalize",
                    letterSpacing: "0.75px",
                  }}
                >
                  {header.label}
                </Typography>
              </Box>

              <Box
                width={{
                  lg: "calc(100% - 350px)",
                  md: "calc(100% - 300px)",
                  xs: "calc(100% - 250px)",
                }}
                px={{ lg: "22px", md: "18px", xs: "12px" }}
                display="flex"
                justifyContent="center"
                position="relative"
              >
                {paymentMethod && (
                  <Image
                    src={BtnBackArrow.src}
                    onClick={() => router.back()}
                    alt="btn left"
                    sx={{
                      width: { lg: "38px", xs: "28px", cursor: "pointer" },
                      position: "absolute",
                      top: "50%",
                      left: { lg: "22px", xs: "12px" },
                      transform: "translateY(-50%)",
                    }}
                  />
                )}

                {reports ? (
                  <Box display="flex" alignItem="center">
                    <Typography
                      color="black"
                      fontWeight="500"
                      letterSpacing="0.65"
                      fontSize={{ lg: "20px", xs: "17px" }}
                      textTransform="capitalize"
                      sx={{
                        margin: "auto",
                      }}
                    >
                      {header.title}
                    </Typography>

                    <Typography
                      color="black"
                      fontWeight="400"
                      letterSpacing="0.65"
                      fontSize={{ lg: "18px", xs: "16px" }}
                      textTransform="capitalize"
                      sx={{
                        margin: "auto",
                        marginLeft: { lg: "8px", xs: "6px" },
                      }}
                    >
                      {header.description}
                    </Typography>
                  </Box>
                ) : (
                  <Image
                    src={MuseposLogo.src}
                    // src={}
                    alt="musepos logo"
                    sx={{
                      height: { lg: "28px", xs: "20px" },
                      cursor: "pointer",
                    }}
                    onClick={() => router.push("/food?category=chinese")}
                  />
                )}
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <SideBarDrawer
        isOpen={isOpenSidebar}
        handleToggle={handleToggleSidebar}
        handleOpen={handleOpenSidebar}
        handleClose={handleCloseSidebar}
      />
    </>
  );
}
