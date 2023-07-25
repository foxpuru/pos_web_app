import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import useModalState from "@/hooks/useModalState"
import SideBarDrawer from "./SideBar"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import { Image } from "./styled-components"
import { Button, useMediaQuery } from "@mui/material"

import BtnLeftMenuImg from "../assets/images/btn_left_menu.png"
import MuseposLogo from "../assets/images/musepos_logo_colored_nav.png"
import MuseLogo from "../assets/images/m_musepos logo.png"
import LogoutLogo from "../assets/images/btn_logout.png"
import RightMenuImg from "../assets/images/btn_right_menu.png"
import CheckNameModal from "./modals/ChecksNamePopup"
import BtnBackArrow from "../assets/images/btn_back_arrow.png"
import BtnInfoNav from "../assets/images/btn_info_nav.png"

import MenuModal from "./Menu"
import { useRouter } from "next/router"
import ExtraCharges from "./modals/AddExtraCharges"
import UserMenu from "./UserMenu"
import { Matches } from "@/hooks/useCustomQuery"
import { PrimaryButton } from "./CusttomButtons"

export default function Header({ isPaymentMethod, reports }) {
  const [age, setAge] = React.useState(10)

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  const imageMatches = useMediaQuery((theme) => theme.breakpoints.up("960"))

  const { isOpen, handleToggle, handleOpen, handleClose } = useModalState(false)

  const {
    isOpen: isOpenSidebar,
    handleToggle: handleToggleSidebar,
    handleOpen: handleOpenSidebar,
    handleClose: handleCloseSidebar,
  } = useModalState(false)

  const { anchorElMenu, openMenu, handleClickMenu, handleCloseMenu } =
    useModalState(false)

  const router = useRouter()

  const {
    anchorElMenu: anchorElUserMenu,
    openMenu: openUserMenu,
    handleClickMenu: handleClickUserMenu,
    handleCloseMenu: handleCloseUserMenu,
  } = useModalState()

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
            justifyContent: "space-between",
          }}
        >
          <Box
            px={{ lg: "22px", md: "18px", xs: "12px" }}
            width={{
              lg: "calc(100% - 350px)",
              md: "calc(100% - 300px)",
              xs: "calc(100% - 250px)",
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              // width: "70%",
              justifyContent: "space-between",
            }}
          >
            {!["custom", "slides"].includes(router.query.foodType) ? (
              <Image
                src={BtnLeftMenuImg.src}
                onClick={handleOpenSidebar}
                alt="btn left"
                sx={{
                  width: { lg: "38px", xs: "28px", cursor: "pointer" },
                }}
              />
            ) : (
              <Image
                src={BtnBackArrow.src}
                onClick={() => router.back()}
                alt="btn left"
                sx={{
                  width: { lg: "38px", xs: "28px", cursor: "pointer" },
                }}
              />
            )}

            {/* {!["custom", "slides"].includes(router.query.foodType) && (
                  <Box
                    // width="100%"
                    display="flex"
                    alignItems="center"
                    textAlign="center"
                    ml={{ lg: "22px", xs: "10px" }}
                    // position="relative"
                    sx={{
                      height: { lg: "38px", xs: "28px" },
                      px: { lg: "8px", xs: "4px" },
                      backgroundColor: "#EEF5F6",

                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      mx={{ lg: "12px", xs: "8px" }}
                      sx={{
                        color: "#000000",
                        fontSize: { lg: "18px", xs: "12px" },
                        fontWeight: "500",
                        textTransform: "none",
                        letterSpacing: "0.55px",
                      }}
                    >
                      Online Orders
                    </Typography>
                    <Button
                      sx={{
                        px: { lg: "9px", xs: "6px" },
                        height: { lg: "26px", xs: "20px" },
                        fontSize: { lg: "18px", xs: "12px" },
                        minWidth: 0,
                        fontWeight: "400",
                        backgroundColor: "#E57607",
                        color: "#FFFFFF",
                        borderRadius: "6px",
                        letterSpacing: "0px",
                      }}
                    >
                      8
                    </Button>
                  </Box>
                )} */}

            <Image
              // src={imageMatches ? MuseposLogo.src : MuseLogo.src}
              src={MuseposLogo.src}
              alt="musepos logo"
              sx={{ height: { lg: "28px", xs: "20px" }, cursor: "pointer" }}
              onClick={() => router.push("/food?category=chinese")}
            />
            <Box display="flex" alignItems="center">
              {!["custom", "slides"].includes(router.query.foodType) ? (
                <>
                  <Typography
                    mr={{ ls: "22px", md: "18px", xs: "12px" }}
                    sx={{
                      textAlign: "right",
                      color: "#000000",
                      fontSize: { lg: "18px", xs: "14px" },
                      fontWeight: "500",
                      width: { lg: "180px", xs: "140px" },
                      letterSpacing: "0.65px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    John Pizza
                  </Typography>
                  <Image
                    src={LogoutLogo.src}
                    alt="logout logo"
                    sx={{
                      width: {
                        lg: "38px",
                        xs: "28px",
                        cursor: "pointer",
                      },
                    }}
                    onClick={handleClickUserMenu}
                  />
                </>
              ) : (
                <Image
                  src={BtnInfoNav.src}
                  alt="negatvie modifier icon"
                  sx={{
                    width: {
                      lg: "38px",
                      xs: "28px",
                      cursor: "pointer",
                    },
                  }}
                  onClick={handleClickUserMenu}
                />
              )}
            </Box>
            {/* {reports && (
              <Box display="flex" alignItems="center">
                <Image
                  src={BtnLeftMenuImg.src}
                  onClick={handleOpenSidebar}
                  alt="btn left"
                  sx={{
                    width: { lg: "38px", xs: "28px", cursor: "pointer" },
                  }}
                />
              </Box>
            )}
            {isPaymentMethod && (
              <Box
                width={{ lg: "370px", xs: "230px" }}
                // display="flex"

                alignItems="center"
                textAlign="center"
              >
                <Typography
                  // mx={{ lg: "12px", xs: "8px" }}
                  sx={{
                    color: reports ? "#000" : "#CD751E",
                    fontSize: { lg: "20px", xs: "14px" },
                    fontWeight: "400",
                    textTransform: "none",
                    letterSpacing: "0.75px",
                  }}
                >
                  {reports ? "Reports" : "CHECK TOTAL"}
                </Typography>
              </Box>
            )} */}
          </Box>

          <Box
            // width={{ lg: "30%", xs: "40%" }}
            // width={{ md: "370px", xs: "40%" }}
            width={{ lg: "350px", md: "300px", xs: "250px" }}
            // minWidth={{ lg: "350px", md: "300px", xs: "250px" }}
            // width={Matches ? "370px" : "40%"}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={{ lg: "22px", md: "18px", xs: "12px" }}
          >
            <Box>
              <FormControl sx={{ m: 0, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  // defaultOpen
                  // displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    padding: "0 !important",
                    margin: "0 !important",
                    borderRadius: "10px",
                    color: "#E57607",
                    fontSize: { lg: "14px", xs: "12px" },
                    fontWeight: "400",
                    letterSpacing: "0.45px",
                    width: { lg: "130px", xs: "110px" },

                    ".MuiSelect-select": {
                      padding: { lg: "6px", xs: "4px" },
                      px: { lg: "18px", xs: "8px" },
                    },

                    fieldset: {
                      border: "1px solid #F3F3F3",
                      width: { lg: "130px", xs: "110px" },
                    },
                  }}
                >
                  <MenuItem value={10}>Take Away</MenuItem>
                  <MenuItem value={20}>Dine-In</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <PrimaryButton
              sx={{
                height: { lg: "32.13px", xs: "25.25px" },
                minWidth: { lg: "100px", xs: "80px" },
                width: { lg: "100px", xs: "80px" },

                border: "1px solid #F3F3F3",
                backgroundColor: "transparent",
                color: "#000000",
                fontWeight: "5500",
                textTransform: "uppercase",
                letterSpacing: "0.4px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}
              onClick={handleOpen}
              label="Guest-68"
            />
            {/* <PrimaryButton
                sx={{
                  height: { lg: "32.13px", xs: "25.25px" },
                  minWidth: { lg: "50px", xs: "40px" },
                  width: { lg: "50px", xs: "40px" },
                  backgroundColor: "#00B153",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  "&:hover": {
                    backgroundColor: "#00B153 !important",
                  },
                }}
                label="save"
              /> */}
            <Image
              onClick={handleClickMenu}
              src={RightMenuImg.src}
              alt="btn left"
              sx={{ width: { lg: "28px", xs: "22px" } }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <CheckNameModal
        isOpen={isOpen}
        handleToggle={handleToggle}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <MenuModal
        open={openMenu}
        handleClick={handleClickMenu}
        anchorEl={anchorElMenu}
        handleClose={handleCloseMenu}
      />
      <SideBarDrawer
        isOpen={isOpenSidebar}
        handleToggle={handleToggleSidebar}
        handleOpen={handleOpenSidebar}
        handleClose={handleCloseSidebar}
      />
      <UserMenu
        open={openUserMenu}
        handleClick={handleClickUserMenu}
        anchorEl={anchorElUserMenu}
        handleClose={handleCloseUserMenu}
      />
    </>
  )
}
