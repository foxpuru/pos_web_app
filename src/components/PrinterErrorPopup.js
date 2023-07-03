import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import ClocePopup from "../assets/images/ic_close_popup.png"
import AddCustomerImg from "../assets/images/ic_add_customer.png"
import PrintReceiptGreenBigImg from "../assets/images/ic_print_receipt_green_big.png"

import { Image } from "./styled-components/tableDetails"
import { FormikInput } from "./inputs"
import { Form, Formik } from "formik"
import { Avatar, Grid } from "@mui/material"
import { AddFoodToCartIcon, RemoveFoodToCartIcon } from "./icons"

import { CancelButton, PrimaryButton } from "./CusttomButtons"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 450, xs: 330 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
}

const btnStyle = {
  width: { lg: "100%", xs: "100%" },

  py: { lg: "6px", xs: "4px" },
  backgroundColor: "#5C6568",
  color: "#FFFFFF",
  fontSize: { lg: "14px", xs: "12px" },
  fontWeight: "400",
  letterSpacing: "0.45px",
  borderRadius: "8px",
  border: 0,
  "&:hover": {
    backgroundColor: "#5C6568 !important",
  },
}

export default function PrinterErrorPopup({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Box
          display="grid"
          alignItems="center"
          justifyItems="center"
          gap={{ lg: "14px", xs: "10px" }}
          px={{ lg: "20px", xs: "16px" }}
          py={{ lg: "20px", xs: "16px" }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: {
                lg: "22px",
                xs: "18px",
                letterSpacing: "1.5px",
                fontWeight: "400",
              },
            }}
          >
            PRINT
          </Typography>
          <Image
            onClick={handleToggle}
            src={PrintReceiptGreenBigImg.src}
            alt="print receipt green image"
            sx={{ width: { lg: "74px", xs: "48px" }, cursor: "pointer" }}
          />
          <Typography
            sx={{
              color: "#E57607",
              fontSize: {
                lg: "16px",
                xs: "12px",
              },
              letterSpacing: "0.55px",
              fontWeight: "500",
            }}
          >
            Printer is not connecting! Please try again.
          </Typography>
          <Typography
            sx={{
              color: "#A5ACAE",
              fontSize: {
                lg: "14px",
                xs: "10px",
              },
              letterSpacing: "0.5px",
              fontWeight: "400",
            }}
          >
            Printers can be discovered and removed from settings
          </Typography>
          <Box
            display="flex"
            width="100%"
            gap={{ lg: "20px", xs: "16px" }}
            // pt={{ lg: "16px", xs: "12px" }}
          >
            <CancelButton onClick={handleClose} />
            <CancelButton label="RETRY" onClick={handleClose} />
            <PrimaryButton label="DISCOVER" onClick={handleClose} />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
