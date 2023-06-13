import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { Form, Formik } from "formik"
import { FormikInput } from "./inputs"
import { Button } from "@mui/material"
import { TextArea } from "./styled-components/tableDetails"

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
                  backgroundColor: "#FF4141",
                  color: "#FFFFFF",
                  fontSize: { sm: "14px", xs: "12px" },
                  fontWeight: "400",
                  letterSpacing: "0.45px",

                  borderRadius: "0",

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
                  backgroundColor: "#00B153",
                  color: "#FFFFFF",
                  fontSize: { sm: "14px", xs: "12px" },
                  fontWeight: "400",
                  letterSpacing: "0.45px",

                  borderRadius: "0",

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
            {/* <Box
              display="flex"
              width="100%"
              borderRadius="0px 0px 10px 10px"
              overflow="hidden"
            >
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

                  borderRadius: "0",

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

                  borderRadius: "0",

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
            </Box> */}
          </Form>
        </Formik>
      </Box>
    </Modal>
  )
}
