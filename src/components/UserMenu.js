import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Box } from "@mui/material"

const menuItemStyle = {
  width: "200px",
  color: "#0090FF !important",
  fontSize: { lg: "14px !important", xs: "12px !important" },
  fontWeight: "400",
  py: "10px",
  letterSpacing: "0.6px",
}

export default function UserMenu({ open, anchorEl, handleClose }) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        "& .MuiMenu-paper": {
          boxShadow: "0px 0px 40px #00000029",
          borderRadius: "10px !important",
          top: { lg: "65px !important" },
          top: "15% !important",
          // left: "50% !important",
          transform: "translate(-50%, -50%) !important",
        },
      }}
    >
      <MenuItem
        onClick={handleClose}
        disabled
        sx={{
          ...menuItemStyle,
          borderBottom: "1px solid #00000029",
          color: "#B1B6B9",
          fontSize: { lg: "10px !important", xs: "8px !important" },
          letterSpacing: "0.4px",
        }}
      >
        MUSE POS
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        sx={{ ...menuItemStyle, borderBottom: "1px solid #00000029" }}
      >
        Clock Out
      </MenuItem>
      <MenuItem onClick={handleClose} sx={{ ...menuItemStyle }}>
        Switch User
      </MenuItem>
    </Menu>
  )
}
