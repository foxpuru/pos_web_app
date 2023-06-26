import { Box, Pagination } from "@mui/material"
import { useState } from "react"
import ReactDataTableComponent from "react-data-table-component"

function Table({ minHeight, columns, data, height }) {
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#D7DBDC",
        borderRadius: "10px 10px 0px 0px",
        border: "1px solid #707070",
      },
    },
    rows: {
      style: {},
    },
    headCells: {
      style: {
        paddingLeft: "0px", // override the cell padding for head cells
        paddingRight: "0px",
      },
    },
    cells: {
      style: {
        paddingLeft: "0px", // override the cell padding for data cells
        paddingRight: "0px",
      },
    },
  }

  const itemPerPage = 8

  const [currentPage, setCurrentPage] = useState(1)

  const pageCount = Math.ceil(data.length / itemPerPage)

  const handlePageClick = (e, page) => {
    setCurrentPage(page)
    // console.log("page", page)
  }

  return (
    <Box
      bgcolor="white"
      // borderRadius="10px"
      // border="0"
      sx={{
        "& .rdt_TableHeadRow": {
          px: { lg: "12px", xs: "8px" },
          minHeight: { lg: "46px", xs: "40px" },
          // borderRadius: "10px 10px 0px 0px",
        },
        "& .rdt_TableBody": {
          borderLeft: "1px solid #D7DBDC",
          borderRight: "1px solid #D7DBDC",

          minHeight: { lg: "368px", xs: "320px" },
          // borderRadius: "0px 0px 10px 10px",
        },
        "& .rdt_TableCol": {
          fontSize: { lg: "16px", xs: "14px" },
          color: "#000000",
          fontWeight: "400",
          letterSpacing: "0.65px",
          textTransform: "uppercase",
        },
        "& .rdt_TableRow": {
          px: { lg: "12px", xs: "8px" },
          minHeight: { lg: "46px", xs: "40px" },
          fontSize: { lg: "14px", xs: "12px" },
          color: "#5C6568",
          fontWeight: "400",
          letterSpacing: "0.53px",
          textTransform: "capitalize",
        },

        "& .rdt_TableRow:last-of-type": {
          // borderRadius: "0px 0px 10px 10px",
          borderBottom: "1px solid #D7DBDC",
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "#E57607",
          color: "white",
        },
      }}
    >
      <ReactDataTableComponent
        columns={columns}
        data={data}
        customStyles={customStyles}
        // fixedHeader
        // fixedHeaderScrollHeight="502px"
        pagination
        paginationPerPage={itemPerPage}
        paginationDefaultPage={currentPage}
        paginationComponent={() => (
          <Pagination
            sx={{
              justifyContent: "end",
              display: "flex",
              py: { lg: "12px", xs: "8px" },
              borderLeft: "1px solid #D7DBDC",
              borderRight: "1px solid #D7DBDC",
              borderBottom: "1px solid #D7DBDC",
              borderRadius: "0px 0px 10px 10px",
              backgrundColor: "#E57607 !important",
            }}
            count={pageCount}
            onChange={handlePageClick}
            page={currentPage}
          />
        )}
      ></ReactDataTableComponent>
    </Box>
  )
}

export default Table
