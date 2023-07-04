import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

import React, { useState } from "react"

import CustomModal from "./CustomModal"
import ClocePopup from "@/assets/images/ic_close_popup.png"
import { Image, Input } from "../styled-components"

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

function AddDiscount({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
  setDiscountValue,
}) {
  const [layout, setLayout] = useState("%")
  const [cash, setCash] = React.useState("")
  const [percentage, setPercentage] = React.useState("")
  const [discountFieldBy, setDiscountFieldBy] = React.useState()

  const FormRow = ({ buttons }) => {
    return (
      <React.Fragment>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          // onClick={() => setCash(cash + buttons[0].value)}
          onClick={() => {
            if (discountFieldBy) {
              layout === "%"
                ? setPercentage(buttons[0].value)
                : setCash(buttons[0].value)
              setDiscountFieldBy(false)
              return true
            }
            layout === "%"
              ? setPercentage(percentage + buttons[0].value)
              : setCash(cash + buttons[0].value)
          }}
        >
          <NumberItem>{buttons[0].value}</NumberItem>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ cursor: "pointer" }}
          // onClick={() => setCash(cash + buttons[1].value)}
          onClick={() => {
            if (discountFieldBy) {
              layout === "%"
                ? setPercentage(buttons[1].value)
                : setCash(buttons[1].value)
              setDiscountFieldBy(false)
              return true
            }
            layout === "%"
              ? setPercentage(percentage + buttons[1].value)
              : setCash(cash + buttons[1].value)
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
          //     ? setCash(cash.substring(0, cash.length - 1))
          //     : setCash(cash + buttons[2].value)
          // }
          onClick={() => {
            if (buttons[2].remove) {
              layout === "%"
                ? setPercentage(percentage.substring(0, percentage.length - 1))
                : setCash(cash.substring(0, cash.length - 1))

              // console.log("remove", cash.substring())
              return false
            } else if (discountFieldBy) {
              layout === "%"
                ? setPercentage(buttons[2].value)
                : setCash(buttons[2].value)
              setDiscountFieldBy(false)
              return true
            }
            layout === "%"
              ? setPercentage(percentage + buttons[2].value)
              : setCash(cash + buttons[2].value)
          }}
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
              color: layout === "$" ? "#E57607" : "#000000",
              fontSize: {
                lg: "17px",
                xs: "15px",
              },

              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => setLayout("$")}
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
              color: layout === "%" ? "#E57607" : "#000000",
              fontSize: {
                lg: "17px",
                xs: "15px",
              },

              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => setLayout("%")}
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
            <ReactNumberFormat
              value={layout === "%" ? percentage : cash}
              onChange={(e) => {
                if (layout === "%") {
                  setPercentage(e.target.value)
                } else {
                  setCash(e.target.value)
                }
              }}
              placeholder={layout === "%" ? "0%" : "$0"}
              suffix={layout === "%" ? "%" : undefined}
              prefix={layout === "$" ? "$" : undefined}
              name={layout === "%" ? "percentage" : "cash"}
            />

            {/* <Input
              type="text"
              name="cash"
              placeholder={layout === "%" ? "0%" : "$0.00"}
              value={cash}
              onChange={(e) => setCash(e.target.value)}
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
                "&::placeholder": {
                  color: "#000000",
                  fontSize: {
                    lg: "23px",
                    xs: "19px",
                  },
                },
              }}
            /> */}

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
              {layout === "%" ? "Percent" : "Cash"} Amount
            </Typography>
          </Box>
          <PrimaryButton
            clear
            onClick={() => {
              if (layout === "%") {
                setPercentage("")
              } else {
                setCash("")
              }
            }}
            label="Clear"
          />
        </Box>
        <Box
          py={{ lg: "12px", xs: "8px" }}
          pb={{ lg: "26px", xs: "18px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={{ lg: "12px", xs: "8px" }}
        >
          <Typography
            color={layout === "$" ? "#000000" : "#A5ACAE"}
            fontSize={{ lg: "42px", xs: "34px" }}
            fontWeight="600"
            lineHeight="0 !important"
          >
            .
          </Typography>
          <Typography
            color={layout === "%" ? "#000000" : "#A5ACAE"}
            fontSize={{ lg: "42px", xs: "34px" }}
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
          <Box display="flex" width="100%">
            {CalculatorButtonsKey(layout).map((item, index) => (
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
                  if (layout === "%") {
                    setPercentage(item.value)
                    setDiscountFieldBy(true)
                  } else if (layout === "$") {
                    setCash(item.value)
                    setDiscountFieldBy(true)
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        <PrimaryButton label="Add Discount" onClick={handleClose} />

        {/* <Boxss>
          <ButtonsContainerss>
            {dailpadButtons.map((char) => (
              <Buttonss key={char} onClick={() => setCash(cash + char)}>
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
