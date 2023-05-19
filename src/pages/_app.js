import MainLayout from "@/layouts/MainLayout"
import "@/styles/globals.css"
import { createTheme, ThemeProvider } from "@mui/material"
// import "../assets/styles/index.css"
import "../assets/styles/style.scss"

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
})

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout> {page} </MainLayout>)

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
