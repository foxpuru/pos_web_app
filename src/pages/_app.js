import MainLayout from "@/layouts/MainLayout"
import store from "@/redux/store"

import "@/styles/globals.css"
import { createTheme, ThemeProvider } from "@mui/material"
import { useEffect } from "react"
import { Provider, useSelector } from "react-redux"
// import "../assets/styles/index.css"
import "../assets/styles/style.scss"

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
})

export default function App({ Component, pageProps }) {
  // useEffect(() => {}, [])
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout> {page} </MainLayout>)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Provider>
  )
}
