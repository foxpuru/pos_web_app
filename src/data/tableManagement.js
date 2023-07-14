import { BigTable, RoundTable, SquareTable } from "@/components/icons"
import { Encrypt } from "@/hooks/useEncryption"
// import FoodFishImg from "../../assets/images/food_fish.jpg"

export const TableManagementData = [
  {
    category: "RESTAURANT",
    path: Encrypt("RESTAURANT"),
    tables: [
      {
        id: "qsqws2sq2",
        // icon: <SquareTable />,
        tableNumber: 1,
        type: "square",
      },
      {
        id: "qsqws2sq2434222",
        // icon: <SquareTable />,
        tableNumber: 5,
        type: "square",
      },
      {
        id: "qsqws2sq221",
        // icon: <RoundTable />,
        tableNumber: 2,
        type: "square",
      },
      {
        id: "qsqws2sq222131",
        // icon: <BigTable />,
        tableNumber: 3,
        type: "square",
      },
      {
        id: "qsqws2sq2",
        // icon: <SquareTable />,
        tableNumber: 1,
        type: "square",
      },
      {
        id: "qsqws2sq2434222",
        // icon: <SquareTable />,
        tableNumber: 5,
        type: "square",
      },
      {
        id: "qsqws2sq221",
        // icon: <RoundTable />,
        tableNumber: 2,
        type: "square",
      },
      {
        id: "qsqws2sq222131",
        // icon: <BigTable />,
        tableNumber: 3,
        type: "square",
      },
    ],
  },
  {
    category: "BAR",
    path: Encrypt("BAR"),
  },
]
