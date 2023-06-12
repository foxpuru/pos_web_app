import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { Form, Formik } from "formik"
import { FormikInput } from "./inputs"
import { Button } from "@mui/material"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 350, xs: 450 },
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 24,
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
            <Box height={{ lg: "150px", xs: "150px" }}>
              <FormikInput
                name="note"
                type="text"
                placeholder="Type a note here.."
                styles={{
                  backgroundColor: "transparent",
                  //   maxHeight: { lg: "150px", xs: "150px" },
                  py: { lg: "12px", xs: "8px" },
                  width: "100%",
                  borderRadius: 0,
                }}
              />
            </Box>
            <Box display="flex" width="100%">
              <Button
                // flexDirection="column"
                alignItems="center"
                textAlign="center"
                // gap={{ sm: "0px", xs: "12px" }}
                // justifyContent="center"

                sx={{
                  width: { lg: "100%", xs: "100%" },
                  margin: "auto",
                  py: { lg: "6px", xs: "4px" },
                  backgroundColor: "#5C6568",
                  color: "#FFFFFF",
                  fontSize: { sm: "14px", xs: "12px" },
                  fontWeight: "400",
                  letterSpacing: "0.45px",

                  borderRadius: "8px",

                  "&:hover": {
                    backgroundColor: "#5C6568",
                  },
                }}
                // disabled={otp.length == 12 ? false : true}
                // onClick={() =>
                //   otp.length == 12 ? Router.push("/") : undefined
                // }
              >
                RETRY
              </Button>
              <Button
                // flexDirection="column"
                alignItems="center"
                textAlign="center"
                // gap={{ sm: "0px", xs: "12px" }}
                // justifyContent="center"

                sx={{
                  width: { lg: "100%", xs: "100%" },
                  margin: "auto",
                  py: { lg: "6px", xs: "4px" },
                  backgroundColor: "#E57607",
                  color: "#FFFFFF",
                  fontSize: { sm: "14px", xs: "12px" },
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
                DISCOVER
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Modal>
  )
}
