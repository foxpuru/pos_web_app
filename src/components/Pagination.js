import React from "react"

import { IconButton, Pagination } from "@mui/material"

function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
  const handleFirstPageButtonClick = () => {
    onChangePage(1)
  }

  // RDT uses page index starting at 1, MUI starts at 0
  // i.e. page prop will be off by one here
  const handleBackButtonClick = () => {
    onChangePage(page)
  }

  const handleNextButtonClick = () => {
    onChangePage(page + 2)
  }

  const handleLastPageButtonClick = () => {
    onChangePage(getNumberOfPages(count, rowsPerPage))
  }

  return (
    <>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        1
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        11
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
        aria-label="next page"
      >
        22
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
        aria-label="last page"
      >
        end
      </IconButton>
    </>
  )
}

const CustomMaterialPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
}) => (
  <Pagination
    component="nav"
    count={rowCount}
    rowsPerPage={rowsPerPage}
    page={currentPage - 1}
    onChangePage={onChangePage}
    onChangeRowsPerPage={({ target }) =>
      onChangeRowsPerPage(Number(target.value))
    }
    ActionsComponent={TablePaginationActions}
  />
)

export default CustomMaterialPagination
