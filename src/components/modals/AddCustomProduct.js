import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import ClocePopup from "@/assets/images/ic_close_popup.png"
import AddCustomerImg from "@/assets/images/ic_add_customer.png"
import PrintReceiptGreenBigImg from "@/assets/images/ic_print_receipt_green_big.png"
import BankImg from "@/assets/images/ic_bank_transfer.png"
import MobileImg from "@/assets/images/ic_mobile_wallet.png"
import DebitImg from "@/assets/images/ic_direct_debit.png"
import UpiImg from "@/assets/images/ic_upi_payments.png"

import { Image } from "../styled-components/tableDetails"
import { FormikInput } from "../inputs"
import { Form, Formik } from "formik"
import { Avatar, Checkbox, Divider, Grid } from "@mui/material"
import {
  AddFoodToCartIcon,
  CheckedBoxIcon,
  RemoveFoodToCartIcon,
  UncheckedBoxIcon,
} from "../icons"
import CustomModal from "../Modal"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 650, xs: 450 },
  height: { lg: 450, xs: 350 },

  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
}

export default function AddCustomProduct({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  return (
    <CustomModal
      isOpen={isOpen}
      handleToggle={handleToggle}
      handleOpen={handleOpen}
      handleClose={handleClose}
      style={{ height: "auto" }}
      title="ADD CUSTOM PRODUCT"
      button="Done"
    >
      <Grid
        container
        item
        spacing={{ lg: 3, xs: 1 }}
        height="100%"
        alignItems="end"
        py={{ lg: "22px", xs: "22px" }}
        px={{ lg: "22px", xs: "12px" }}
      >
        <Grid item xs={6}>
          <Button
            sx={{
              height: { lg: "60px", xs: "40px" },
              color: "#FFFFFF",
              fontSize: { lg: "18px", xs: "14px" },
              fontWeight: "400",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              backgroundColor: "#E57607",
              borderRadius: "10px",

              "&:hover": {
                backgroundColor: "#E57607",
              },

              "& svg": {
                width: { lg: "32px", xs: "24px" },
                height: { lg: "32px", xs: "24px" },
              },
            }}
            fullWidth
            
          >
            RECEIPT
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              height: { lg: "60px", xs: "40px" },
              color: "#FFFFFF",
              fontSize: { lg: "19px", xs: "14px" },
              fontWeight: "400",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              backgroundColor: "#E57607",
              borderRadius: "10px",

              "&:hover": {
                backgroundColor: "#E57607",
              },

              "& svg": {
                width: { lg: "32px", xs: "24px" },
                height: { lg: "32px", xs: "24px" },
              },
            }}
            fullWidth
          >
            REFUND CHECK
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              height: { lg: "60px", xs: "40px" },
              color: "#FFFFFF",
              fontSize: { lg: "18px", xs: "14px" },
              fontWeight: "400",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              backgroundColor: "#E57607",
              borderRadius: "10px",

              "&:hover": {
                backgroundColor: "#E57607",
              },

              "& svg": {
                width: { lg: "32px", xs: "24px" },
                height: { lg: "32px", xs: "24px" },
              },
            }}
            fullWidth
            
          >
            RECEIPT
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              height: { lg: "60px", xs: "40px" },
              color: "#FFFFFF",
              fontSize: { lg: "19px", xs: "14px" },
              fontWeight: "400",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              backgroundColor: "#E57607",
              borderRadius: "10px",

              "&:hover": {
                backgroundColor: "#E57607",
              },

              "& svg": {
                width: { lg: "32px", xs: "24px" },
                height: { lg: "32px", xs: "24px" },
              },
            }}
            fullWidth
          >
            REFUND CHECK
          </Button>
        </Grid>
      </Grid>
    </CustomModal>
  )
}
