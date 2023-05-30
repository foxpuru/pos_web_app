import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import ClocePopup from "../assets/images/ic_close_popup.png"
import AddCustomerImg from "../assets/images/ic_add_customer.png"
import PrintReceiptGreenBigImg from "../assets/images/ic_print_receipt_green_big.png"
import BankImg from "../assets/images/ic_bank_transfer.png"
import MobileImg from "../assets/images/ic_mobile_wallet.png"
import DebitImg from "../assets/images/ic_direct_debit.png"
import UpiImg from "../assets/images/ic_upi_payments.png"

import { Image } from "./styled-components/tableDetails"
import { FormikInput } from "./inputs"
import { Form, Formik } from "formik"
import { Avatar, Checkbox, Divider, Grid } from "@mui/material"
import {
  AddFoodToCartIcon,
  CheckedBoxIcon,
  RemoveFoodToCartIcon,
  UncheckedBoxIcon,
} from "./icons"

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

export default function ExtraCharges({
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
          py={{ lg: "10px", xs: "12px" }}
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
                letterSpacing: "0.5px",
                fontWeight: "600",
              },
            }}
          >
            Extra Charges
            {/* <Typography component={"span"}>.</Typography> */}
          </Typography>
          <Box
            display="flex"
            gap={{ lg: "20px", xs: "14px" }}
            alignItem="center"
          >
            <Button
              // flexDirection="column"

              // gap={{ sm: "0px", xs: "12px" }}
              // justifyContent="center"

              sx={{
                height: { lg: "30px", xs: "24px" },
                width: { lg: "100px", xs: "76px" },
                py: { lg: "6px", xs: "4px" },
                backgroundColor: "#E57607",
                color: "#FFFFFF",
                fontSize: { sm: "12px", xs: "10px" },
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
              APPLY
            </Button>
            <Image
              onClick={handleClose}
              src={ClocePopup.src}
              alt="close popup"
              sx={{ width: { lg: "30px", xs: "26px" }, cursor: "pointer" }}
            />
          </Box>
        </Box>
        <Box height={"calc(100% - 58px)"} overflow="auto">
          <Box
            p={{ lg: "12px", xs: "8px" }}
            display="flex"
            width="100%"
            alignItems="center"
          >
            <Box display="flex" width="40%" alignItems="center">
              <Checkbox
                icon={<UncheckedBoxIcon />}
                checkedIcon={<CheckedBoxIcon />}
                sx={{ width: "42px" }}
              />
              <Typography
                sx={{
                  color: "#A5ACAE",
                  fontSize: {
                    lg: "16px",
                    xs: "14px",
                    fontWeight: "400",
                  },
                }}
              >
                Cake Cutting
              </Typography>
            </Box>
            <Box
              display="flex"
              width="60%"
              alignItems="center"
              justifyContent="space-between"
              gap={{ lg: "12px", xs: "8px" }}
            >
              <Box
                width="40%"
                p={{ lg: "12px", xs: "8px" }}
                alignItems="center"
                justifyContent="start"
                display="flex"
                bgcolor="#EEF5F6"
                borderRadius="8px"
                height={{ lg: "40px", xs: "28px" }}
              >
                <Typography
                  sx={{
                    color: "#A5ACAE",
                    fontSize: {
                      lg: "16px",
                      xs: "14px",
                      fontWeight: "400",
                      textAlign: "left",
                    },
                  }}
                >
                  ₹50.00
                </Typography>
              </Box>
              <Box
                width="60%"
                p={{ lg: "12px", xs: "8px" }}
                alignItems="center"
                justifyContent="start"
                display="flex"
                bgcolor="#EEF5F6"
                borderRadius="8px"
                height={{ lg: "40px", xs: "28px" }}
              >
                <Typography
                  sx={{
                    color: "#A5ACAE",
                    fontSize: {
                      lg: "16px",
                      xs: "14px",
                      fontWeight: "400",
                      textAlign: "left",
                    },
                  }}
                >
                  Select tax
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ borderBottomWidth: "2px", borderColor: "#EEF5F6" }} />
          <Box
            p={{ lg: "12px", xs: "8px" }}
            display="flex"
            width="100%"
            alignItems="center"
          >
            <Box display="flex" width="40%" alignItems="center">
              <Checkbox
                icon={<UncheckedBoxIcon />}
                checkedIcon={<CheckedBoxIcon />}
                sx={{ width: "42px" }}
              />
              <Typography
                sx={{
                  color: "#A5ACAE",
                  fontSize: {
                    lg: "16px",
                    xs: "14px",
                    fontWeight: "400",
                  },
                }}
              >
                Decoration
              </Typography>
            </Box>
            <Box
              display="flex"
              width="60%"
              alignItems="center"
              justifyContent="space-between"
              gap={{ lg: "12px", xs: "8px" }}
            >
              <Box
                width="40%"
                p={{ lg: "12px", xs: "8px" }}
                alignItems="center"
                justifyContent="start"
                display="flex"
                bgcolor="#EEF5F6"
                borderRadius="8px"
                height={{ lg: "40px", xs: "28px" }}
              >
                <Typography
                  sx={{
                    color: "#A5ACAE",
                    fontSize: {
                      lg: "16px",
                      xs: "14px",
                      fontWeight: "400",
                      textAlign: "left",
                    },
                  }}
                >
                  ₹70.00
                </Typography>
              </Box>
              <Box
                width="60%"
                p={{ lg: "12px", xs: "8px" }}
                alignItems="center"
                justifyContent="start"
                display="flex"
                bgcolor="#EEF5F6"
                borderRadius="8px"
                height={{ lg: "40px", xs: "28px" }}
              >
                <Typography
                  sx={{
                    color: "#A5ACAE",
                    fontSize: {
                      lg: "16px",
                      xs: "14px",
                      fontWeight: "400",
                      textAlign: "left",
                    },
                  }}
                >
                  Select tax
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ borderBottomWidth: "2px", borderColor: "#EEF5F6" }} />
        </Box>
      </Box>
    </Modal>
  )
}
