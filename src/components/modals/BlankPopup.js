import * as React from "react"
import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import DoneImg from "@/assets/images/ic_done.png"
import { Image } from "../styled-components"
import { PrimaryButton } from "../CusttomButtons"
import { ListDivider } from "../ListDivider"
import { CloseIcon } from "../icons"

const style = {
  //   px: { lg: "22px", xs: "18px" },
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 500, xs: 420 },
  //   height: { lg: 414, xs: 390 },
  bgcolor: "#000000",
  borderRadius: "16px",
  //   boxShadow: "0px 0px 50px #E57607",

  "& img,& svg": {
    width: "30px",
    height: "30px",
  },

  div: {
    p: { lg: "22px", xs: "18px" },
    // py: { lg: "14px", xs: "16px" },
  },

  "& p": {
    ml: { lg: "22px", xs: "18px" },
    color: "#FFFFFF",
    fontSize: { lg: "20px", xs: "18px" },
    fontWeight: "400",
  },
}

export default function BlankPopup({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Box display="flex" alignItems="center">
          {/* <Image src={DoneImg.src} alt="done" /> */}
          <CloseIcon />
          <Typography>Downloading Staff Information</Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Image src={DoneImg.src} alt="done" />
          <Typography>Downloading Menu Items</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          {/* <Image src={DoneImg.src} alt="done" /> */}
          <CloseIcon />
          <Typography>Downloading System Configuration </Typography>
        </Box>
        <ListDivider
          sx={{
            color: "#707070",
            width: { lg: "calc(100% - 44px)", xs: "calc(100% - 36px)" },
            margin: "auto",
          }}
        />
        <Box>
          <PrimaryButton
            large
            label="RETRY"
            sx={{
              backgroundColor: "#888888",
              dropShadow: "3px 3px 12px #00000038",

              ": hover": {
                backgroundColor: "#888888 !important",
              },
            }}
            onClick={handleClose}
          />
        </Box>
      </Box>
    </Modal>
  )
}
const arr = [[[[[1]][(2, [4, 5, 6, [7, 8, [9, [10]]]])]]]]
