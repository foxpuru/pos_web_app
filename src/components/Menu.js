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
import CheckNotePopup from "./CheckNotePopup"
import ExtraCharges from "./ExtraCharges"
import useModalState from "@/hooks/useModalState"
import AddCustomProduct from "./modals/AddCustomProduct"
import AddDiscount from "./modals/AddDiscount"
// import { OpenedChecksBlackIcon } from "./icons"

const ITEM_HEIGHT = 58

export default function MenuModal({ open, anchorEl, handleClose }) {
  const {
    isOpen: isOpenCheckNote,
    handleToggle: handleToggleCheckNote,
    handleOpen: handleOpenCheckNote,
    handleClose: handleCloseCheckNote,
  } = useModalState(false)
  const {
    isOpen: isOpenExtraCharges,
    handleToggle: handleToggleExtraCharges,
    handleOpen: handleOpenExtraCharges,
    handleClose: handleCloseExtraCharges,
  } = useModalState(false)

  const {
    isOpen: isOpenAddCustomProduct,
    handleToggle: handleToggleAddCustomProduct,
    handleOpen: handleOpenAddCustomProduct,
    handleClose: handleCloseAddCustomProduct,
  } = useModalState(false)

  const {
    isOpen: isOpenAddDiscount,
    handleToggle: handleToggleAddDiscount,
    handleOpen: handleOpenAddDiscount,
    handleClose: handleCloseAddDiscount,
  } = useModalState(true)

  const options = [
    {
      label: "Save Checks",
      icon: <OpenedChecksBlackIcon />,
    },
    {
      label: "Add Custom Products",
      icon: <AddCustomerProductsIcon />,
      onClick: handleOpenAddCustomProduct,
    },
    {
      label: "Add Note to Check",
      icon: <AddNoteToChekcBlackIcon />,
      onClick: handleOpenCheckNote,
    },
    {
      label: "Add Discount",
      icon: <AddDiscountBlackIcon />,
      onClick: handleOpenAddDiscount,
    },
    {
      label: "Add Extra Charge",
      icon: <AddServiceChargeBlackIcon />,
      onClick: handleOpenExtraCharges,
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

  return (
    <Menu
      id="long-menu"
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
      anchorEl={anchorEl}
      open={open}
      // onClose={handleClose}
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
          onClick={option.onClick}
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
      <CheckNotePopup
        isOpen={isOpenCheckNote}
        handleToggle={handleToggleCheckNote}
        handleOpen={handleOpenCheckNote}
        handleClose={handleCloseCheckNote}
      />
      <ExtraCharges
        isOpen={isOpenExtraCharges}
        handleToggle={handleToggleExtraCharges}
        handleOpen={handleOpenExtraCharges}
        handleClose={handleCloseExtraCharges}
      />
      <AddCustomProduct
        isOpen={isOpenAddCustomProduct}
        handleToggle={handleToggleAddCustomProduct}
        handleOpen={handleOpenAddCustomProduct}
        handleClose={handleCloseAddCustomProduct}
      />
      <AddDiscount
        isOpen={isOpenAddDiscount}
        handleToggle={handleToggleAddDiscount}
        handleOpen={handleOpenAddDiscount}
        handleClose={handleCloseAddDiscount}
      />
    </Menu>
  )
}
