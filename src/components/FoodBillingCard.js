import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import FolderIcon from "@mui/icons-material/Folder"
import DeleteIcon from "@mui/icons-material/Delete"
import {
  AddFoodToCartIcon,
  OfferOnFoodIcon,
  RemoveFoodToCartIcon,
} from "./icons"

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  )
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

export default function FoodBillingCard() {
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

  return (
    <Box
      p={{ lg: "10px", xs: "6px" }}
      sx={{
        borderBottom: "2px solid #e5ebec",
        position: "relative",
        display: "flex",
      }}
      width="100%"
    >
      <Box
        mr={{ lg: "10px", xs: "6px" }}
        sx={{
          display: "grid",
          // flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: "#00b15325",
            borderRadius: "6px",
            width: { lg: "22px", xs: "18px" },
            height: { lg: "28px", xs: "22px" },
          }}
        >
          <AddFoodToCartIcon />
        </Avatar>
        <Box
          sx={{
            border: "2px solid #5C6568",
            opactiy: "1",
            borderRadius: "6px",
            width: { lg: "32px", xs: "22px" },
            height: { lg: "32px", xs: "22px" },
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "14px", xs: "10px" },
              textAlign: "center",
              opacity: 1,
            }}
          >
            1
          </Typography>
        </Box>
        <Avatar
          sx={{
            backgroundColor: "#D7DBDC",
            borderRadius: "6px",
            width: { lg: "22px", xs: "18px" },
            height: { lg: "28px", xs: "22px" },
          }}
        >
          <RemoveFoodToCartIcon />
        </Avatar>
      </Box>
      <Box width="100%" display="grid" alignItems="center">
        <Box
          display="flex"
          alignItems="start"
          justifyContent="space-between"
          width="100%"
          gap={{ lg: "40px", xs: "10px" }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#000000",
              fontSize: { lg: "16px", xs: "12px" },
            }}
          >
            veg. balls in hot garlic
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              color: "#000000",
              fontSize: { lg: "15px", xs: "11px" },
            }}
          >
            ₹236.44
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "400 !important",
              color: "#A5ACAE",
              fontSize: { lg: "14px", xs: "10px" },
              maxWidth: { lg: "270px", xs: "160px" },
            }}
          >
            veg. balls in hot garlic sauce
          </Typography>
        </Box>
      </Box>
      <Avatar
        sx={{
          position: "absolute",
          // top: "40px",
          right: "16px",
          bottom: "8px",
          backgroundColor: "#D7DBDC",
          borderRadius: "6px",
          width: { lg: "28px", xs: "18px" },
          height: { lg: "28px", xs: "22px" },
        }}
      >
        <OfferOnFoodIcon />
      </Avatar>
    </Box>
  )
}
