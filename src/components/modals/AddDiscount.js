import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import React from "react"
import CustomModal from "../Modal"
import ClocePopup from "@/assets/images/ic_close_popup.png"
import { Image } from "../styled-components/tableDetails"

function AddDiscount({ isOpen, handleToggle, handleOpen, handleClose }) {
  return (
    <CustomModal
      isOpen={isOpen}
      handleToggle={handleToggle}
      handleOpen={handleOpen}
      handleClose={handleClose}
      defaultHeader={false}
      style={{ height: "auto", width: { lg: "400px", xs: "300px" } }}
    >
      <Box px={{ lg: "20px", xs: "16px" }} py={{ lg: "10px", xs: "12px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Image
            onClick={handleClose}
            src={ClocePopup.src}
            alt="close popup"
            sx={{ width: { lg: "30px", xs: "26px" }, cursor: "pointer" }}
          />
        </Box>
        <Box
          py={{ lg: "10px", xs: "12px" }}
          display="flex"
          justifyContent="center"
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: {
                lg: "17px",
                xs: "15px",
              },

              fontWeight: "600",
            }}
          >
            $ Cash
          </Typography>
          <Divider
            sx={{ mx: { lg: "30px", xs: "20px" } }}
            orientation="vertical"
            flexItem
          />
          <Typography
            sx={{
              color: "#E57607",
              fontSize: {
                lg: "17px",
                xs: "15px",
              },

              fontWeight: "600",
            }}
          >
            % Percent
          </Typography>
        </Box>
        <Box position="relative">
          <Box
            py={{ lg: "6px", xs: "4px" }}
            border="1px dashed#A5ACAE"
            borderRadius="10px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              mb={{ lg: "4px", xs: "2px" }}
              sx={{
                color: "#000000",
                fontSize: {
                  lg: "23px",
                  xs: "19px",
                },

                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              0%
            </Typography>
            <Typography
              sx={{
                color: "#A5ACAE",
                fontSize: {
                  lg: "13px",
                  xs: "11px",
                },

                fontWeight: "400",
                textTransform: "capitalize",
              }}
            >
              Percent Amount
            </Typography>
          </Box>
          <Button
            position="absolute"
            sx={{
              height: { lg: "28px", xs: "22px" },
              width: { lg: "50px", xs: "40px" },
              backgroundColor: "transparent",
              color: "#000000",
              fontSize: { lg: "12px", xs: "10px" },
              fontWeight: "400",
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "1px solid #A5ACAE",
              top: 0,
              "&:hover": {
                backgroundColor: "transparent !important",
              },
            }}
            // disabled={otp.length == 12 ? false : true}
            // onClick={() =>
            //   otp.length == 12 ? Router.push("/") : undefined
            // }
            onClick={handleClose}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </CustomModal>
  )
}

export default AddDiscount
