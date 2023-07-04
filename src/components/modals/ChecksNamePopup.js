import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import ClocePopup from "../../assets/images/ic_close_popup.png"
import AddCustomerImg from "../../assets/images/ic_add_customer.png"

import { Image } from "../styled-components"
import { FormikInput } from "../FormikInput"
import { Form, Formik } from "formik"
import { Avatar, Grid } from "@mui/material"
import { AddFoodToCartIcon, RemoveFoodToCartIcon } from "../icons"
import { PrimaryButton } from "../CusttomButtons"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 440, xs: 330 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
}

export default function CheckNameModal({
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
          py={{ lg: "14px", xs: "10px" }}
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
                letterSpacing: "0.45px",
                fontWeight: "500",
              },
            }}
          >
            #Restaurant-3
            {/* <Typography component={"span"}>.</Typography> */}
          </Typography>
          <Image
            onClick={handleToggle}
            src={ClocePopup.src}
            alt="close popup"
            sx={{ width: { lg: "30px", xs: "26px" }, cursor: "pointer" }}
          />
        </Box>

        <Formik
          initialValues={{
            guestName: "",
            noOfGuest: "",
          }}
          // onSubmit={onSubmit}
        >
          <Form>
            <Box
              display="grid"
              gap={{ lg: "14px", xs: "10px" }}
              px={{ lg: "20px", xs: "16px" }}
              py={{ lg: "14px", xs: "10px" }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: {
                      lg: "12px",
                      xs: "10px",
                      letterSpacing: "0.45px",
                      fontWeight: "500",
                    },
                  }}
                >
                  Guest Name
                  {/* <Typography component={"span"}>.</Typography> */}
                </Typography>
                <FormikInput
                  name="guestName"
                  type="text"
                  styles={{ width: { lg: "250px", xs: "200px" } }}
                  placeholder="Enter guest name"
                />
                <Image
                  src={AddCustomerImg.src}
                  alt="close popup"
                  sx={{ width: { lg: "30px", xs: "26px" }, cursor: "pointer" }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: {
                      lg: "12px",
                      xs: "10px",
                      letterSpacing: "0.45px",
                      fontWeight: "500",
                    },
                  }}
                >
                  No. of Guests
                  {/* <Typography component={"span"}>.</Typography> */}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={{ lg: "14px", xs: "10px" }}
                >
                  <RemoveFoodToCartIcon />
                  <FormikInput
                    name="noOfGuests"
                    type="text"
                    styles={{
                      backgroundColor: "#EEF5F6",
                      opactiy: "1",
                      borderRadius: "8px",
                      width: { lg: "48px", xs: "34px" },
                      height: { lg: "32px", xs: "24px" },
                      fontSize: { lg: "14px", xs: "12px" },
                      textAlign: "center",
                      fontWeight: "400",
                      letterSpacing: "0.6px",
                      color: "#000000",
                      opacity: 1,
                    }}
                    placeholder="1"
                  />

                  <AddFoodToCartIcon />
                </Box>
              </Box>
              <PrimaryButton
                sx={{
                  backgroundColor: "#A5ACAE",
                  "&:hover": {
                    backgroundColor: "#A5ACAE !important",
                  },
                }}
                // disabled={otp.length == 12 ? false : true}
                // onClick={() =>
                //   otp.length == 12 ? Router.push("/") : undefined
                // }
                label="update"
              />
            </Box>
          </Form>
        </Formik>
      </Box>
    </Modal>
  )
}
