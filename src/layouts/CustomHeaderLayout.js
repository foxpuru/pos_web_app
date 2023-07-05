import CustomHeader from "@/components/CustomHeader"
import UrlTitle from "@/components/Title"

import React from "react"

function CustomHeaderLayout({ children }) {
  return (
    <>
    <UrlTitle />
      <CustomHeader />
      {children}
    </>
  )
}

export default CustomHeaderLayout
