import * as React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Box } from "@mui/material"

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "#D7DBDC",
  border: "1px solid #707070",
  borderRadius: "10px 10px 0px 0px",
  
  color: "#000000",
  fontSize: { lg: "16px", xs: "14px" },
  fontWeight: "400",

  letterSpacing: "0.6px",
  textTransform: "uppercase",
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {},
  [`&.${tableCellClasses.body}`]: {
    
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]

export default function DataTable() {
  return (
    <Box p={{ lg: "22px", xs: "12px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="data table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="left">ITEM NAME</StyledTableCell>
              <StyledTableCell align="center">SALE COUNT</StyledTableCell>
              <StyledTableCell align="right">TOTAL COST</StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
