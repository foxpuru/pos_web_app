import React from "react"
import FoodBillingCard from "@/components/FoodBillingCard"
import { Box, Divider, List, Typography } from "@mui/material"
import { ReportsSideBarData } from "@/data/reportsSideBarSectionData"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import AddDiscount from "./modals/AddDiscount"
import useModalState from "@/hooks/useModalState"

function BillingItemList({ reports }) {
  const cardData = useSelector((state) => state.cart.items)
  console.log("payment page card data", cardData)
  const router = useRouter()

  // const {
  //   isOpen: isOpenAddDiscount,
  //   handleToggle: handleToggleAddDiscount,
  //   handleOpen: handleOpenAddDiscount,
  //   handleClose: handleCloseAddDiscount,
  // } = useModalState(false)

  return (
    <>
      {reports == true ? (
        <Box
          maxWidth={{ lg: "370px", xs: "230px" }}
          minWidth={{ lg: "370px", xs: "230px" }}
          height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
          overflow="auto"
          bgcolor="#FFFFFF"
        >
          {ReportsSideBarData.map((item) => (
            <Box
              key={item.path}
              onClick={() => router.push(item.path)}
              bgcolor={router.pathname === item.path ? "#EEF5F6" : undefined}
              sx={{ cursor: "pointer" }}
            >
              <Box
                p={{ lg: "22px", xs: "12px" }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "12px",
                      color:
                        router.pathname === item.path ? "#E57607" : "#B1B6B9",
                      fontWeight: router.pathname === item.path ? "500" : "400",
                      letterSpacing: "0.6px",
                    },
                  }}
                >
                  {item.section}
                </Typography>
              </Box>
              <Divider light />
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          borderTop="2px solid #e5ebec"
          maxWidth={{ lg: "370px", xs: "230px" }}
          minWidth={{ lg: "370px", xs: "230px" }}
          height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
          overflow="auto"
          bgcolor="#FFFFFF"
        >
          <Box
            height={{
              lg: "calc(100vh - 60px - 174px)",
              xs: "calc(100vh - 166px)",
            }}
            overflow="auto"
          >
            {cardData.map((item) => (
              <FoodBillingCard
                {...item}
                key={item.id}
                discount={false}
                counterButton={false}
              />
            ))}
          </Box>

          <Box pt={{ lg: "44px", xs: "22px" }}>
            <List component="nav" aria-label="mailbox folders">
              <Divider light />
              <Box
                p={{ lg: "8px 10px 8px 10px", xs: "4px 10px 4px 10px" }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // cursor: "pointer",
                }}
                // onClick={handleOpenAddDiscount}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "12px",
                      color: "#FF4141",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                    },
                  }}
                >
                  Discount
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "12px",
                      color: "#FF4141",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                    },
                  }}
                >
                  ₹0.00
                </Typography>
              </Box>
              <Divider light />
              <Box
                p={{ lg: "8px 10px 8px 10px", xs: "4px 10px 4px 10px" }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "12px",
                      color: "#A5ACAE",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                    },
                  }}
                >
                  Subtotal
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "12px",
                      color: "#000000",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                    },
                  }}
                >
                  ₹1562.62
                </Typography>
              </Box>
              <Divider light />
              <Box
                p={{ lg: "8px 10px 8px 10px", xs: "4px 10px 4px 10px" }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "12px",
                      color: "#A5ACAE",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                    },
                  }}
                >
                  Tax
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "12px",
                      color: "#000000",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                    },
                  }}
                >
                  ₹281.28
                </Typography>
              </Box>
              <Divider light />
            </List>
          </Box>
        </Box>
      )}
      {/* <AddDiscount
        isOpen={isOpenAddDiscount}
        handleToggle={handleToggleAddDiscount}
        handleOpen={handleOpenAddDiscount}
        handleClose={handleCloseAddDiscount}
      /> */}
    </>
  )
}

export default BillingItemList
