import {
  AddItemsIcon,
  CashIcon,
  LogoutIcon,
  NewCheckIcon,
  OpenedChecksIcon,
  ReportsIcon,
  SettingsIcon,
  TranscationsIcon,
} from "@/components/icons"

export const SideBarItems = [
  {
    label: "New Check",
    icon: <NewCheckIcon />,
    path: "/food?category=chinese",
  },
  {
    label: "Opened Checks",
    icon: <OpenedChecksIcon />,
    path: "/checks",
  },
  {
    label: "Transactions",
    icon: <TranscationsIcon />,
    path: "/transactions",
  },

  {
    label: "Cash Management",
    icon: <CashIcon />,
    path: "/cash-management",
  },
  {
    label: "Reports",
    icon: <ReportsIcon />,
    path: "/reports/close-day-report",
  },

  {
    label: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
  {
    label: "Logout",
    icon: <LogoutIcon />,
    path: "/logout",
  },
]
