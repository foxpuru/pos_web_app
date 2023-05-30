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
          px={{ lg: "20px", xs: "16px" }}
          py={{ lg: "10px", xs: "8px" }}
          sx={{
            boxShadow: "0px 0px 50px #00000029",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: {
                lg: "16px",
                xs: "14px",
                letterSpacing: "0.6px",
                fontWeight: "600",
              },
            }}
          >
            PRINT
            {/* <Typography component={"span"}>.</Typography> */}
          </Typography>
          <Image
            onClick={handleClose}
            src={ClocePopup.src}
            alt="close popup"
            sx={{ width: { lg: "30px", xs: "26px" }, cursor: "pointer" }}
          />
        </Box>

        <Box
          display="grid"
          justifyItems="center"
          gap={{ lg: "14px", xs: "10px" }}
          px={{ lg: "20px", xs: "16px" }}
          py={{ lg: "20px", xs: "16px" }}
        >
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
            pt={{ lg: "16px", xs: "12px" }}
          >
            <Button
              // flexDirection="column"
              alignItems="center"
              textAlign="center"
              // gap={{ sm: "0px", xs: "12px" }}
              // justifyContent="center"

              sx={{
                width: { lg: "100%", xs: "100%" },
                margin: "auto",
                py: { lg: "6px", xs: "4px" },
                backgroundColor: "#5C6568",
                color: "#FFFFFF",
                fontSize: { sm: "14px", xs: "12px" },
                fontWeight: "400",
                letterSpacing: "0.45px",

                borderRadius: "8px",

                "&:hover": {
                  backgroundColor: "#5C6568",
                },
              }}
              // disabled={otp.length == 12 ? false : true}
              // onClick={() =>
              //   otp.length == 12 ? Router.push("/") : undefined
              // }
            >
              RETRY
            </Button>
            <Button
              // flexDirection="column"
              alignItems="center"
              textAlign="center"
              // gap={{ sm: "0px", xs: "12px" }}
              // justifyContent="center"

              sx={{
                width: { lg: "100%", xs: "100%" },
                margin: "auto",
                py: { lg: "6px", xs: "4px" },
                backgroundColor: "#E57607",
                color: "#FFFFFF",
                fontSize: { sm: "14px", xs: "12px" },
                fontWeight: "400",
                letterSpacing: "0.45px",

                borderRadius: "8px",

                "&:hover": {
                  backgroundColor: "#E57607",
                },
              }}
              // disabled={otp.length == 12 ? false : true}
              // onClick={() =>
              //   otp.length == 12 ? Router.push("/") : undefined
              // }
              onClick={handleClose}
            >
              DISCOVER
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
