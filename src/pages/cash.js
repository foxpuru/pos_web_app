import React from "react"
import PropTypes from "prop-types"
import { NumericFormat } from "react-number-format"
import TextField from "@mui/material/TextField"

import { Box, Button, Stack, Typography } from "@mui/material"
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

  const {
    isOpen: isOpenAddTip,
    handleOpen: handleOpenAddTip,
    handleClose: handleCloseAddTip,
  } = useModalState(true)

  return (
    <>
      <Box
        height="100%"
        // display="grid"
        bgcolor="#FFFFFF"
        border="1px solid #D7DBDC"
        borderRadius="10px"
        sx={{ opacity: 1 }}
      >
        <Box height="50%" textAlign="center">
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
              onClick={handleOpenAddTip}
              value={"₹" + tip}
              placeholder="₹0.00"
            /> */}

            <Typography
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
            </Typography>

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

        <Box height="50%" display="flex" alignItems="end" justifyContent="end">
          <Stack
            direction="row"
            justifyContent="center"
            spacing={{ lg: 3, xs: 1 }}
            py={{ lg: "42px", xs: "22px" }}
            px={{ lg: "22px", xs: "12px" }}
            // display="flex"
            // flexDirection="row"
            width="100%"
          >
            <Button
              sx={{
                width: { lg: "310px", xs: "156.33px" },
                height: { lg: "60px", xs: "40px" },
                color: "#FFFFFF",
                fontSize: { lg: "18px", xs: "14px" },
                fontWeight: "400",
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                backgroundColor: "#E57607",
                borderRadius: "10px",

                "&:hover": {
                  backgroundColor: "#E57607",
                },

                "& svg": {
                  width: { lg: "32px", xs: "24px" },
                  height: { lg: "32px", xs: "24px" },
                },
              }}
              type="submit"
            >
              CHARGE
            </Button>
          </Stack>
        </Box>
      </Box>
      <AddTip
        isOpen={isOpenAddTip}
        tip={tip}
        onChange={(value) => setTip(value)}
        handleOpen={handleOpenAddTip}
        handleClose={handleCloseAddTip}
      />
    </>
  )
}

Cash.getLayout = (page) => <PaymentLayout isPaymentMethod>{page}</PaymentLayout>

export default Cash
