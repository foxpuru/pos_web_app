import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

function UrlTitle({ title }) {
  const router = useRouter()
  //   const page = router.pathname.split("/")[1][0].toUpperCase()
  console.log("router", router.pathname.split("/")[1])
  return (
    <Head>
      <title>
        POS WebApp {title ? "" : `- ${router.pathname.split("/")[1]}`}
      </title>
    </Head>
  )
}

export default UrlTitle
