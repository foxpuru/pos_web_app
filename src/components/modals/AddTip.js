import React, { useState } from "react"
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

import CustomModal from "./CustomModal"
import ClocePopup from "@/assets/images/ic_close_popup.png"
import { Image, Input } from "../styled-components/tableDetails"


import { CalculatorButtonsKey } from "@/data/calculatorKey"
import ReactNumberFormat from "../ReactNumberFormat"
import { PrimaryButton } from "../CusttomButtons"

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

function AddTip({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
  tip,
  onChange,
}) {
  const [tipFieldBy, setTipFieldBy] = React.useState()

  const FormRow = ({ buttons }) => {
    return (
      <React.Fragment>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          // onClick={() => onChange(tip + buttons[0].value)}
          onClick={() => {
            if (tipFieldBy) {
              onChange(buttons[0].value)
              setTipFieldBy(false)
              return true
            }
            onChange(tip + buttons[0].value)
          }}
        >
          <NumberItem>{buttons[0].value}</NumberItem>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          // onClick={() => onChange(tip + buttons[1].value)}
          onClick={() => {
            if (tipFieldBy) {
              onChange(buttons[1].value)
              setTipFieldBy(false)
              return true
            }
            onChange(tip + buttons[1].value)
          }}
        >
          <NumberItem>{buttons[1].value}</NumberItem>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          // onClick={() =>
          //   buttons[2].remove
          //     ? onChange(tip.substring(0, tip.length - 1))
          //     : onChange(tip + buttons[2].value)
          // }
          onClick={() => {
            if (buttons[2].remove) {
              onChange(tip.substring(0, tip.length - 1))

              // console.log("remove", tip.substring())
              return false
            } else if (tipFieldBy) {
              onChange(buttons[2].value)
              setTipFieldBy(false)
              return true
            }
            onChange(tip + buttons[2].value)
          }}
        >
          <NumberItem sx={{ borderRight: "0" }}>{buttons[2].value}</NumberItem>
        </Grid>
      </React.Fragment>
    )
  }

  const TipCalculatorKeys = [
    {
      label: "₹10",
      value: "10",
      styles: {
        width: "33%",
        borderRadius: "10px 0px 0px 10px",
        borderRight: 0,
      },
    },
    {
      label: "₹15",
      value: "15",
      styles: {
        width: "34%",
        borderRadius: "0px",
      },
    },
    {
      label: "₹20",
      value: "20",
      styles: {
        width: "33%",
        borderLeft: 0,
        borderRadius: "0px 10px 10px 0px",
      },
    },
  ]

  return (
    <CustomModal
      isOpen={isOpen}
      handleToggle={handleToggle}
      handleOpen={handleOpen}
      handleClose={handleClose}
      defaultHeader={false}
      style={{ height: "auto", width: { lg: "350px", xs: "350px" } }}
    >
      <Box p="22px">
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
          pb={{ lg: "12px", xs: "8px" }}
          display="flex"
          justifyContent="center"
        >
          <Typography
            sx={{
              color: "#E57607",
              fontSize: {
                lg: "17px",
                xs: "15px",
              },

              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ₹ ADD TIP
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
            <ReactNumberFormat
              value={tip}
              onChange={(e) => onChange(e.target.value)}
              placeholder={"₹0.00"}
              prefix={"₹"}
              name={"tip"}
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
              Cash Amount
            </Typography>
          </Box>
          <PrimaryButton clear onClick={() => onChange("")} label={"Clear"} />
        </Box>

        <Box py={{ lg: "32px", xs: "22px" }}>
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
        <Box pb={{ lg: "22px", xs: "16px" }}>
          <Box display="flex" width="100%">
            {TipCalculatorKeys.map((item, index) => (
              <PrimaryButton
                key={index}
                label={item.label}
                sx={{
                  backgroundColor: "transparent",
                  color: "#000000",
                  borderRadius: "10px",
                  border: "1px solid #A5ACAE",

                  "&:hover": {
                    backgroundColor: "transparent !important",
                  },
                  ...item.styles,
                }}
                onClick={() => {
                  onChange(item.value)
                  setTipFieldBy(true)
                }}
              />
            ))}
          </Box>
        </Box>

        <PrimaryButton label="Add Tip" onClick={handleClose} />

        {/* <Boxss>
          <ButtonsContainerss>
            {dailpadButtons.map((char) => (
              <Buttonss key={char} onClick={() => onChange(tip + char)}>
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

export default AddTip
