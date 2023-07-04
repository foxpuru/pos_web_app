import * as React from "react"
import Box from "@mui/material/Box"

import CustomModal from "./CustomModal"
import LogoutImg from "@/assets/images/ic_confirm_logout.png"
import { Image } from "../styled-components"
import { Typography } from "@mui/material"

import { CancelButton, PrimaryButton } from "../CusttomButtons"

export default function LogoutConfirmation({
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
      defaultHeader={false}
      style={{ height: "auto", width: { lg: "430px", xs: "380px" } }}
    >
      <Box p={{ lg: "22px", xs: "18px" }} textAlign="center">
        <Box justifyContent="center" display="flex">
          <Image
            src={LogoutImg.src}
            alt="logout"
            sx={{ width: { lg: "70px", xs: "60px" } }}
          />
        </Box>
        <Typography
          mt={{ lg: "44px", xs: "36px" }}
          mb={{ lg: "22px", xs: "18px" }}
          color="#E57607"
          fontSize={{ lg: "18px", xs: "16px" }}
          fontWeight="500"
          letterSpacing="0.6px"
        >
          Are your sure you want to Logout?
        </Typography>
        <Box display="flex" width="100%" gap={{ lg: "12px", xs: "10px" }}>
          <PrimaryButton label="OK" onClick={handleClose} />
          <CancelButton onClick={handleClose} />
        </Box>
      </Box>
    </CustomModal>
  )
}
