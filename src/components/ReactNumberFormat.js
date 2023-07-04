import * as React from "react"
import PropTypes from "prop-types"

import { NumericFormat } from "react-number-format"
import Box from "@mui/material/Box"

import TextField from "@mui/material/TextField"

export default function ReactNumberFormat({
  value,
  onChange,
  name,
  placeholder,
  suffix,
  prefix,
}) {
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
        placeholder={placeholder}
        suffix={suffix}
        prefix={prefix}
      />
    )
  })

  NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  return (
    <Box
      sx={{
        "& .MuiInputBase-root::before, .MuiInputBase-root::after": {
          display: "none",
        },
        "& input": {
          color: "#000000",
          fontSize: {
            lg: "23px",
            xs: "19px",
          },

          width: "40%",
          textAlign: "center",
          margin: "auto",

          fontWeight: "500",
          textTransform: "capitalize",
          textDecoration: "none",
          "&::placeholder": {
            color: "#000000",
            fontSize: {
              lg: "23px",
              xs: "19px",
            },
          },
        },
      }}
    >
      <TextField
        value={value}
        onChange={onChange}
        name={name}
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        variant="standard"
      />
    </Box>
  )
}
