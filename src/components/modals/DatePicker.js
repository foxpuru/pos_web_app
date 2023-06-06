import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import "react-datepicker/dist/react-datepicker.css"

import CloseModalImg from "../../assets/images/ic_close_popup.png"
import { Image } from "../styled-components/tableDetails"
import DatePicker from "react-datepicker"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",

  boxShadow: 24,
}

export default function DateTimePicker({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  const [startDate, setStartDate] = React.useState(new Date())
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          height: { lg: "39px", xs: "36.13px" },
          px: { lg: "12px", xs: "8px" },
          color: "#5C6568",
          fontSize: { lg: "16px", xs: "14px" },
          fontWeight: "400",
          justifyContent: "left",
          textTransform: "Capitalize",
          backgroundColor: "#EEF5F6",
          borderRadius: "10px",

          "&:hover": {
            backgroundColor: "#EEF5F6",
          },
        }}
        fullWidth
      >
        Jan 01 2023 11:15 AM
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            id="modal-modal-title"
            p={{ lg: 2, xs: 1 }}
            display="flex"
            alignItems="center"
            boxShadow="0px 0px 50px #00000029"
          >
            <Typography
              width="65%"
              color="#000000"
              fontSize={{ lg: "16px", xs: "14px" }}
              fontWeight="500"
              letterSpacing="0.65px"
            >
              Select Start Date | Time
            </Typography>
            <Box
              width="35%"
              display="flex"
              justifyContent="end"
              gap={{ lg: "20px", xS: "12px" }}
            >
              <Button
                sx={{
                  color: "#FFFFFF",
                  fontSize: { lg: "16px", xs: "14px" },
                  fontWeight: "400",
                  letterSpacing: "0.6px",
                  textTransform: "Capitalize",
                  backgroundColor: "#E57607",
                  width: { lG: "130px", xs: "100px" },
                  borderRadius: "8px",

                  "&:hover": {
                    backgroundColor: "#E57607",
                  },
                }}
                fullWidth
              >
                Set
              </Button>
              <Image
                src={CloseModalImg.src}
                alt="close modal image"
                sx={{
                  width: { lg: "40px", xs: "32px" },
                  height: { lg: "40px", xs: "32px" },
                }}
              />
            </Box>
          </Box>
          <Box>
            <Box
              width="65%"
              id="modal-modal-description"
              sx={{
                "& .react-datepicker-wrapper": {
                  display: "none",
                },
                "% .react-datepicker__tab-loop__start": {
                  display: "none",
                },
                "& .react-datepicker__triangle": {
                  display: "none",
                },
                "& .react-datepicker-popper": {
                  position: "unset !important",
                  inset: "0 !important",
                  transform: "unset !important",
                  padding: "0 !important",
                },

                "& .react-datepicker": {
                  width: "100%",
                  background: "unset !important",
                  p: { lg: 2, xs: 1 },
                  border: 0,

                  "& .react-datepicker__month-container": {
                    width: "100%",

                    "& .react-datepicker__header": {
                      backgroundColor: "transparent",
                      borderBottom: "0",
                      "& .react-datepicker__current-month": {
                        fontSize: { lg: "17px", xs: "14px" },
                        fontWeight: "500",
                        letterSpacing: "0.68px",
                        color: "#000000",
                      },
                    },
                    "& .react-datepicker__month": {
                      margin: 0,
                    },
                    "& .react-datepicker__day--keyboard-selected": {
                      backgroundColor: "#E57607",
                      borderRadius: "50%",
                    },
                    "& .react-datepicker__day-names": {
                      display: "flex",
                      justifyContent: "space-between",
                    },
                    "& .react-datepicker__week": {
                      display: "flex",
                      justifyContent: "space-between",
                    },
                    "& .react-datepicker__day-name": {
                      fontSize: { lg: "12px", xs: "10px" },
                      fontWeight: "400",
                      letterSpacing: "0.4px",
                      textTransform: "uppercase",
                      width: "2.5em",
                      lineHeight: "2.5em",
                      margin: "0 !important",
                      color: "#A5ACAE",
                    },

                    "& .react-datepicker__day": {
                      fontSize: { lg: "16px", xs: "14px" },
                      fontWeight: "500",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      color: "#000000",
                      //   padding: "1rem",
                      width: "2.5em",
                      lineHeight: "2.5em",
                      margin: "0 !important",
                    },
                  },

                  "& .react-datepicker__navigation": {
                    top: { lg: "27px", xs: "13px" },
                  },

                  "& .react-datepicker__day": {
                    // width: "unset !important",
                    // height: "unset !important",
                  },
                },
              }}
            >
              <DatePicker
                // className="react-date-picker"
                // selected={startDate}

                open
                onChange={(date) => setStartDate(date)}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
