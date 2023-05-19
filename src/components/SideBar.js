import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { NewCheckIcon, OpenedChecksIcon } from "./icons"
import { SideBarItems } from "@/data/sideBarData"
import { useRouter } from "next/router"

import DasImg from "../assets/images/das.png"
import { Image } from "./styled-components/tableDetails"
import { Typography } from "@mui/material"

import sideBarLogoBottom from "../assets/images/musepos_logo_colored_sidemenu.png"

export default function SideBarDrawer() {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const router = useRouter()

  const list = (anchor) => (
    <Box
      height="100%"
      py={{ sm: "20px", xs: "12px" }}
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : { sm: 350, xs: 150 },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box height="calc(100% - 70px)">
        <Box display="flex" justifyContent="center">
          <Image
            src={DasImg.src}
            alt="das"
            sx={{
              width: { sm: "244px", xs: "123px" },
              height: { sm: "71px", xs: "36px" },
            }}
          />
        </Box>
        <List>
          {SideBarItems.map((item) => (
            <ListItem
              // display="flex"

              key={item}
              sx={{
                p: { sm: "12px", xs: "4px" },
                py: { sm: "12px", xs: "8px" },
                alignItems: { sm: "center", xs: "flex-start" },
                backgroundColor:
                  router.pathname === item.path ? "#EEF5F6" : undefined,
                cursor: "pointer",
                "&:hover": {
                  // backgroundColor: "#EEF5F6",
                },
              }}
              onClick={() => router.push(item.path)}
            >
              <ListItemIcon
                className={router.pathname === item.path ? "active" : undefined}
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
                className={router.pathname === item.path ? "active" : undefined}
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
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        // justifyContent="center"
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
  )

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
