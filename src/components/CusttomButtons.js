import { Button } from "@mui/material"

const style = ({ bgColor, color }) => {
  return {
    width: "100%",
    backgroundColor: bgColor,
    color,
    fontSize: { lg: "14px", xs: "12px" },
    letterSpacing: "0.5px",
    fontWeight: "400",
    borderRadius: "10px",

    "&:hover": {
      backgroundColor: `${bgColor} !important`,
    },
  }
}

export const PrimaryButton = ({ label, sx, ...props }) => {
  const styles = style({ bgColor: "#E57607", color: "#FFFFFF" })

  return (
    <Button
      {...props}
      sx={{
        ...styles,
        ...sx,
      }}
    >
      {label ? label : "DONE"}
    </Button>
  )
}

export const CancelButton = ({ label, sx, ...props }) => {
  const styles = style({ bgColor: "#5C6568", color: "#FFFFFF" })

  return (
    <Button
      {...props}
      sx={{
        ...styles,
        ...sx,
      }}
    >
      {label ? label : "CANCEL"}
    </Button>
  )
}
