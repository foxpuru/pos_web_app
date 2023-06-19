export const CalculatorKeys = [
  {
    id: "1",
    digitName: "1",
    value: 1,
  },
  {
    id: "2",
    digitName: "2",
    value: 2,
  },
  {
    id: "3",
    digitName: "3",
    value: 3,
  },
  {
    id: "4",
    digitName: "4",
    value: 4,
  },
  {
    id: "5",
    digitName: "5",
    value: 5,
  },
  {
    id: "6",
    digitName: "6",
    value: 6,
  },
  {
    id: "7",
    digitName: "7",
    value: 7,
  },
  {
    id: "8",
    digitName: "8",
    value: 8,
  },
  {
    id: "9",
    digitName: "9",
    value: 9,
  },

  {
    id: "10",
    digitName: ".",
    value: ".",
  },
  {
    id: "11",
    digitName: "0",
    value: 0,
  },
  {
    id: "12",
    digitName: "x",
    value: "x",
  },
]

export const CalculatorButtonsKey = (layout) => [
  {
    label: layout === "%" ? "5%" : "$5.00",
    value: layout === "%" ? "5" : "5.00",
    styles: {
      width: "25%",
      borderRadius: "10px 0px 0px 10px",
      // backgroundColor: layout === "5%" || "$5.00" ? "#000" : undefined,
      // "&:hover": {
      //   backgroundColor:
      //     layout === "5%" || "$5.00" ? "#000 !important" : undefined,
      // },
    },
  },
  {
    label: layout === "%" ? "10%" : "$10.00",
    value: layout === "%" ? "10" : "10.00",
    styles: { width: "25%", borderRadius: "0", borderLeft: 0, borderRight: 0 },
  },
  {
    label: layout === "%" ? "20%" : "$20.00",
    value: layout === "%" ? "20" : "20.00",
    styles: { width: "25%", borderRight: 0, borderRadius: 0 },
  },
  {
    label: layout === "%" ? "100%" : "$100.00",
    value: layout === "%" ? "100" : "100.00",
    styles: {
      width: "25%",
      border: "1px solid #A5ACAE",
      borderRadius: "0px 10px 10px 0px",
    },
  },
]
