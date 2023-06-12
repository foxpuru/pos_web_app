import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 350, xs: 450 },
  bgcolor: "#FFFFFF",
  borderRadius: "44px",
  boxShadow: 24,
}

const options = [
  {
    label: "Comp Item",
    color: "1px solid #0000005e",
  },
  {
    label: "Move Item",
  },
  {
    label: "Item Note",
  },
  {
    label: "Edit Item",
  },
]

export default function CompitemPopup({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Box
          sx={{
            // borderBottom: "1px solid #00000052",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            pt={{ lg: "40px", xs: "20px" }}
            pb={{ lg: "30px", xs: "15px" }}
            sx={{
              color: "#000000",
              fontSize: {
                lg: "16px",
                xs: "14px",
                letterSpacing: "0.5px",
                fontWeight: "600",
              },
            }}
          >
            Veg. Balls In Hot Garlic Sauce
          </Typography>
          <Typography
            pb={{ lg: "40px", xs: "20px" }}
            sx={{
              color: "#000000",
              fontSize: {
                lg: "22px",
                xs: "18px",

                fontWeight: "500",
              },
            }}
          >
            ₹236.44
          </Typography>
        </Box>
        {options.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderTop: item.color ? item.color : "1px solid #D7DBDC",
              textAlign: "center",
              cursor: "pointer",
            }}
            // onClick={item.onClick ? item.onClick : handleClose}
            onClick={handleToggle}
          >
            <Typography
              py={{ lg: "20px", xs: "10px" }}
              sx={{
                color: "#000000",
                fontSize: {
                  lg: "16px",
                  xs: "14px",
                  fontWeight: "400",
                },
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Modal>
  )
}
