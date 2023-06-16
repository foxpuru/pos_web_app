import * as React from "react"
import PropTypes from "prop-types"

import { NumericFormat } from "react-number-format"
import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"

export default function ReactNumberFormat({ amount, handleChange, layout }) {
  const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref
  ) {
    const { onChange, ...other } = props

    const newSuffix = layout === "%" && "%"
    const newPrefix = layout === "$" && "$"

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
        prefix={"$"}
        suffix={"%"}
        // style={{ "&" }}
        // suffix={layout === "%" && "%"}
      />
    )
  })

  NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  // const [values, setValues] = React.useState({
  //   textmask: "(100) 000-0000",
  //   numberformat: "1320",
  // })

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   })

  // }

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
        value={amount}
        onChange={handleChange}
        name="amount"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        variant="standard"
      />
    </Box>
  )
}
