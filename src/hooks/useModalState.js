import React, { useState } from "react"

function useModalState(initialValue) {
  const [isOpen, setIsOpen] = useState(initialValue ?? false)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
  }
}

export default useModalState
