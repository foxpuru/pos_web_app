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
import CompitemPopup from "./modals/CompItemPopup"
import useModalState from "@/hooks/useModalState"
import { useDispatch } from "react-redux"
import { handleAddToCart, handleRemoveFromCart } from "@/redux/slices/cartSlice"
import AddDiscount from "./modals/AddDiscount"

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

export default function FoodBillingCard({
  counterButton = true,
  discount = true,
  name,
  description,
  price,
  quantity,
  id,
  customFoodOptions,
}) {
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)
  const {
    isOpen: isOpenItemPopup,
    handleToggle: handleToggleItemPopup,
    handleOpen: handleOpenItemPopup,
    handleClose: handleCloseItemPopup,
  } = useModalState(false)

  const {
    isOpen: isOpenAddDiscount,
    handleToggle: handleToggleAddDiscount,
    handleOpen: handleOpenAddDiscount,
    handleClose: handleCloseAddDiscount,
  } = useModalState(false)

  const dispatch = useDispatch()
  // console.log("customFoodOptions", customFoodOptions.length)
  return (
    <>
      <Box
        p={{ lg: "10px", xs: "10px" }}
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {counterButton && (
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() =>
                dispatch(handleAddToCart({ id, name, description, price }))
              }
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
            </Box>
          )}
          <Box
            sx={{
              border: counterButton && "2px solid #5C6568",
              backgroundColor: !counterButton && "#D7DBDC",
              opactiy: "1",
              borderRadius: { lg: "6px", xs: "4px" },
              width: { lg: "28px", xs: "20px" },
              height: { lg: "28px", xs: "20px" },
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
              {quantity}
            </Typography>
          </Box>
          {counterButton && (
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => dispatch(handleRemoveFromCart({ id }))}
            >
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
          )}
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          gap={{ lg: "12px", xs: "10px" }}
        >
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            // pr={{ lg: "18px", xs: "14px" }}
            sx={{ cursor: "pointer" }}
            onClick={handleOpenItemPopup}
            // }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                color: "#000000",
                fontSize: { lg: "16px", xs: "12px" },
              }}
            >
              {name}
            </Typography>
            <Box display="flex" flexWrap="wrap" alignContent="flex-start">
              {!customFoodOptions ? (
                <Typography
                  sx={{
                    fontWeight: "400 !important",
                    color: "#A5ACAE",
                    fontSize: { lg: "14px", xs: "10px" },
                  }}
                >
                  {name}
                </Typography>
              ) : (
                customFoodOptions.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontWeight: "400 !important",
                      color: "#A5ACAE",
                      fontSize: { lg: "14px", xs: "10px" },
                      mr: { lg: "8px", xs: "6px" },
                    }}
                  >
                    {item.label}
                    {/* {customFoodOptions.length > 1 && " "} */}
                  </Typography>
                ))
              )}
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="end"
            // width="80px"
          >
            <Typography
              sx={{
                fontWeight: "500",
                color: "#000000",
                fontSize: { lg: "15px", xs: "11px" },
                mb: { lg: "8px", xs: "6px" },
              }}
            >
              {price}
            </Typography>
            {discount && (
              <Avatar
                sx={{
                  // position: "absolute",
                  // cursor: "pointer",
                  // top: "40px",
                  // right: "16px",
                  // bottom: "8px",
                  backgroundColor: "#D7DBDC",
                  borderRadius: "6px",
                  width: { lg: "28px", xs: "18px" },
                  height: { lg: "28px", xs: "22px" },
                  cursor: "pointer",
                }}
                // onClick={handleOpenItemPopup}
                onClick={handleOpenAddDiscount}
              >
                <OfferOnFoodIcon />
              </Avatar>
            )}
          </Box>
        </Box>
      </Box>

      <CompitemPopup
        isOpen={isOpenItemPopup}
        handleToggle={handleToggleItemPopup}
        handleOpen={handleOpenItemPopup}
        handleClose={handleCloseItemPopup}
      />
      <AddDiscount
        // setDiscountValue={(e) => setDiscountValue(e.target.value)}
        isOpen={isOpenAddDiscount}
        handleToggle={handleToggleAddDiscount}
        handleOpen={handleOpenAddDiscount}
        handleClose={handleCloseAddDiscount}
      />
    </>
  )
}
