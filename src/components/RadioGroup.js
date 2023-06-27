import * as React from "react"
import { styled } from "@mui/material/styles"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { CheckedBoxIcon, UncheckedBoxIcon } from "./icons"
import { Box, Divider, Typography } from "@mui/material"

import BankImg from "../assets/images/ic_bank_transfer.png"
import MobileImg from "../assets/images/ic_mobile_wallet.png"
import DebitImg from "../assets/images/ic_direct_debit.png"
import UpiImg from "../assets/images/ic_upi_payments.png"
import { Image } from "./styled-components/tableDetails"

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}))

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
})

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      icon={<UncheckedBoxIcon />}
      checkedIcon={<CheckedBoxIcon />}
      {...props}
    />
  )
}

export default function CustomizeRadioGroup({
  layout,
  onChange,
  options,
  showIcons = false,
}) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <RadioGroup
        // defaultValue="Pizzeria"

        value={layout}
        onChange={onChange}
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        {/* <FormControlLabel value="male" control={<BpRadio />} label="Male" />
        <FormControlLabel value="other" control={<BpRadio />} label="Other" /> */}
        <Box width="100%" pb={1}>
          {options.map((item, index) => (
            <Box
              key={index}
              px={{ lg: "22px", xs: "18px" }}
              py={{ lg: "12px", xs: "8px" }}
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="2px solid #EEF5F6"
            >
              <Box display="flex" alignItems="center">
                {showIcons && (
                  <Image
                    src={item.image}
                    alt="bank"
                    sx={{ width: { lg: "36px", xs: "30px" } }}
                  />
                )}
                <Typography
                  ml={{ lg: showIcons && "22px", xs: showIcons && "18px" }}
                  sx={{
                    color: "#000000",
                    fontSize: {
                      lg: "16px",
                      xs: "14px",
                      fontWeight: "400",
                      letterSpacing: "0.5px",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
              <FormControlLabel
                sx={{
                  margin: 0,
                  "& span": {
                    p: 0,
                  },
                  "& svg": {
                    width: { lg: "36px", xs: "30px" },
                    height: { lg: "36px", xs: "30px" },
                  },
                }}
                value={item.value}
                control={<BpRadio />}
              />
            </Box>
          ))}
        </Box>
      </RadioGroup>
    </FormControl>
  )
}
