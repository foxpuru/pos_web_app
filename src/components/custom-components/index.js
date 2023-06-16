import { Button } from "@mui/material"

export const CustomButton = ({ label, styles, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        color: "#000000",
        fontSize: { lg: "14px", xs: "12px" },
        fontWeight: "400",
        borderRadius: "10px",
        border: "1px solid #A5ACAE",

        "&:hover": {
          backgroundColor: "transparent !important",
        },
        ...styles,
      }}
    >
      {label}
    </Button>
  )
}
