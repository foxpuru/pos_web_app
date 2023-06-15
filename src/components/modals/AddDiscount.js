import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

import React from "react"

import CustomModal from "../Modal"
import ClocePopup from "@/assets/images/ic_close_popup.png"
import { Image, Input } from "../styled-components/tableDetails"
import MobileNumberKeypad from "../MobileNumberKeypad"
import { Formik } from "formik"
import { FormikInput } from "../inputs"
import { TeravozDialer } from "../mobile-dailer"
import {
  Boxss,
  ButtonsContainerss,
  Buttonss,
} from "../mobile-dailer/components/Dialer/atoms"
import { CustomButton } from "../custom-components"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

const NumberItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: "center",
  display: "flex",
  justifyContent: "center",

  borderRadius: "0 !important",
  boxShadow: "none",
  fontSize: { lg: "14px", xs: "12px" },
  fontWeight: "400",
  color: "#000",
  height: "50px",
  borderRight: "1px solid #A5ACAE",
}))

function AddDiscount({ isOpen, handleToggle, handleOpen, handleClose }) {
  const [amount, setAmount] = React.useState("")

  const onClear = () => {
    setAmount("")
  }

  const onChange = (e) => {
    setAmount(e.target.value)
  }

  const FormRow = ({ buttons }) => {
    return (
      <React.Fragment>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          onClick={() => setAmount(amount + buttons[0].value)}
        >
          <NumberItem>{buttons[0].value}</NumberItem>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          onClick={() => setAmount(amount + buttons[1].value)}
        >
          <NumberItem>{buttons[1].value}</NumberItem>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          onClick={() =>
            buttons[2].remove
              ? setAmount(amount.substring(0, amount.length - 1))
              : setAmount(amount + buttons[2].value)
          }
        >
          <NumberItem sx={{ borderRight: "0" }}>{buttons[2].value}</NumberItem>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <CustomModal
      isOpen={isOpen}
      handleToggle={handleToggle}
      handleOpen={handleOpen}
      handleClose={handleClose}
      defaultHeader={false}
      style={{ height: "auto", width: { lg: "350px", xs: "300px" } }}
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
            <Input
              type="text"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              mb={{ lg: "4px", xs: "2px" }}
              sx={{
                color: "#000000",
                fontSize: {
                  lg: "23px",
                  xs: "19px",
                },
                width: "100%",
                textAlign: "center",

                fontWeight: "500",
                textTransform: "capitalize",
              }}
            />
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
            sx={{
              position: "absolute",
              height: { lg: "28px", xs: "22px" },
              width: { lg: "50px", xs: "40px" },
              backgroundColor: "transparent",
              color: "#000000",
              fontSize: { lg: "12px", xs: "10px" },
              fontWeight: "400",
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "1px solid #A5ACAE",

              "&:hover": {
                backgroundColor: "transparent !important",
              },
              top: "50%",
              right: "0",
              transform: "translate(-50%, -50%)",
            }}
            // disabled={otp.length == 12 ? false : true}
            // onClick={() =>
            //   otp.length == 12 ? Router.push("/") : undefined
            // }
            onClick={onClear}
          >
            Clear
          </Button>
        </Box>
        <Box
          py={{ lg: "12px", xs: "8px" }}
          pb={{ lg: "26px", xs: "18px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={{ lg: "22px", xs: "12px" }}
        >
          <Typography
            color="#A5ACAE"
            fontSize={{ lg: "42px", xs: "8px" }}
            fontWeight="600"
            lineHeight="0 !important"
          >
            .
          </Typography>
          <Typography
            color="black"
            fontSize={{ lg: "42px", xs: "8px" }}
            fontWeight="600"
            lineHeight="0 !important"
          >
            .
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            border="1px solid #A5ACAE"
            borderRadius="10px"
            overflow="hidden"
          >
            <Grid container item borderBottom="1px solid #A5ACAE">
              <FormRow
                buttons={[{ value: "1" }, { value: "2" }, { value: "3" }]}
              />
            </Grid>
            <Grid container item borderBottom="1px solid #A5ACAE">
              <FormRow
                buttons={[{ value: "4" }, { value: "5" }, { value: "6" }]}
              />
            </Grid>
            <Grid container item borderBottom="1px solid #A5ACAE">
              <FormRow
                buttons={[{ value: "7" }, { value: "8" }, { value: "9" }]}
              />
            </Grid>
            <Grid container item>
              <FormRow
                buttons={[
                  { value: "." },
                  { value: "0" },
                  { value: "x", remove: true },
                ]}
              />
            </Grid>
          </Grid>
        </Box>
        <Box py={{ lg: "22px", xs: "16px" }}>
          <Box
            display="flex"
            border="1px solid #A5ACAE"
            borderRadius="10px"
            width="100%"
          >
            <CustomButton
              sx={{
                borderRight: "1px solid #A5ACAE",
                borderRadius: 0,
                width: "25%",
              }}
              label="5%"
              onClick={onClear}
            />
            <CustomButton
              sx={{
                borderRight: "1px solid #A5ACAE",
                borderRadius: 0,
                width: "25%",
              }}
              label="5%"
              onClick={onClear}
            />{" "}
            <CustomButton
              sx={{
                borderRight: "1px solid #A5ACAE",
                borderRadius: 0,
                width: "25%",
              }}
              label="5%"
              onClick={onClear}
            />{" "}
            <CustomButton
              sx={{
                borderRadius: 0,
                width: "25%",
              }}
              label="5%"
              onClick={onClear}
            />
          </Box>
        </Box>
        {/* <Boxss>
          <ButtonsContainerss>
            {dailpadButtons.map((char) => (
              <Buttonss key={char} onClick={() => setAmount(amount + char)}>
                {char}
              </Buttonss>
            ))}
          </ButtonsContainerss>
        </Boxss> */}
        {/* <TeravozDialer /> */}
      </Box>
    </CustomModal>
  )
}

export default AddDiscount
