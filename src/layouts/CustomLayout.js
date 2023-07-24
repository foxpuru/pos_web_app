import BillingItemList from "@/components/BillingItemList"
import CustomHeader from "@/components/CustomHeader"
import Loader from "@/components/Loader"
import UrlTitle from "@/components/Title"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

const CustomLayout = ({ paymentMethod, blankHeader, reports, header, children }) => {
  const router = useRouter()
  const deviceCodes = useSelector((state) => state.auth.deviceCode)
  const passcode = useSelector((state) => state.auth.passcode)

  useEffect(() => {
    if (!deviceCodes || !passcode) {
      router.push("/")
    }
  }, [passcode, deviceCodes])

  return deviceCodes && passcode ? (
    <>
      <UrlTitle />
      <CustomHeader reports={reports} blankHeader={blankHeader} paymentMethod={paymentMethod} header={...header} />
      {
        paymentMethod ?
          (
            <Box display="flex" width="100%" alignItems="start">
              <BillingItemList />
              <Box
                width="100%"
                p={{ lg: "22px", md: "18px", xs: "12px" }}
                height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
              >
                <Box
                  height="100%"
                  overflow="auto"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  bgcolor="#FFFFFF"
                  border="1px solid #D7DBDC"
                  borderRadius="10px"

                  py={{ lg: "22px", md: "18px", xs: "12px" }}
                >

                  {children}
                </Box>
              </Box>
            </Box>
          )
          :
          reports ? (
            <Box display="flex" width="100%" alignItems="start">
              <BillingItemList reports={reports} />
              <Box
                width="100%"
                p={{ lg: "22px", md: "18px", xs: "12px" }}
                height={{ lg: "calc(100vh - 64px)", xs: "calc(100vh - 60px)" }}
              >
                {children}
              </Box>
            </Box>

          )

            :
            children

      }

    </>
  )
    : (
      <Loader />
    )
}

export default CustomLayout
