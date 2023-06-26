import * as React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/system"
import { Grid } from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "0 !important",
  boxShadow: "none",
  borderRight: "1px solid #A5ACAE",
}))

function MobileNumberKeypad() {
  const [amount, setAmount] = React.useState("")

  // console.log("amount", amount)

  const FormRow = ({ buttons }) => {
    return (
      <React.Fragment>
        <Grid
          item
          xs={4}
          onClick={() => setAmount(amount + buttons[0])}
          sx={{ cursor: "pointer" }}
        >
          <Item>{buttons[0]}</Item>
        </Grid>
        <Grid
          item
          xs={4}
          onClick={() => setAmount(amount + buttons[1])}
          sx={{ cursor: "pointer" }}
        >
          <Item>{buttons[1]}</Item>
        </Grid>
        <Grid
          item
          xs={4}
          onClick={() => setAmount(amount + buttons[2])}
          sx={{ cursor: "pointer" }}
        >
          <Item sx={{ borderRight: "0" }}>{buttons[2]}</Item>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <Box>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Grid
        container
        border="1px solid #A5ACAE"
        borderRadius="10px"
        overflow="hidden"
      >
        <Grid container item borderBottom="1px solid #A5ACAE">
          <FormRow buttons={["1", "2", "3"]} />
        </Grid>
        <Grid container item borderBottom="1px solid #A5ACAE">
          <FormRow buttons={["4", "5", "6"]} />
        </Grid>
        <Grid container item borderBottom="1px solid #A5ACAE">
          <FormRow buttons={["7", "8", "9"]} />
        </Grid>
        <Grid container item>
          <FormRow buttons={[".", "0", "x"]} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default MobileNumberKeypad
