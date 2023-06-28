import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Divider from "@mui/material/Divider"
import { styled, alpha } from "@mui/material/styles"
import {
  CardCardsIcon,
  CardCashIcon,
  CardGiftIcon,
  PrintIcon,
  PrintIconWhite,
  SaveCheckRedIcon,
  SearchGreyIcon,
} from "@/components/icons"

import PaymentMethodArrowImg from "@/assets/images/ic_payment_method_arrow.png"
import { Image } from "@/components/styled-components/tableDetails"
import MainLayout from "@/layouts/MainLayout"
import TransactionDateCard from "@/components/TransactionDateCard"
import InputBase from "@mui/material/InputBase"
import { ListDivider } from "@/components/custom-components/ListDivider"
import TransactionSideBar from "@/components/transaction-side-bar"
import {
  GuestDetailsConsumer,
  GuestDetailsProvider,
} from "@/context/guestDetailsContext"
import PaymentLayout from "@/layouts/PaymentLayout"
import ReportCard from "@/components/reportsCard"
import { CloseDayReportData } from "@/data/closeDayReportData"
import DatePicker from "@/components/DatePicker"
import { SalesReportBalanceSectionData } from "@/data/salesReportBalanceSectionData"
import DataTable from "@/components/DataTable"
import DateTimePicker from "@/components/modals/DatePicker"
import useModalState from "@/hooks/useModalState"
import Table from "@/components/Table"

const coloums = [
  {
    name: "ITEM NAME",
    selector: (row) => row.name,
  },
  {
    name: "SALE COUNT",
    selector: (row) => row.count,
    center: true,
  },
  {
    name: "TOTAL COST",
    selector: (row) => row.cost,
    right: true,
  },
]
const data = [
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
  {
    name: "Coca-Cola",
    count: 2,
    cost: "100",
  },
  {
    name: "Bufala Basilico",
    count: 10,
    cost: "170",
  },
]

function SalesReport() {
  const { isOpen, handleToggle, handleOpen, handleClose } = useModalState(false)
  return (
    <Box display="flex" flexDirection="column" gap="22px">
      <Box bgcolor="white" borderRadius="10px">
        <Grid
          container
          alignItems="end"
          spacing={{ lg: 3, xs: 1 }}
          px={{ lg: "32px", xs: "12px" }}
          py={{ lg: "12px", xs: "11px" }}
          pb={{ lg: "22px", xs: "22px" }}
          // bgcolor="#FFFFFF"
        >
          <Grid
            item
            xs={5}
            display="flex"
            flexDirection={"column"}
            alignItems="start"
          >
            <Typography
              mb="8px"
              color="#000000"
              fontSize={{ lg: "14px", xs: "12px" }}
              fontWeight="400"
              letterSpacing="0.5px"
            >
              Start Date
            </Typography>
            <DateTimePicker
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          </Grid>
          {/* <Grid
            item
            xs={5}
            display="flex"
            flexDirection={"column"}
            alignItems="start"
          >
            <Typography
              mb="8px"
              color="#000000"
              fontSize={{ lg: "14px", xs: "12px" }}
              fontWeight="400"
              letterSpacing="0.5px"
            >
              End Date
            </Typography>
            <DateTimePicker
              isOpen={isOpen}
              handleToggle={handleToggle}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          </Grid> */}
          <Grid
            item
            xs={2}
            display="flex"
            flexDirection={"column"}
            alignItems="start"
          >
            <Button
              sx={{
                height: { lg: "39px", xs: "36.13px" },
                color: "#FFFFFF",
                fontSize: { lg: "14px", xs: "14px" },
                fontWeight: "400",
                letterSpacing: "0.6px",
                textTransform: "Capitalize",
                backgroundColor: "#E57607",
                borderRadius: "10px",

                "&:hover": {
                  backgroundColor: "#E57607",
                },

                "& svg": {
                  width: { lg: "32px", xs: "24px" },
                  height: { lg: "32px", xs: "24px" },
                },
              }}
              fullWidth
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        height={{
          lg: "calc(100vh - 64px - 146px - 22px)",
          xs: "calc(100vh - 64px - 114px - 22px)",
        }}
        overflow="auto"
        // display="grid"
        bgcolor="#FFFFFF"
        border="1px solid #D7DBDC"
        borderRadius="10px"
        sx={{ opacity: 1 }}
        textAlign="center"
      >
        <Box
          py={{ lg: "22px", xs: "22px" }}
          display="flex"
          justifyContent="center"
          flexDirection="row"
          gap={{ lg: "6px", xs: "6px" }}
        >
          <Typography
            color="#000000"
            fontWeight="500"
            fontSize={{ lg: "22px", xs: "16px" }}
            letterSpacing="0.8px"
          >
            SALES SUMMARY: {""}
          </Typography>
          <Typography
            color="#A1A1A1"
            fontWeight="500"
            fontSize={{ lg: "22px", xs: "16px" }}
            letterSpacing="0.8px"
          >
            OVERVIEW
          </Typography>
        </Box>

        <Box position="relative">
          <ListDivider
            styles={{
              borderBottomWidth: "2px",
              borderColor: "#D7DBDC",
            }}
          />
          <Image
            src={PaymentMethodArrowImg.src}
            alt="Payment Method Arrow"
            sx={{
              position: "absolute",
              top: "0px",
              left: "50%",
              transform: "translateX(-50%)",
              width: { lg: "22px", xs: "14px" },
            }}
          />
        </Box>

        <Grid
          container
          item
          spacing={{ lg: 3, xs: 1 }}
          px={{ lg: "22px", xs: "12px" }}
          py={{ lg: "44px", xs: "22px" }}
        >
          {CloseDayReportData.map((item, index) => (
            <Grid item xs={6} key={index}>
              <ReportCard data={item} />
            </Grid>
          ))}
        </Grid>
        <Box p={{ lg: "22px", xs: "12px" }}>
          <Box border="1px solid #D7DBDC" borderRadius="8px">
            {SalesReportBalanceSectionData.map((item, index) => (
              <Box key={index}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                  px={{ lg: "10px", xs: "10px" }}
                  py={{ lg: "8px", xs: "8px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: "#5C6568",
                      letterSpacing: "0.53px",
                      fontSize: { lg: "15px", xs: "11px" },
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: "#000000",
                      letterSpacing: "0.55px",
                      fontSize: { lg: "16px", xs: "12px" },
                    }}
                  >
                    {item.number}
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    borderBottomWidth: "1px",
                    borderColor: "#D7DBDC",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        {/* <DataTable /> */}
        <Box p={{ lg: "22px", xs: "12px" }}>
          <Table columns={coloums} data={data} />
        </Box>
      </Box>
    </Box>
  )
}

SalesReport.getLayout = (page) => (
  <PaymentLayout isPaymentMethod={true} reports={true}>{page}</PaymentLayout>
)
export default SalesReport
