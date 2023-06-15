import { Button } from "@mui/material"

export const CustomButton = ({ label, styles, ...props }) => {
  return (
    <Button
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        color: "#000000 !important",
        fontSize: { lg: "14px", xs: "12px" },
        fontWeight: "400",
        textTransform: "capitalize",
        borderRadius: "8px",

        "&:hover": {
          backgroundColor: "transparent !important",
        },
        ...styles,
      }}
      {...props}
    >
      {label}
    </Button>
  )
}
