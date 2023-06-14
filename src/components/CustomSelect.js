import { FormControl, MenuItem, Select, Typography } from "@mui/material"
import React from "react"

function CustomSelect({
  label,
  placeholder,
  name,
  onChange,
  value,
  options,
  styles,
  displayEmpty = false,
}) {
  return (
    <>
      <Typography
        m={{ lg: "0px 0px 5px 12px", xs: "0px 0px 3px 8px" }}
        color="#000000"
        fontSize={{ lg: "14px", xs: "12px" }}
        fontWeight="400"
      >
        {label}
      </Typography>
      <FormControl sx={{ m: 0, minWidth: "100%" }}>
        <Select
          inputProps={{ "aria-label": "Without label" }}
          value={value}
          name={name}
          onChange={onChange}
          displayEmpty={displayEmpty}
          renderValue={(selected) => {
            if (selected.length === 0) return placeholder
            return selected
          }}
          // label="Age"
          // inputProps={{ "aria-label": "Without label" }}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#EEF5F6",
            color: "#A5ACAE",
            fontSize: { lg: "14px", xs: "12px" },
            fontWeight: "400",

            ".MuiSelect-select": {
              p: { lg: "12px", xs: "8px" },
            },
            ul: {
              padding: "0 !important",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              display: "none",
            },
            ...styles,
          }}
        >
          <MenuItem
            value={""}
            sx={{
              p: { lg: "12px", xs: "8px" },
              color: "#A5ACAE !important",
              fontSize: {
                lg: "14px !important",
                xs: "12px !important",
              },
              fontWeight: "400",
              display: "none",
            }}
            // selected
            disabled
          >
            ""
          </MenuItem>
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                p: { lg: "12px", xs: "8px" },
                color: "#A5ACAE !important",
                fontSize: {
                  lg: "14px !important",
                  xs: "12px !important",
                },
                fontWeight: "400",
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default CustomSelect
