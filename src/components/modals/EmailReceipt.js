import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import PrintReceiptGreenBigImg from "../../assets/images/ic_print_receipt_green_big.png"
import ClocePopup from "../../assets/images/ic_close_popup.png"

import { Image } from "../styled-components"

import { CancelButton, PrimaryButton } from "../CusttomButtons"
import { Form, Formik } from "formik"
import { FormikInput } from "../FormikInput"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 450, md: 400, xs: 330 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
}

export default function EmailRecipt({
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
        >
          <Box p={{ lg: "22px", md: "18px", xs: "12px" }} width="100%">
            <Box
              display="flex"
              alignItems="center"
              position="relative"
              justifyContent="center"
              width="100%"
              pb={{ lg: "22px", md: "18px", xs: "12px" }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: {
                    lg: "22px",
                    md: "20px",
                    xs: "18px",
                  },
                  letterSpacing: "0.6px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                eamil receipt
              </Typography>
              <Image
                onClick={handleClose}
                src={ClocePopup.src}
                alt="close popup"
                sx={{
                  width: { lg: "30px", xs: "26px" },
                  cursor: "pointer",
                  position: "absolute",
                  right: "0",
                  top: 0,
                }}
              />
            </Box>

            <Box width="100%">
              <Formik
                initialValues={{
                  email: "",
                }}

                // onSubmit={onSubmit}
              >
                <Form>
                  <FormikInput
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    sx={{
                      width: "100%",
                      border: "1px solid #D7DBDC",
                      borderRadius: "6px",
                      p: { lg: "10px", xs: "6px" },
                      color: "#A5ACAE",
                      letterSpacing: "0.5px",
                      fontWeight: "400",

                      "&::placeholder": {
                        textTransform: "uppercase",
                      },
                    }}
                  />
                </Form>
              </Formik>
            </Box>
          </Box>
          <Box
            p={{ lg: "22px", md: "18px", xs: "12px" }}
            width="100%"
            display="flex"
            borderTop="1px solid #D7DBDC"
          >
            <PrimaryButton
              label="send receipt"
              onClick={handleClose}
              sx={{
                backgroundColor: "#00B153",
                "&:hover": {
                  backgroundColor: "#00B153 !important",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
