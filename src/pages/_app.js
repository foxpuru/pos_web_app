import MainLayout from "@/layouts/MainLayout";
import { store, persistor } from "@/redux/store";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
// ** React Toastify
// import "@styles/react/libs/toastify/toastify.scss";
import { Provider, useDispatch } from "react-redux";
// import "../assets/styles/index.css"
import "../assets/styles/style.scss";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       //   refetchOnmount: false,
//       //   refetchOnReconnect: false,
//       //   retry: 1,
//       //   staleTime: 5 * 1000,
//     },
//   },
// });

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout> {page} </MainLayout>);
  // useEffect(() => {
  //   // Register the service worker manually
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("../../service-worker.js")
  //       .then((registration) => {
  //         console.log("Service worker registered:", registration);
  //       })
  //       .catch((error) => {
  //         console.error("Service worker registration failed:", error);
  //       });
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          {/* <QueryClientProvider client={queryClient}> */}
          {/* <ToastContainer newestOnTop /> */}
          {getLayout(<Component {...pageProps} />)}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          {/* </QueryClientProvider> */}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
