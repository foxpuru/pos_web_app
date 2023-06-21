import * as React from "react"

import { Grid, Typography } from "@mui/material"

export default function CustomFoodFooter() {
  const [value, setValue] = React.useState(0)

  return (
    <Grid
      display="flex"
      alignItems="center"
      bgcolor="white"
      width={{ lg: "calc(100% - 370px)", xs: "calc(100% - 230px)" }}
      boxShadow="0px -3px 6px #0000001A"
      sx={{
        position: "fixed",
        // overflow: "auto",
        bottom: 0,
        left: 0,
      }}
    >
      Done
    </Grid>
  )
}
