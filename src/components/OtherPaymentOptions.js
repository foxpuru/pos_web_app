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
  width: { lg: 450, xs: 350 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
}

export default function OtherPaymentOptions({
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
                lg: "14px",
                xs: "12px",
                letterSpacing: "0.5px",
                fontWeight: "600",
              },
            }}
          >
            Select Other Payment Option
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
                textTransform: "capitalize",
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
              Done
            </Button>
            <Image
              onClick={handleClose}
              src={ClocePopup.src}
              alt="close popup"
              sx={{ width: { lg: "30px", xs: "26px" }, cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Box p={{ lg: "12px", xs: "8px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src={BankImg.src}
              alt="bank"
              sx={{ width: { lg: "36px", xs: "24px" } }}
            />
            <Box
              pl={{ lg: "16px", xs: "12px" }}
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: {
                    lg: "14px",
                    xs: "12px",
                    letterSpacing: "0.5px",
                    fontWeight: "400",
                  },
                }}
              >
                Bank Transfer
                {/* <Typography component={"span"}>.</Typography> */}
              </Typography>
              <Checkbox
                icon={<UncheckedBoxIcon />}
                checkedIcon={<CheckedBoxIcon />}
                sx={{ width: "42px" }}
              />
            </Box>
          </Box>
          <Divider sx={{ borderBottomWidth: "2px", borderColor: "#EEF5F6" }} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src={MobileImg.src}
              alt="bank"
              sx={{ width: { lg: "36px", xs: "24px" } }}
            />
            <Box
              pl={{ lg: "16px", xs: "12px" }}
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: {
                    lg: "14px",
                    xs: "12px",
                    letterSpacing: "0.5px",
                    fontWeight: "400",
                  },
                }}
              >
                Mobile Wallet
                {/* <Typography component={"span"}>.</Typography> */}
              </Typography>
              <Checkbox
                icon={<UncheckedBoxIcon />}
                checkedIcon={<CheckedBoxIcon />}
                sx={{ width: "42px" }}
              />
            </Box>
          </Box>
          <Divider sx={{ borderBottomWidth: "2px", borderColor: "#EEF5F6" }} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src={DebitImg.src}
              alt="bank"
              sx={{ width: { lg: "36px", xs: "24px" } }}
            />
            <Box
              pl={{ lg: "16px", xs: "12px" }}
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: {
                    lg: "14px",
                    xs: "12px",
                    letterSpacing: "0.5px",
                    fontWeight: "400",
                  },
                }}
              >
                Direct Debit
                {/* <Typography component={"span"}>.</Typography> */}
              </Typography>
              <Checkbox
                icon={<UncheckedBoxIcon />}
                checkedIcon={<CheckedBoxIcon />}
                sx={{ width: "42px" }}
              />
            </Box>
          </Box>
          <Divider sx={{ borderBottomWidth: "2px", borderColor: "#EEF5F6" }} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src={UpiImg.src}
              alt="bank"
              sx={{ width: { lg: "36px", xs: "24px" } }}
            />
            <Box
              pl={{ lg: "16px", xs: "12px" }}
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: {
                    lg: "14px",
                    xs: "12px",
                    letterSpacing: "0.5px",
                    fontWeight: "400",
                  },
                }}
              >
                UPI payments
                {/* <Typography component={"span"}>.</Typography> */}
              </Typography>
              <Checkbox
                icon={<UncheckedBoxIcon />}
                checkedIcon={<CheckedBoxIcon />}
                sx={{ width: "42px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
