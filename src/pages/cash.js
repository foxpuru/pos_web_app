import React from "react"
import PropTypes from "prop-types"
import { NumericFormat } from "react-number-format"
import TextField from "@mui/material/TextField"

import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import Divider from "@mui/material/Divider"
import { useRouter } from "next/router"

import { Image, Input } from "@/components/styled-components/tableDetails"
import PaymentLayout from "@/layouts/PaymentLayout"
import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png"
import { Form, Formik } from "formik"
import { FormikInput } from "@/components/inputs"
import ReactNumberFormat from "@/components/ReactNumberFormat"
import useModalState from "@/hooks/useModalState"
import AddTip from "@/components/modals/AddTip"
import { PrimaryButton } from "@/components/CusttomButtons"

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      thousandSeparator
      valueIsNumericString
      prefix="₹"
    />
  )
})

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

function Cash() {
  const router = useRouter()

  const [tip, setTip] = React.useState("")

  const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref
  ) {
    const { onChange, ...other } = props

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: "₹" + values.value,
            },
          })
        }}
        thousandSeparator
        valueIsNumericString
        placeholder={"₹0.0"}
        prefix={"₹"}
      />
    )
  })

  NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  return (
    <>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        bgcolor="#FFFFFF"
        border="1px solid #D7DBDC"
        borderRadius="10px"
        sx={{ opacity: 1 }}
      >
        <Box textAlign="center">
          <Box
            py={{ lg: "12px", xs: "12px" }}
            display="flex"
            flexDirection="column"
          >
            <Typography
              color="#000000"
              fontWeight="400"
              fontSize={{ lg: "40px", xs: "28px" }}
              letterSpacing="0.7px"
            >
              ₹1843.90
            </Typography>
            <Typography
              color="#A1A1A1"
              fontWeight="400"
              fontSize={{ lg: "16px", xs: "12px" }}
              letterSpacing="0.53px"
            >
              Total Amount Due
            </Typography>
          </Box>

          <Box position="relative">
            <Divider
              sx={{ borderBottomWidth: "1px", borderColor: "#D7DBDC" }}
            />
            <Typography
              my={{ lg: "18px", xs: "14px" }}
              color="#000000"
              fontWeight="400"
              fontSize={{ lg: "18px", xs: "12px" }}
              letterSpacing="0.68px"
            >
              Add Cash Payment
            </Typography>

            {/* <Input
              sx={{
                textAlign: "center",
                color: "#000000",
                fontWeight: "400",
                fontSize: { lg: "40px", xs: "28px" },
                letterSpacing: "0.7px",
              }}
              value={"₹" + tip}
              placeholder="₹0.00"
            /> */}

            <Box
              sx={{
                "& .MuiInputBase-root::before, .MuiInputBase-root::after": {
                  display: "none",
                },
                "& input": {
                  color: "#000000",
                  fontWeight: "400",
                  fontSize: { lg: "40px", xs: "28px" },
                  letterSpacing: "0.7px",

                  width: "40%",
                  textAlign: "center",
                  margin: "auto",

                  // fontWeight: "500",
                  textTransform: "capitalize",
                  textDecoration: "none",
                },
                "& input::placeholder": {
                  color: "#000000 !important",
                  fontWeight: "400",
                  fontSize: { lg: "40px", xs: "28px" },
                  letterSpacing: "0.7px",
                },
              }}
            >
              <TextField
                value={tip}
                onChange={(e) => setTip(e.target.value)}
                name={tip}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumericFormatCustom,
                }}
                variant="standard"
              />
            </Box>

            {/* <Typography
              sx={{
                textAlign: "center",
                color: "#000000",
                fontWeight: "400",
                fontSize: { lg: "40px", xs: "28px" },
                letterSpacing: "0.7px",
              }}
              onClick={handleOpenAddTip}
            >
              {tip ? `₹${tip}` : "₹0.00"}
            </Typography> */}

            <Typography
              color="#A1A1A1"
              fontWeight="400"
              fontSize={{ lg: "16px", xs: "12px" }}
              letterSpacing="0.53px"
              mb={{ lg: "12px", xs: "10px" }}
            >
              Amount Paid
            </Typography>
            <Divider
              sx={{
                borderBottomWidth: "2px",
                borderColor: "#D7DBDC",
              }}
            />
            <Image
              src={PaymentMethodArrowImg.src}
              alt="Payment Method Arrow"
              sx={{
                position: "absolute",
                bottom: { lg: "-15px", xs: "-9px" },
                left: "50%",
                transform: "translateX(-50%)",
                width: { lg: "22px", xs: "14px" },
              }}
            />
          </Box>
        </Box>

        <Grid
          lg={4}
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={{ lg: "42px", xs: "22px" }}
          px={{ lg: "22px", xs: "12px" }}
        >
          <PrimaryButton
            large
            sx={{
              width: { lg: "310px", xs: "156.33px" },
            }}
            onClick={() => router.push("/payment-completed")}
            label="CHARGE"
          />
        </Grid>
      </Box>
    </>
  )
}

Cash.getLayout = (page) => <PaymentLayout isPaymentMethod>{page}</PaymentLayout>

export default Cash
