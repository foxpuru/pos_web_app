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
  width: { lg: 820, xs: 530 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
}

export default function GiftCard({
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
                lg: "14px",
                xs: "12px",
                letterSpacing: "0.5px",
                fontWeight: "600",
              },
            }}
          >
            Add new or manage existing gift card.
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
          gap={{ lg: "14px", xs: "10px" }}
          px={{ lg: "20px", xs: "16px" }}
          py={{ lg: "20px", xs: "16px" }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: {
                lg: "14px",
                xs: "12px",
              },
              letterSpacing: "0.5px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Add a new gift card to the sale, check the balance of an existing
            gift card, or reload an existing gift card.
          </Typography>
          <Formik
            initialValues={{
              giftCardNumber: "",
            }}

            // onSubmit={onSubmit}
          >
            <Form>
              <Typography
                mb={{ lg: "12px", xs: "8px" }}
                sx={{
                  color: "#000000",
                  fontSize: {
                    lg: "14px",
                    xs: "12px",
                  },
                  letterSpacing: "0.5px",
                  fontWeight: "400",
                  textAlign: "left",
                }}
              >
                Gift Card Number
              </Typography>
              <FormikInput
                type="text"
                name="giftCardNumber"
                placeholder="Enter gift card number"
                sx={{
                  border: "1px solid #707070",
                  borderRadius: "6px",
                  p: { lg: "10px", xs: "6px" },
                  color: "#A5ACAE",
                  letterSpacing: "0.5px",
                  fontWeight: "400",
                }}
              />
              <Typography
                mt={{ lg: "12px", xs: "8px" }}
                sx={{
                  color: "#000000",
                  fontSize: {
                    lg: "14px",
                    xs: "12px",
                  },
                  letterSpacing: "0.5px",
                  fontWeight: "400",
                  textAlign: "left",
                }}
              >
                Max characters: 64
              </Typography>
              <Box
                // display="flex"
                // width="100%"'
                align="end"
                pt={{ lg: "16px", xs: "12px" }}
              >
                <Button
                  // flexDirection="column"

                  // gap={{ sm: "0px", xs: "12px" }}
                  // justifyContent="center"

                  sx={{
                    width: { lg: "30%", xs: "30%" },
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
                  onClick={handleClose}
                >
                  FIND GIFT CARD
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </Modal>
  )
}
