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

    "& svg": {
      width: { lg: "32px", xs: "24px" },
      height: { lg: "32px", xs: "24px" },
    },
  }
}

const largetBtnPrimaryStyle = (large) => {
  return (
    large && {
      height: { lg: "60px", xs: "50px" },
      fontSize: { lg: "18px", xs: "16px" },
      fontWeight: "400",
      letterSpacing: "0.6px",
      border: 0,
      textTransform: "uppercase",
    }
  )
}

const clearBtnPrimaryStyle = (clear) => {
  return (
    clear && {
      border: "1px solid #A5ACAE",
      position: "absolute",
      height: { lg: "28px", xs: "22px" },
      width: { lg: "60px", xs: "50px" },
      minWidth: { lg: "50px", xs: "50px" },
      backgroundColor: "transparent",
      color: "#000 !important",
      fontSize: { lg: "12px", xs: "10px" },
      fontWeight: "400",
      textTransform: "capitalize",
      borderRadius: "8px",

      "&:hover": {
        backgroundColor: "transparent !important",
      },
      top: "50%",
      transform: "translate(-50%, -50%)",
      right: { lg: "-19px", xs: "-15px" },
    }
  )
}

export const PrimaryButton = ({ label, sx, ...props }) => {
  const styles = style({ bgColor: "#E57607", color: "#FFFFFF" })

  return (
    <Button
      {...props}
      sx={{
        // height: props.large && { lg: "60px", xs: "50px" },
        ...styles,
        ...largetBtnPrimaryStyle(props.large),
        ...clearBtnPrimaryStyle(props.clear),
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
