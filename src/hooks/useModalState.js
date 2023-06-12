import React, { useState } from "react"

function useModalState(initialValue) {
  const [isOpen, setIsOpen] = useState(initialValue ?? false)

  const [anchorElMenu, setAnchorElMenu] = useState(null)
  const openMenu = Boolean(anchorElMenu)
  function handleClickMenu(event) {
    setAnchorElMenu(event.currentTarget)
  }
  function handleCloseMenu() {
    setAnchorElMenu(null)
  }

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
    console.log("hanldecloseeeeee")
  }

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
    anchorElMenu,
    openMenu,
    handleClickMenu,
    handleCloseMenu,
  }
}

export default useModalState
