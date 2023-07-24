import CustomHeader from "@/components/CustomHeader"
import Loader from "@/components/Loader"
import UrlTitle from "@/components/Title"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

const BlankLayout = ({ children }) => {
  const router = useRouter()
  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.passcode)

  useEffect(() => {
    if (!deviceCodes || !passcode) {
      router.push("/")
    }
  }, [passcode, deviceCodes])

  return (
    <>
      <UrlTitle />
      {children}
    </>
  )
}

export default BlankLayout
