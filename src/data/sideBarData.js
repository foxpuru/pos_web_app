import { Encrypt } from "@/hooks/useEncryption"

import {
  AddItemsIcon,
  CashIcon,
  LogoutIcon,
  NewCheckIcon,
  OpenedChecksIcon,
  ReportsIcon,
  SettingsIcon,
  TableIcon,
  TranscationsIcon,
} from "@/components/icons"

export const SideBarItems = [
  {
    label: "New Check",
    icon: <NewCheckIcon />,
    path: `/food?category=${Encrypt("chinese")}`,
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
    pro: true,
  },
  {
    label: "Table Management",
    icon: <TableIcon />,
    path: "/table-management",
    pro: true,
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
]
