import * as React from "react"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { ListItemIcon, ListItemText } from "@mui/material"
import { ContentCut } from "@mui/icons-material"
import { AddCustomerProductsIcon, AddDiscountBlackIcon, AddNoteToChekcBlackIcon, OpenedChecksBlackIcon } from "./icons"
// import { OpenedChecksBlackIcon } from "./icons"

const options = [
  {
    label: "Save Checks",
    icon: <AddCustomerProductsIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <OpenedChecksBlackIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <AddNoteToChekcBlackIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <AddDiscountBlackIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <OpenedChecksBlackIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <OpenedChecksBlackIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <OpenedChecksBlackIcon />,
  },
  {
    label: "Add Custom Products",
    icon: <OpenedChecksBlackIcon />,
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
          <ListItemText sx={{ ml: { lg: "8px", xs: "6px" } }}>
            {option.label}
          </ListItemText>
        </MenuItem>
      ))}
    </Menu>
  )
}
