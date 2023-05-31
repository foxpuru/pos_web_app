import * as React from "react"
import PropTypes from "prop-types"

import { NumericFormat } from "react-number-format"
import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"

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

export default function ReactNumberFormat() {
  const [values, setValues] = React.useState({
    textmask: "(100) 000-0000",
    numberformat: "1320",
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <TextField
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        variant="standard"
      />
    </Box>
  )
}
