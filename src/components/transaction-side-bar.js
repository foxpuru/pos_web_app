import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import { transpilePackages } from "../../next.config"
import { TransactionData } from "@/data/transactionData"

import { Box, Typography } from "@mui/material"
import TransactionDateCard from "./TransactionDateCard"
import GuestDetailsCard from "./GuestDetailsCard"
import { GuestDetailsContext } from "@/context/guestDetailsContext"

export default function TransactionSideBar({ data, card }) {
  const { setOrderItems } = React.useContext(GuestDetailsContext)
  React.useEffect(() => {
    setOrderItems({
      order: TransactionData[0]?.orders[0]?.order,
      orderNumber: TransactionData[0]?.orders[0]?.orderNumber,
    })
  }, [TransactionData])

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "auto",
        borderRadius: "0 !important",
        height: {
          lg: "calc(100vh - 64px - 83px)",
          xs: "calc(100%  - 69px)",
        },

        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {TransactionData.map((section, index) => (
        <GuestDetailsCard key={index} card={card} section={section} />
      ))}
    </List>
  )
}
