import { Image } from "@/components/styled-components/tableDetails"
import { SettingsData } from "@/data/settingsData"
import MainLayout from "@/layouts/MainLayout"
import SettingsLayout from "@/layouts/settingLayout"
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import React from "react"
import LayoutGridImg from "../assets/images/ic_layout_grid.png"
import PrintReceiptGreenImg from "../assets/images/ic_print_receipt_green_big.png"

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(25px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}))

function Settings() {
  return (
    <Box p={{ lg: "22px", xs: "16px" }} bgcolor="#EEF5F6">
      <Box
        border="1px solid #D7DBDC"
        borderRadius="10px 10px 10px 10px"
        bgcolor="#FFFFFF"
      >
        {SettingsData.map((item) => (
          <Box key={item.section}>
            <Box
              borderRadius="10px 10px 0px 0px"
              bgcolor="#E57607"
              p={{ lg: "7px 22px 7px 22px", xs: "5px 16px 5px 16px" }}
            >
              <Typography
                color="white"
                fontWeight="500"
                letterSpacing="0.65px"
                textTransform="uppercase"
                textSize={{ lg: "16px", xs: "14px" }}
              >
                {item.section}
              </Typography>
            </Box>
            <Box
              px={{ lg: "22px", xs: "16px" }}
              pb={{ lg: "22px", xs: "16px" }}
            >
              {item.options.map((option) => (
                <>
                  {option.borderTop && (
                    <Box
                      pt={{ lg: "22px", xs: "16px" }}
                      borderBottom={option.borderTop && "1px solid #ffffff"}
                    ></Box>
                  )}
                  <Box
                    py={{ lg: "8px", xs: "6px" }}
                    minHeight={{ lg: "52px", xs: "40px" }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom="1px solid #D7DBDC"
                    borderTop={option.borderTop && "1px solid #D7DBDC"}
                  >
                    {option.label && (
                      <Typography
                        color="Black"
                        fontWeight="400"
                        letterSpacing="0.6px"
                        textSize={{ lg: "14px", xs: "12px" }}
                      >
                        {option.label}
                      </Typography>
                    )}
                    {option.gridRow && (
                      <Box
                        display="flex"
                        alignItems="center"
                        py={{ lg: "12px", xs: "10px" }}
                      >
                        <Image
                          src={LayoutGridImg.src}
                          alt="layout grid"
                          sx={{
                            width: { lg: "38px", xs: "30px" },
                            height: { lg: "38px", xs: "30px" },
                          }}
                        />
                        <Box
                          display="flex"
                          flexDirection="column"
                          textAlign="left"
                          ml={{ lg: "22px", xs: "16px" }}
                        >
                          <Typography
                            color="Black"
                            fontWeight="400"
                            letterSpacing="0.6px"
                            textSize={{ lg: "14px", xs: "12px" }}
                          >
                            {option.gridRow.label}
                          </Typography>
                          <Typography
                            color="#A5ACAE"
                            fontWeight="400"
                            letterSpacing="0.5px"
                            textSize={{ lg: "12px", xs: "10px" }}
                          >
                            {option.gridRow.description}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    {option.gridRowSection && (
                      <Box display="grid" width="100%">
                        <Typography
                          color="Black"
                          fontWeight="400"
                          letterSpacing="0.6px"
                          textSize={{ lg: "14px", xs: "12px" }}
                        >
                          {option.gridRowSection.Mainlabel}
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          py={{ lg: "12px", xs: "10px" }}
                        >
                          <Box display="flex" alignItems="center">
                            <Image
                              src={PrintReceiptGreenImg.src}
                              alt="layout grid"
                              sx={{
                                width: { lg: "38px", xs: "30px" },
                                height: { lg: "38px", xs: "30px" },
                              }}
                            />
                            <Box
                              display="flex"
                              flexDirection="column"
                              textAlign="left"
                              ml={{ lg: "22px", xs: "16px" }}
                            >
                              <Typography
                                color="#A5ACAE"
                                fontWeight="400"
                                letterSpacing="0.5px"
                                textSize={{ lg: "12px", xs: "10px" }}
                              >
                                {option.gridRowSection.description}
                              </Typography>
                            </Box>
                          </Box>
                          <Button
                            sx={{
                              height: { lg: "34px", xs: "28px" },
                              p: 0,

                              width: { lg: "180px", xs: "130px" },
                              color: "#FFFFFF",
                              fontSize: { lg: "16px", xs: "12px" },
                              fontWeight: "400",
                              textTransform: "capitalize",
                              backgroundColor: "#E57607",
                              borderRadius: "10px",
                            }}
                          >
                            {option.gridRowSection.button}
                          </Button>
                        </Box>
                      </Box>
                    )}
                    {option.rightText && (
                      <Typography
                        color="Black"
                        fontWeight="400"
                        letterSpacing="0.6px"
                        textSize={{ lg: "14px", xs: "12px" }}
                      >
                        {option.rightText}
                      </Typography>
                    )}
                    {option.switch && (
                      <FormControlLabel
                        sx={{
                          margin: 0,
                          "& span": {
                            margin: 0,
                          },
                        }}
                        control={
                          <IOSSwitch
                            sx={{ m: 1 }}
                            defaultChecked={option.isSwitched ? true : false}
                          />
                        }
                      />
                    )}
                    {option.button && (
                      <Button
                        sx={{
                          height: { lg: "34px", xs: "28px" },
                          p: 0,

                          width: { lg: "180px", xs: "130px" },
                          color: "#FFFFFF",
                          fontSize: { lg: "16px", xs: "12px" },
                          fontWeight: "400",
                          textTransform: "capitalize",
                          backgroundColor: "#E57607",
                          borderRadius: "10px",
                        }}
                      >
                        {option.button}
                      </Button>
                    )}
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

Settings.getLayout = (page) => (
  <SettingsLayout settingsHeader>{page}</SettingsLayout>
)
export default Settings
