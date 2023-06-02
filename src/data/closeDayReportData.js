import {
  AverageSalesIcon,
  CashSalesIcon,
  ClosedCheckIcon,
  GrossSalesIcon,
} from "@/components/icons"
import { styled } from "@mui/material/styles"

export const CloseDayReportData = [
  {
    label: "Closed Check",
    icon: <ClosedCheckIcon />,
    number: "14",
  },
  {
    label: "Gross Sales",
    icon: <GrossSalesIcon />,
    number: "₹10616.79",
  },
  {
    label: "Average Sale",
    icon: <AverageSalesIcon />,
    number: "₹758.34",
  },
  {
    label: "Cash Sales",
    icon: <CashSalesIcon />,
    number: "₹10337.79",
  },
]
