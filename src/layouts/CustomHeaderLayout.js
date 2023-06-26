import CustomHeader from "@/components/CustomHeader"

import React from "react"

function CustomHeaderLayout({ children }) {
  return (
    <>
      <CustomHeader />
      {children}
    </>
  )
}

export default CustomHeaderLayout
