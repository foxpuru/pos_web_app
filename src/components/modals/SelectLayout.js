import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import CustomizeRadioGroup from "../RadioGroup"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 550, xs: 450 },
  height: { md: 370,  xs: 300 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
}

export default function SelectLayout({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  const [layout, setLayout] = React.useState("Pizzeria")

  const options = [
    { label: "My Layout", value: "My Layout" },
    { label: "Foods", value: "Foods" },
  ]
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Box
          px={{ lg: "22px", xs: "12px" }}
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
                letterSpacing: "0.6px",
                fontWeight: "600",
              },
            }}
          >
            Select Layout
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
                height: { lg: "32px", xs: "28px" },
                width: { lg: "110px", xs: "80px" },
                py: { lg: "6px", xs: "4px" },
                backgroundColor: "#E57607",
                color: "#FFFFFF",
                fontSize: { sm: "14px", xs: "12px" },
                fontWeight: "400",
                letterSpacing: "0.6px",
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
          </Box>
        </Box>
        <Box height={"calc(100% - 62px)"} overflow="auto">
          {/* <Box
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
           */}
          <CustomizeRadioGroup
            layout={layout}
            onChange={(e) => setLayout(e.target.value)}
            options={options}
          />
        </Box>
      </Box>
    </Modal>
  )
}
