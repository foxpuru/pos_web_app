import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Divider from "@mui/material/Divider";

import {
  CardCardsIcon,
  CardCashIcon,
  CardGiftIcon,
  EmailIconWhite,
  PrintIcon,
  PrintIconWhite,
  SaveCheckRedIcon,
} from "@/components/icons";

import PaymentMethodArrowImg from "../assets/images/ic_payment_method_arrow.png";
import CheckGreenImg from "../assets/images/ic_check_green.png";
import { Image } from "@/components/styled-components";

import useModalState from "@/hooks/useModalState";
import { PrimaryButton } from "@/components/CusttomButtons";
import PrinterError from "@/components/modals/PrinterError";
import CustomLayout from "@/layouts/CustomLayout";
import { Encrypt } from "@/hooks/useEncryption";
import EmailRecipt from "@/components/modals/EmailReceipt";

function PaymentCompleted() {
  const router = useRouter();
  const { isOpen, handleToggle, handleOpen, handleClose } =
    useModalState(false);
  const {
    isOpen: isOpenEmailReceipt,
    handleToggle: handleToggleEmailReceipt,
    handleOpen: handleOpenEmailReceipt,
    handleClose: handleCloseEmailReceipt,
  } = useModalState(false);
  return (
    <>
      <Box textAlign="center">
        <Box
          py={{ lg: "22px", xs: "22px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src={CheckGreenImg.src}
            alt="check green"
            sx={{ width: { lg: "60px", xs: "40px" } }}
          />

          <Typography
            mt={{ lg: "20px", xs: "20px" }}
            color="#000000"
            fontWeight="400"
            fontSize={{ lg: "40px", xs: "28px" }}
            letterSpacing="0.7px"
          >
            ₹1843.90
          </Typography>
          <Typography
            color="#A1A1A1"
            fontWeight="400"
            fontSize={{ lg: "16px", xs: "12px" }}
            letterSpacing="0.53px"
          >
            Total Amount Paid
          </Typography>
        </Box>

        <Box position="relative">
          <Divider sx={{ borderBottomWidth: "1px", borderColor: "#D7DBDC" }} />
          <Grid container p={{ lg: "20px", xs: "20px" }}>
            <Grid item xs>
              <Typography
                color="#000000"
                fontWeight="400"
                fontSize={{ lg: "40px", xs: "28px" }}
                letterSpacing="0.7px"
              >
                ₹1843.90
              </Typography>
              <Typography
                color="#A1A1A1"
                fontWeight="400"
                fontSize={{ lg: "16px", xs: "12px" }}
                letterSpacing="0.53px"
                mb={{ lg: "12px", xs: "10px" }}
              >
                Total Tenderd
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs>
              <Typography
                color="#000000"
                fontWeight="400"
                fontSize={{ lg: "40px", xs: "28px" }}
                letterSpacing="0.7px"
              >
                ₹0.00
              </Typography>
              <Typography
                color="#A1A1A1"
                fontWeight="400"
                fontSize={{ lg: "16px", xs: "12px" }}
                letterSpacing="0.53px"
                mb={{ lg: "12px", xs: "10px" }}
              >
                Change Due
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid
        container
        item
        spacing={{ lg: 4, xs: 2 }}
        pt={{ lg: "22px", xs: "18px" }}
        px={{ lg: "22px", xs: "18px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={4} xs={6}>
          <PrimaryButton
            large
            startIcon={<PrintIconWhite />}
            onClick={handleOpen}
            label="print receipt"
          />
        </Grid>
        <Grid item lg={4} xs={6}>
          <PrimaryButton
            large
            startIcon={<EmailIconWhite />}
            onClick={handleOpenEmailReceipt}
            label="email receipt"
          />
        </Grid>
        <Grid item lg={8} xs={12}>
          <PrimaryButton
            large
            onClick={() => router.push(`/food?category=${Encrypt("chinese")}`)}
            label="Done"
            sx={{
              backgroundColor: "#00B153",

              "&:hover": {
                backgroundColor: "#00B153 !important",
              },
            }}
          />
        </Grid>
      </Grid>

      <PrinterError
        isOpen={isOpen}
        handleToggle={handleToggle}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <EmailRecipt
        isOpen={isOpenEmailReceipt}
        handleToggle={handleToggleEmailReceipt}
        handleOpen={handleOpenEmailReceipt}
        handleClose={handleCloseEmailReceipt}
      />
    </>
  );
}

PaymentCompleted.getLayout = (page) => (
  <CustomLayout paymentMethod header={{ label: "check total" }}>
    {page}
  </CustomLayout>
);
export default PaymentCompleted;
