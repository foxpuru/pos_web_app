import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import ClocePopup from "@/assets/images/ic_close_popup.png"
import { Image } from "../styled-components"

function CustomModal({
  isOpen,
  handleClose,
  children,
  style,
  title,
  button,
  defaultHeader = true,
}) {
  const ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { lg: 650, xs: 450 },
    height: { lg: 450, xs: 350 },
    bgcolor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: 24,
    ...style,
  }

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={ModalStyle}>
        {defaultHeader && (
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
                },
                letterSpacing: "0.5px",
                fontWeight: "600",
              }}
            >
              {title}
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
                  textTransform: "unset",
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
                {button}
              </Button>
              <Image
                onClick={handleClose}
                src={ClocePopup.src}
                alt="close popup"
                sx={{ width: { lg: "30px", xs: "26px" }, cursor: "pointer" }}
              />
            </Box>
          </Box>
        )}
        {children}
      </Box>
    </Modal>
  )
}

export default CustomModal
