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

import { Image } from "./styled-components/tableDetails"
import { Button, useMediaQuery } from "@mui/material"

import BtnLeftMenuImg from "../assets/images/btn_left_menu.png"
import MuseposLogo from "../assets/images/musepos_logo_colored_nav.png"
import MuseLogo from "../assets/images/m_musepos logo.png"
import LogoutLogo from "../assets/images/btn_logout.png"
import RightMenuImg from "../assets/images/btn_right_menu.png"
import CheckNameModal from "./ChecksNamePopup"
import BtnBackArrow from "../assets/images/btn_back_arrow.png"

import MenuModal from "./Menu"
import { useRouter } from "next/router"
import ExtraCharges from "./ExtraCharges"
import UserMenu from "./UserMenu"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

export default function Header({ isPaymentMethod }) {
  const [age, setAge] = React.useState(10)

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  const imageMatches = useMediaQuery((theme) => theme.breakpoints.up("lg"))

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
            display: { lg: undefined, xs: "flex" },
            minHeight: { lg: "64px", xs: "60px" },
            p: "0 !important",
            boxShadow: "0px !important",
            width: { lg: undefined, xs: "100%" },
            justifyContent: "space-between",
          }}
        >
          <Box
            // py={{ lg: "10px", xs: "7px" }}
            px={{ lg: "22px", xs: "12px" }}
            width={{
              lg: isPaymentMethod ? "100%" : "calc(100% - 370px)",
              xs: isPaymentMethod ? "100%" : "60%",
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              // width: "70%",
              justifyContent: "space-between",
            }}
          >
            {!isPaymentMethod && (
              <Box display="flex" alignItems="center">
                <Image
                  src={BtnLeftMenuImg.src}
                  onClick={handleOpenSidebar}
                  alt="btn left"
                  sx={{
                    width: { lg: "38px", xs: "28px", cursor: "pointer" },
                  }}
                />
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
                      backgroundColor: "#FF4141",
                      color: "#FFFFFF",
                      borderRadius: "6px",
                      letterSpacing: "0px",
                    }}
                  >
                    8
                  </Button>
                </Box>
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
                    color: "#CD751E",
                    fontSize: { lg: "20px", xs: "14px" },
                    fontWeight: "400",
                    textTransform: "none",
                    letterSpacing: "0.75px",
                  }}
                >
                  CHECK TOTAL
                </Typography>
              </Box>
            )}

            <Box
              width={{ lg: "calc(100% - 370px)", xs: "calc(100% - 230px)" }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {isPaymentMethod && (
                <Image
                  src={BtnBackArrow.src}
                  onClick={() => router.push("/food?category=chinese")}
                  // src={}

                  alt="musepos logo"
                  sx={{
                    height: { lg: "34px", xs: "24px" },
                    cursor: "pointer",
                  }}
                />
              )}
              <Box
                width={isPaymentMethod && "100%"}
                display="flex"
                justifyContent="center"
              >
                <Image
                  src={imageMatches ? MuseposLogo.src : MuseLogo.src}
                  // src={}
                  alt="musepos logo"
                  sx={{ height: { lg: "28px", xs: "20px" }, cursor: "pointer" }}
                  onClick={() => router.push("/food?category=chinese")}
                />
              </Box>

              <Box
                display={isPaymentMethod ? "none" : "flex"}
                alignItems="center"
              >
                <Typography
                  mr={{ ls: "22px", xs: "12px" }}
                  sx={{
                    textAlign: "right",
                    color: "#000000",
                    fontSize: { lg: "18px", xs: "14px" },
                    fontWeight: "500",
                    letterSpacing: "0.65px",
                  }}
                >
                  John Doe
                </Typography>
                <Image
                  src={LogoutLogo.src}
                  alt="logout logo"
                  sx={{
                    width: { lg: "38px", xs: "28px", cursor: "pointer" },
                  }}
                  onClick={handleClickUserMenu}
                />
              </Box>
            </Box>
          </Box>
          {!isPaymentMethod && (
            <Box
              // width={{ lg: "30%", xs: "40%" }}
              width={{ lg: "370px", xs: "40%" }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              px={{ lg: "22px", xs: "0px" }}
              pr={{ lg: "22px", xs: "10px" }}
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

                      ".MuiSelect-select": {
                        padding: { lg: "6px", xs: "4px" },
                        px: { lg: "18px", xs: "14px" },
                      },

                      fieldset: {
                        border: "1px solid #F3F3F3",
                      },
                    }}
                  >
                    <MenuItem value={10}>Take Away</MenuItem>
                    <MenuItem value={20}>Dine-In</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button
                sx={{
                  height: { lg: "32.13px", xs: "25.25px" },
                  minWidth: { lg: "100px", xs: "80px" },
                  justifyContent: "left",
                  p: 0,
                  px: { lg: "8px", xs: "4px" },
                  textAlign: "left",
                  // pr: { lg: "20px", xs: "4px" },
                  border: "1px solid #F3F3F3",
                  // backgroundColor: "#EEF5F6",
                  borderRadius: "10px",
                  color: "#000000",
                  fontSize: { lg: "12px", xs: "9px" },
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  "&:hover": {
                    backgroundColor: "transparent !important",
                  },
                }}
                onClick={handleOpen}
              >
                GUEST-68
              </Button>
              <Button
                sx={{
                  height: { lg: "32.13px", xs: "25.25px" },
                  p: 0,
                  minWidth: { lg: "50px", xs: "40px" },
                  // px: { lg: "8px", xs: "4px" },
                  border: "1px solid #F3F3F3",
                  backgroundColor: "#00B153",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontSize: { lg: "12px", xs: "9px" },
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  "&:hover": {
                    backgroundColor: "#00B153 !important",
                  },
                }}
              >
                SAVE
              </Button>
              <Image
                onClick={handleClickMenu}
                src={RightMenuImg.src}
                alt="btn left"
                sx={{ width: { lg: "28px", xs: "22px" } }}
              />
            </Box>
          )}

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
        </Toolbar>
        {/* <SideBarDrawer /> */}
      </AppBar>

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
