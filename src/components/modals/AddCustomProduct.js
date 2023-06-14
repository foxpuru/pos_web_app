import * as React from "react"
import Box from "@mui/material/Box"
import { Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Form, Formik } from "formik"

import { ItemCategoryOptions, TaxOptions } from "@/data/AddCustomProdcutSelect"
import { FormikInput } from "../inputs"
import CustomModal from "../Modal"
import CustomSelect from "../CustomSelect"

export default function AddCustomProduct({
  isOpen,
  handleToggle,
  handleOpen,
  handleClose,
}) {
  const [customProducts, setCustomProducts] = React.useState({
    itemCategory: "",
    tax: TaxOptions[0],
  })

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event
    setCustomProducts((prevState) => ({
      ...prevState,
      [name]: typeof value === "string" ? value.split(",") : value,
    }))
    console.log("name", name)
  }

  return (
    <CustomModal
      isOpen={isOpen}
      handleToggle={handleToggle}
      handleOpen={handleOpen}
      handleClose={handleClose}
      style={{ height: "auto" }}
      title="ADD CUSTOM PRODUCT"
      button="Done"
    >
      <Box px={{ lg: "20px", xs: "16px" }} py={{ lg: "10px", xs: "12px" }}>
        <Box
          border="1px solid #D7DBDC"
          borderRadius="10px"
          p={{ lg: "20px", xs: "16px" }}
        >
          <Formik
            initialValues={{
              name: "",
              amount: "",
            }}
            // onSubmit={onSubmit}
          >
            <Form>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ lg: 2, xs: 2 }}
                // margin="0 !important"
                // width="100% !important"
                // border="1px solid #D7DBDC"
                // borderRadius="10px"
              >
                <Grid item xs={6}>
                  <CustomSelect
                    label="Item Category"
                    placeholder="Select item category"
                    onChange={onChange}
                    value={customProducts.itemCategory}
                    options={ItemCategoryOptions}
                    name="itemCategory"
                    displayEmpty
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    m={{ lg: "0px 0px 5px 12px", xs: "0px 0px 3px 8px" }}
                    color="#000000"
                    fontSize={{ lg: "14px", xs: "12px" }}
                    fontWeight="400"
                  >
                    Item Name
                  </Typography>
                  <FormikInput
                    name="name"
                    type="text"
                    styles={{
                      height: { lg: "44.13px", xs: "33.25px" },
                      "&::placeholder": {
                        color: "#A5ACAE",
                        letterSpacing: 0,
                        fontWeight: "400",
                      },
                    }}
                    placeholder="Enter item name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    m={{ lg: "0px 0px 5px 12px", xs: "0px 0px 3px 8px" }}
                    color="#000000"
                    fontSize={{ lg: "14px", xs: "12px" }}
                    fontWeight="400"
                  >
                    Amount
                  </Typography>
                  <FormikInput
                    name="amount"
                    type="text"
                    styles={{
                      height: { lg: "44.13px", xs: "33.25px" },
                      "&::placeholder": {
                        color: "#A5ACAE",
                        letterSpacing: 0,
                        fontWeight: "400",
                      },
                    }}
                    placeholder="Enter Amount"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomSelect
                    label="Tax"
                    onChange={onChange}
                    value={customProducts.tax}
                    options={TaxOptions}
                    name="tax"
                    displayEmpty
                  />
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Box>
    </CustomModal>
  )
}
