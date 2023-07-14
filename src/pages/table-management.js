import { Image } from "@/components/styled-components"
import SettingsLayout from "@/layouts/settingLayout"
import { Box, Card, CardMedia, Typography } from "@mui/material"
import React, { useEffect } from "react"

import IpadGrayImg from "@/assets/images/btn_ipad_gray.png"
import { FoodData } from "@/data/food/foodData"
import Link from "next/link"
import FooterFoodCategory from "@/components/FooterFoodCategory"
import { TableManagementData } from "@/data/tableManagement"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { BigTable, RoundTable, SquareTable } from "@/components/icons"
import { Matches } from "@/hooks/useCustomQuery"

function TableManagement() {
  const router = useRouter()

  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    if (deviceCodes.length > 11 && passcode) {
      router.push("/table-management?category=5f485e594c585f4c4359")
    } else {
      router.push("/")
    }
  }, [deviceCodes])

  const TablesData = TableManagementData.find(
    (item) => item.path?.toLowerCase() === router.query?.category
  )
  return (
    <Box>
      <Box display="flex" width="100%" alignItems="start">
        <Box
          height={{
            lg: "calc(100vh - 64px - 60px)",
            xs: "calc(100vh - 64px - 38px)",
          }}
          overflow="auto"
          width="100%"
          // p={{ lg: "22px", xs: "18px" }}
        >
          <Box display="flex" flexWrap="wrap" gap={{ lg: "22px", xs: "18px" }}>
            {TablesData?.tables.map((item) => (
              <Box
                key={item.id}
                sx={{
                  padding: { lg: "3px", xs: "2px" },
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": {
                    width: { md: "160px", xs: "130px" },
                    height: { md: "160px", xs: "130px" },
                    // width: Matches ? "190px" : "100px",
                    // height: Matches ? "190px" : "100px",
                  },
                  "& #Rectangle_1318": {
                    width: { md: "180px", xs: "150px" },
                    height: { md: "180px", xs: "130px" },
                  },
                }}
              >
                {item.type === "round" ? (
                  <RoundTable />
                ) : item.type === "square" ? (
                  <SquareTable />
                ) : (
                  <BigTable />
                )}

                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",

                    // top: "50%",
                    // left: "50%",
                    // transform: "translate(-50%)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { lg: "13px", xs: "9px" },
                      fontWeight: "500",
                      color: "#000000",
                      width: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.id}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        bgcolor="white"
        boxShadow="0px -3px 6px #0000001A"
        sx={{
          position: "fixed",
          // overflow: "auto",
          bottom: 0,
          left: 0,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          p={{ lg: "10px 16px 10px 16px", xs: "6px" }}
          sx={{ backgroundColor: "#D7DBDC" }}
        >
          <Image
            src={IpadGrayImg.src}
            alt="search"
            sx={{ width: { lg: "40px", xs: "26px" } }}
          />
        </Box>
        <Box
          sx={{
            width: {
              lg: "calc(100% - 72px - 72px)",
              xs: "calc(100% - 38px - 38px)",
            },
            alignItems: "center",
            // justifyContent: "center",
            display: "flex",
            // height: "60px",
            overflow: "auto",
            // gap: { lg: "40px", xs: "22px" },
            px: { lg: "20px", xs: "20px" },
            "& a:hover": { textDecoration: "none" },
          }}
        >
          {TableManagementData.map((item) => (
            <Link
              href={`/table-management?category=${item.path}`}
              key={item.category}
            >
              <FooterFoodCategory
                key={item.category}
                path={item.path}
                title={item.category}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

TableManagement.getLayout = (page) => (
  <SettingsLayout settingsHeader>{page}</SettingsLayout>
)
export default TableManagement
