import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { Form, Formik } from "formik"
import { FormikInput } from "../FormikInput"
import { Button } from "@mui/material"
import { TextArea } from "../styled-components"
import { PrimaryButton } from "../CusttomButtons"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 350, xs: 450 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
  overflow: "hidden",
}

export default function CheckNotePopup({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Box
          sx={{
            borderBottom: "1px solid #0000005e",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            py={{ lg: "22px", xs: "12px" }}
            sx={{
              color: "#000000",
              fontSize: {
                lg: "16px",
                xs: "14px",
                letterSpacing: "0.6px",
                fontWeight: "bold",
              },
            }}
          >
            ENTER CHECK NOTE
          </Typography>
        </Box>
        <Formik
          initialValues={{
            note: "",
          }}
          // onSubmit={onSubmit}
        >
          <Form>
            <TextArea
              name="note"
              type="text"
              placeholder="Type a note here.."
              sx={{
                border: 0,
                backgroundColor: "transparent",
                height: { lg: "200px", xs: "150px" },
                p: { lg: "12px", xs: "8px" },
                width: "100%",
                fontSize: { lg: "14px", xs: "10px" },
                color: "#AAAAAA",
                letterSpacing: "0.6px",
                outline: 0,
                resize: "none",
                fontWeight: "400",
                borderRadius: 0,
              }}
            />
            <Box
              bgcolor="#0000005e"
              // height="100px"

              display="flex"
              borderRadius="0px 0px 10px 10px"
            >
              <PrimaryButton
                sx={{
                  backgroundColor: "#FF4141",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#FF4141 !important",
                  },
                }}
                label="retry"
              />
              <PrimaryButton
                sx={{
                  backgroundColor: "#00B153",

                  borderRadius: "0",

                  "&:hover": {
                    backgroundColor: "#00B153 !important",
                  },
                }}
                onClick={handleClose}
                label="discover"
              />
            </Box>
          </Form>
        </Formik>
      </Box>
    </Modal>
  )
}
