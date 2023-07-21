import FoodBillingCard from "@/components/FoodBillingCard";
import FoodCard from "@/components/FoodCard";
import { FoodData } from "@/data/food/foodData";
import FoodLayout from "@/layouts/FoodLayout";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { PrintIcon, SaveCheckRedIcon } from "@/components/icons";
import { useSelector } from "react-redux";
import CustomCards from "@/components/Food/customFood";
import AddDiscount from "@/components/modals/AddDiscount";
import useModalState from "@/hooks/useModalState";
import ReactNumberFormat from "@/components/ReactNumberFormat";

import FoodSlicesCard from "@/components/Food/FoodSlidesCards";
import { PrimaryButton } from "@/components/CusttomButtons";
import PrinterError from "@/components/modals/PrinterError";

const encrypt = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  const text = salt
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
  return text;
};

const decrypt = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  const text = salt
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
  return text;
};

console.log("encrypt", encrypt("naresh"));
console.log("decrypt", decrypt(encrypt("naresh")));

function ChineseFood() {
  const style = {
    bgcolor: "background.paper",
  };
  const router = useRouter();
  const foodItems = FoodData.find(
    (food) => food.path?.toLowerCase() === router.query?.category
  );
  // console.log("router query", router.query?.foodType)
  const cardData = useSelector((state) => state.cart.items);
  // console.log("cardData", cardData)

  // const [showCustom, setShowCustom] = useState(false)
  const [customizeFoodItem, setCustomizeFoodItem] = useState(null);
  const [slidesItem, setSlidesItem] = useState(null);
  // console.log("customizeFoodItem", customizeFoodItem)

  const [discountValue, setDiscountValue] = useState();
  const {
    isOpen: isOpenAddDiscount,
    handleToggle: handleToggleAddDiscount,
    handleOpen: handleOpenAddDiscount,
    handleClose: handleCloseAddDiscount,
  } = useModalState(false);

  const {
    isOpen: isOpenPrinterError,
    handleToggle: handleTogglePrinterError,
    handleOpen: handleOpenPrinterError,
    handleClose: handleClosePrinterError,
  } = useModalState(false);
  return (
    <>
      <Box display="flex" width="100%" alignItems="start">
        {router.query?.foodType === "custom" ? (
          // {customizeFoodItem ? (
          <CustomCards foodItems={customizeFoodItem} />
        ) : router.query?.foodType === "slides" ? (
          <FoodSlicesCard foodItems={slidesItem} />
        ) : (
          <Box
            height={{
              lg: "calc(100vh - 64px - 60px)",
              xs: "calc(100vh - 64px - 38px)",
            }}
            overflow="auto"
            width="100%"
            p={{ lg: "22px", xs: "18px" }}
          >
            <Box
              display="flex"
              flexWrap="wrap"
              gap={{ lg: "22px", xs: "18px" }}
            >
              {foodItems?.foods.map((food, index) => (
                <FoodCard
                  setCustomizeFoodItem={(e) => setCustomizeFoodItem(e)}
                  setSlidesItem={(e) => setSlidesItem(e)}
                  food={food}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        )}
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
              lg: "calc(100vh - 60px - 290px)",
              xs: "calc(100vh - 250px)",
            }}
            overflow="auto"
          >
            {cardData.map((item) => (
              <FoodBillingCard {...item} key={item.id} />
            ))}
          </Box>
          <Box pt={{ lg: "44px", xs: "22px" }}>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider light />
              <Box
                p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleOpenAddDiscount}
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
                {/* <ReactNumberFormat
                  // value={layout === "%" ? percentage : cash}
                  value={discountValue}
                  onChange={(e) => {
                    // if (layout === "%") {
                    //   setPercentage(e.target.value)
                    // } else {
                    //   setCash(e.target.value)
                    // }
                    setDiscountValue(e.target.value)
                  }}
                  // placeholder={layout === "%" ? "0%" : "$0"}
                  placeholder="₹0.00"
                  // suffix={layout === "%" ? "%" : undefined}
                  prefix="₹"
                  name="cash"
                /> */}
              </Box>
              <Divider light />
              <Box
                p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
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
                p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
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

              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={2}
                p={{ lg: "8px 10px 8px 10px", xs: "4px 6px 4px 6px" }}
                // display="flex"
                // flexDirection="row"
                // width="100%"
              >
                <PrimaryButton
                  sx={{
                    height: { lg: undefined, xs: "40px" },
                    color: "#E57607",
                    fontSize: { lg: "16px", xs: "12px" },
                    fontWeight: "500",
                    border: 0,
                    letterSpacing: "0.5px",
                    backgroundColor: "#EEF5F6",

                    "& svg": {
                      width: { lg: "32px", xs: "24px" },
                      height: { lg: "32px", xs: "24px" },
                    },
                    "&:hover": {
                      backgroundColor: "#EEF5F6 !important",
                    },
                  }}
                  startIcon={<PrintIcon />}
                  onClick={handleOpenPrinterError}
                  label="Print"
                />

                <PrimaryButton
                  sx={{
                    height: { lg: undefined, xs: "40px" },
                    color: "#00B153",
                    fontSize: { lg: "16px", xs: "12px" },
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    backgroundColor: "#EEF5F6",

                    "& svg": {
                      width: { lg: "32px", xs: "24px" },
                      height: { lg: "32px", xs: "24px" },
                    },
                    "&:hover": {
                      backgroundColor: "#EEF5F6 !important",
                    },
                  }}
                  fullWidth
                  startIcon={<SaveCheckRedIcon />}
                  label="Send"
                />
              </Stack>

              <Box>
                <Button
                  onClick={() => router.push("/payment-methods")}
                  sx={{
                    height: { lg: "60px", xs: "38px" },
                    color: "#FFFFFF",
                    justifyContent: "space-between",

                    fontWeight: "300",
                    letterSpacing: "0.8px",
                    backgroundColor: "#00B153",
                    borderRadius: "0px",
                    textTransform: "capitalize",

                    "&:hover": {
                      backgroundColor: "#00B153 !important",
                    },
                  }}
                  fullWidth
                >
                  <Typography sx={{ fontSize: { lg: "20px", xs: "12px" } }}>
                    Charge
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { lg: "28px", xs: "18px", fontWeight: "600" },
                    }}
                  >
                    ₹0.00
                  </Typography>
                </Button>
              </Box>
            </List>
          </Box>
        </Box>
      </Box>
      <AddDiscount
        setDiscountValue={(e) => setDiscountValue(e.target.value)}
        isOpen={isOpenAddDiscount}
        handleToggle={handleToggleAddDiscount}
        handleOpen={handleOpenAddDiscount}
        handleClose={handleCloseAddDiscount}
      />
      <PrinterError
        isOpen={isOpenPrinterError}
        handleToggle={handleTogglePrinterError}
        handleOpen={handleOpenPrinterError}
        handleClose={handleClosePrinterError}
      />
    </>
  );
}

ChineseFood.getLayout = (page) => <FoodLayout>{page}</FoodLayout>;
export default ChineseFood;
