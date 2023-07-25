import { Image } from "@/components/styled-components"

import { Box, Card, CardMedia, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"

import IpadGrayImg from "@/assets/images/btn_ipad_gray.png"
import TableAddSection from "@/assets/images/btn_table_add.png"
import { FoodData } from "@/data/food/foodData"
import Link from "next/link"
import FooterFoodCategory from "@/components/FooterFoodCategory"
import { TableManagementData } from "@/data/tableManagement"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { BigTable, RoundTable, SquareTable } from "@/components/icons"
import { Matches } from "@/hooks/useCustomQuery"
import CustomLayout from "@/layouts/CustomLayout"
import { Encrypt } from "@/hooks/useEncryption"

function TableManagement() {
  const [showEdit, setShowEdit] = useState(false)

  const [sections, setSections] = useState(TableManagementData)

  const router = useRouter()

  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    if (deviceCodes.length > 11 && passcode) {
      // router.push("/table-management?category=5f485e594c585f4c4359")
    } else {
      router.push("/")
    }
  }, [deviceCodes])

  const OccupiedTableStyle = (isOccupied) => {
    return (
      isOccupied && {
        "& #Rectangle_1318-2,& #Ellipse_189-2": {
          fill: "#8BCDFF",
          strokeWidth: "0 !important",
        },
        "& #Rectangle_1318-3,& #Ellipse_189-3": {
          fill: "#0090FF",
        },
        "& #Rectangle_1319, & #Rectangle_1320, & #Rectangle_1327": {
          stroke: "#0090FF",
        },
        "& p": {
          color: "#FFFFFF !important",
        },
      }
    )
  }

  const BookedTableStyle = (isBooked) => {
    return (
      isBooked && {
        "& #Rectangle_1318-2,& #Ellipse_189-2": {
          fill: "#65eba4",
          strokeWidth: "0 !important",
        },
        "& #Rectangle_1318-3,& #Ellipse_189-3": {
          fill: "#00b153",
        },
        "& #Rectangle_1319, & #Rectangle_1320, & #Rectangle_1327": {
          stroke: "#00b153",
        },
        "& p": {
          color: "#FFFFFF !important",
        },
      }
    )
  }
  const TablesData = sections.find(
    (item) => item.path?.toLowerCase() === router.query?.category
  )

  const addTableSection = () => {
    console.log(
      "TablesData",
      // (TableManagementData.push = [
      //   ...TableManagementData,
      //   { category: "barr" },
      // ])
      sections
    )
    setSections([...sections, { category: "CAFE", path: Encrypt("CAFE") }])
  }

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
          <Box display="flex" flexWrap="wrap">
            {TablesData?.tables?.map((item) => (
              <Box
                key={item.id}
                sx={{
                  padding: { lg: "10px", xs: "8px" },
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
                    // height: { md: "180px", xs: "130px" },
                  },
                  ...OccupiedTableStyle(item.occupied),
                  ...BookedTableStyle(item.booked),
                  //  {item.booked && ...bookedTableStyle},
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
                    // height: { lg: "50px", xs: "40px" },
                    // width: { lg: "60px", xs: "50px" },
                    textAlign: "center",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    justifyContent: "end",

                    "&::after": {
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      width: "24px",
                      height: "18px",
                      content: item.time ? `'(${item.time})'` : "none",
                      color: "#FFFFFF",
                      fontSize: { lg: "13px", xs: "12px" },
                      fontWeight: "500",
                      letterSpacing: "0.42px",
                      bottom: "-18px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { lg: "22px", xs: "20px" },
                      fontWeight: "500",
                      letterSpacing: "0.9px",
                      color: "#A5ACAE",
                      width: "100%",
                      lineHeight: "18px !important",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.tableNumber.length > 1
                      ? item.tableNumber
                      : `0${item.tableNumber}`}
                  </Typography>
                </Box>
                {/* <Typography
                  sx={{
                    fontSize: { lg: "18px", xs: "16px" },
                    fontWeight: "500",
                    letterSpacing: "0.9px",
                    lineHeight: "18px !important",
                    color: "#A5ACAE",
                    width: "100%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.tableNumber.length > 1
                    ? item.tableNumber
                    : `0${item.tableNumber}`}
                </Typography> */}
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
          {sections.map((item) => (
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
        {router.query.type === "edit" && (
          <Box
            display="flex"
            alignItems="center"
            p={{ lg: "10px 16px 10px 16px", xs: "6px" }}
            sx={{ backgroundColor: "#D7DBDC" }}
          >
            <Image
              src={TableAddSection.src}
              alt="add table section"
              sx={{ width: { lg: "40px", xs: "26px" }, cursur: "pointer" }}
              onClick={() => addTableSection()}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

TableManagement.getLayout = (page) => (
  <CustomLayout
    blankHeader
    header={{ label: "table management" }}
    // showEdit={showEdit}
  >
    {page}
  </CustomLayout>
)
export default TableManagement
