import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import { transpilePackages } from "../../next.config"
import { TransactionData } from "@/data/transactionData"

import { Box, Typography } from "@mui/material"
import TransactionDateCard from "./TransactionDateCard"

export default function TransactionSideBar() {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: 'background.paper',
        position: "relative",
        overflow: "auto",
        height: {
          lg: "calc(100vh - 64px - 63px)",
          xs: "calc(100vh - 60px - 40px)",
        },
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {TransactionData.map((section) => (
        <li pt={{ lg: "12px", xs: "12px" }}>
          <ul>
            <ListSubheader
              bgcolor="#E57607 !important"
              px={{ lg: "12px", xs: "8px" }}
              py={{ lg: "8px", xs: "6px" }}
            >
              <Typography
                textAlign="left"
                color="#FFFFFF"
                fontSize={{ lg: "16px", xs: "12px" }}
                fontWeight="400"
                letterSpacing="0.6px"
              >
                {section.date}
              </Typography>
            </ListSubheader>
            {section.orders.map((item) => (
              <TransactionDateCard key={item.orderNumber} item={item} />
            ))}
          </ul>
        </li>
      ))}
    </List>
  )
}
