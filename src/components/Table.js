import { Box } from "@mui/material"
import ReactDataTableComponent from "react-data-table-component"

function Table({ minHeight, columns, data, height }) {
  const customStyles = {
    table: {
      style: {
        minHeight,
      },
    },
    headRow: {
      style: {
        border: "1px solid #707070",
        backgroundColor: "#D7DBDC",
        borderRadius: "10px 10px 0px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
    },
    rows: {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "10px",
        fontSize: "15px",
        fontWeight: "400",
        color: "#5C6568",
        paddingLeft: "10px",
        paddingRight: "10px",
        height: height,
        borderLeft: "1px solid #D7DBDC",
        borderRight: "1px solid #D7DBDC",
      },
    },
    headCells: {
      style: {
        paddingLeft: "0px", // override the cell padding for head cells
        paddingRight: "0px",
        fontSize: "11px",
      },
      draggingStyle: {
        cursor: "move",
      },
    },
    cells: {
      style: {
        paddingLeft: "0px", // override the cell padding for data cells
        paddingRight: "0px",
        fontSize: "12px",
      },
    },
  }

  return (
    <Box
      bgcolor="white"
      borderRadius="10px"
      sx={{
        "& .rdt_TableRow:last-of-type": {
          borderBottom: "1px solid #D7DBDC !important",
          borderRadius: "0px 0px 10px 10px",
        },
      }}
    >
      <ReactDataTableComponent
        columns={columns}
        data={data}
        customStyles={customStyles}
        fixedHeader
        fixedHeaderScrollHeight="502px"
      ></ReactDataTableComponent>
    </Box>
  )
}

export default Table
