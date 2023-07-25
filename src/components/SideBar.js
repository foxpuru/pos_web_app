import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { LogoutIcon, NewCheckIcon, OpenedChecksIcon, ProIcon } from "./icons";
import { SideBarItems } from "@/data/sideBarData";
import { useRouter } from "next/router";

import DasImg from "../assets/images/das.png";
import { Image } from "./styled-components";
import { Typography } from "@mui/material";

import sideBarLogoBottom from "../assets/images/musepos_logo_colored_sidemenu.png";
import useModalState from "@/hooks/useModalState";
import LogoutConfirmation from "./modals/logoutConfirmation";
import Loader from "./Loader";
import { useSelector } from "react-redux";

export default function SideBarDrawer({
  isOpen,
  handleToggle,
  handleClose,
  handleOpen,
}) {
  const router = useRouter();
  // console.log("routtttt", router.pathname.startsWith("/reports"))

  // .splice(1, 0, "Table Management")

  const {
    isOpen: isOpenLogoutConfirmation,
    handleToggle: handleToggleLogoutConfirmation,
    handleOpen: handleOpenLogoutConfirmation,
    handleClose: handleCloseLogoutConfirmation,
  } = useModalState(false);

  const list = () => (
    <Box
      height="100%"
      // py={{ sm: "22px", xs: "18px" }}
      sx={{
        width: { lg: 400, xs: 300 },
      }}
      role="presentation"
      onClick={handleToggle}
    >
      <Box
        height="100%"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <Box>
          <Box
            display="flex"
            justifyContent="start"
            p={{ lg: "22px", xs: "18px" }}
          >
            {/* <Image
            src={DasImg.src}
            alt="das"
            sx={{
              width: { sm: "244px", xs: "123px" },
              height: { sm: "71px", xs: "36px" },
            }}
          /> */}
            <Typography
              color="#E57607"
              fontSize={{ lg: "28px", xs: "22px" }}
              fontWeight="500"
            >
              Joe Pizza
            </Typography>
          </Box>
          <List sx={{}}>
            {SideBarItems.map((item) => (
              <ListItem
                key={item}
                sx={{
                  p: { sm: "12px", xs: "4px" },
                  py: { sm: "12px", xs: "8px" },
                  alignItems: { sm: "center", xs: "flex-start" },
                  backgroundColor:
                    router.pathname === item.path ||
                    item.path.startsWith(`/${router.pathname.split("/")[1]}`)
                      ? "#EEF5F6"
                      : undefined,
                  cursor: "pointer",
                  "& :hover": {
                    // backgroundColor: "#000000",
                  },
                  "&:hover": {
                    backgroundColor:
                      router.pathname === item.path ||
                      item.path.startsWith(`/${router.pathname.split("/")[1]}`)
                        ? "#EEF5F6 !important"
                        : "#fff  !important",
                  },
                }}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon
                  className={
                    item.path.startsWith(router.pathname) ||
                    item.path.startsWith(`/${router.pathname.split("/")[1]}`)
                      ? "active"
                      : undefined
                  }
                  sx={{
                    minWidth: { sm: "50px", xs: "30px" },

                    svg: {
                      width: { sm: "38px", xs: "26px" },
                      height: { sm: "38px", xs: "26px" },
                    },

                    "&.active": {
                      color: "#E57607!important",
                      svg: {
                        fill: "#E57607!important",
                      },
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={
                    item.path.startsWith(router.pathname) ||
                    item.path.startsWith(`/${router.pathname.split("/")[1]}`)
                      ? "active"
                      : undefined
                  }
                  sx={{
                    m: { sm: "4px 0px 4px 0px", xs: "3px 0px 0px 0px" },
                    span: {
                      fontSize: { sm: "18px", xs: "14px" },
                      fontWeight: "400",
                      letterSpacing: "0.45px",
                    },
                    "&.active": {
                      color: "#E57607!important",
                      svg: {
                        fill: "#E57607!important",
                      },
                    },
                  }}
                  primary={item.label}
                />
                {item.pro && (
                  <ListItemIcon
                    className={
                      item.path.startsWith(router.pathname) ||
                      item.path.startsWith(`/${router.pathname.split("/")[1]}`)
                        ? "active"
                        : undefined
                    }
                    sx={{
                      minWidth: { sm: "50px", xs: "30px" },

                      svg: {
                        width: { sm: "28px", xs: "22px" },
                        height: { sm: "28px", xs: "22px" },
                      },

                      "&.active": {
                        color: "#EEF5F6!important",
                        svg: {
                          fill: "#EEF5F6!important",
                        },
                      },
                    }}
                  >
                    <ProIcon />
                  </ListItemIcon>
                )}
              </ListItem>
            ))}
            <ListItem
              sx={{
                p: { sm: "12px", xs: "4px" },
                py: { sm: "12px", xs: "8px" },
                alignItems: { sm: "center", xs: "flex-start" },

                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#ffffff !important",
                },
              }}
              onClick={handleOpenLogoutConfirmation}
              // onClick={() => router.push(item.path)}
            >
              <ListItemIcon
                // className={
                //   item.path.startsWith(router.pathname) ||
                //   item.path.startsWith(`/${router.pathname.split("/")[1]}`)
                //     ? "active"
                //     : undefined
                // }
                sx={{
                  minWidth: { sm: "50px", xs: "30px" },

                  svg: {
                    width: { sm: "38px", xs: "26px" },
                    height: { sm: "38px", xs: "26px" },
                  },

                  "&.active": {
                    color: "#E57607!important",
                    svg: {
                      fill: "#E57607!important",
                    },
                  },
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                // className={
                //   item.path.startsWith(router.pathname) ||
                //   item.path.startsWith(`/${router.pathname.split("/")[1]}`)
                //     ? "active"
                //     : undefined
                // }
                sx={{
                  m: { sm: "4px 0px 4px 0px", xs: "3px 0px 0px 0px" },
                  span: {
                    fontSize: { sm: "18px", xs: "14px" },
                    fontWeight: "400",
                    letterSpacing: "0.45px",
                  },
                  "&.active": {
                    color: "#E57607!important",
                    svg: {
                      fill: "#E57607!important",
                    },
                  },
                }}
                primary="Logout"
              />
            </ListItem>
          </List>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          p={{ lg: "22px", xs: "18px" }}
          textAlign="center"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: { lg: "16px", xs: "14px" },
              fontWeight: "400",
              marginBottom: { lg: "20px", xs: "14px" },
              color: "#5C6568",
              letterSpacing: "0.4px",
            }}
          >
            Version - 1.0
          </Typography>
          <Image
            src={sideBarLogoBottom.src}
            alt="musepos sidebar logo"
            sx={{
              width: { lg: "280px", xs: "200px" },
              height: { lg: "31px", xs: "22px" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );

  const deviceCodes = useSelector((state) => state.auth.deviceCode);

  const passcode = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {!deviceCodes && !passcode && <Loader />}
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={handleClose}
        sx={{ "& .MuiPaper-root": { borderRadius: "0" } }}
      >
        {list()}
      </Drawer>
      <LogoutConfirmation
        isOpen={isOpenLogoutConfirmation}
        handleToggle={handleToggleLogoutConfirmation}
        handleOpen={handleOpenLogoutConfirmation}
        handleClose={handleCloseLogoutConfirmation}
      />
    </>
  );
}
