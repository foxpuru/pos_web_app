import * as React from "react"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { ListItemIcon, ListItemText } from "@mui/material"
import { ContentCut } from "@mui/icons-material"
import {
  AddCustomerProductsIcon,
  AddDiscountBlackIcon,
  AddGiftCardIcon,
  AddNoteToChekcBlackIcon,
  AddServiceChargeBlackIcon,
  DiscardCheckBlackIcon,
  OpenedChecksBlackIcon,
  PrintCheckBlackIcon,
} from "./icons"
// import { OpenedChecksBlackIcon } from "./icons"

const options = [
  {
    label: "Save Checks",
    icon: <OpenedChecksBlackIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <AddCustomerProductsIcon />,
  },
  {
    label: "Add Note to Check",
    icon: <AddNoteToChekcBlackIcon />,
  },
  {
    label: "Add Discount",
    icon: <AddDiscountBlackIcon />,
  },
  {
    label: "Add Extra Charge",
    icon: <AddServiceChargeBlackIcon />,
  },
  {
    label: "Add Gift Card",
    icon: <AddGiftCardIcon />,
  },
  {
    label: "Print Check",
    icon: <PrintCheckBlackIcon />,
  },
  {
    label: "Discard Check",
    icon: <DiscardCheckBlackIcon />,
  },
]

const ITEM_HEIGHT = 58

export default function MenuModal({
  open,
  handleClick,
  anchorEl,
  handleClose,
}) {
  return (
    <Menu
      id="long-menu"
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      // sx={{ width: { lg: "30ch !important", xs: "30ch" } }}
      PaperProps={{
        style: {
          // maxHeight: ITEM_HEIGHT * 4.5,
          width: "30ch",
        },
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.label}
          // selected={option === "Pyxis"}
          onClick={handleClose}
          sx={{ borderBottom: "2px solid #D7DBDC" }}
        >
          <ListItemIcon
            sx={{
              minWidth: { lg: "30px !important", xs: "18px !important" },
              width: { lg: "30px !important", xs: "18px !important" },
            }}
          >
            {option.icon}
          </ListItemIcon>
          <ListItemText
            sx={{
              "& span": {
                ml: { lg: "8px", xs: "6px" },
                color: "#000000",
                fontFamily: "Work Sans",
                fontSize: { lg: "16px", xs: "12px" },
                fontWeight: "500",
                letterSpacing: "0.55px",
              },
            }}
          >
            {option.label}
          </ListItemText>
        </MenuItem>
      ))}
    </Menu>
  )
}
