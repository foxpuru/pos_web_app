import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import DeviceCode from "@/components/device-code"
import BlankLayout from "@/layouts/BlankLayout"

const inter = Inter({ subsets: ["latin"] })

Home.getLayout = (page) => <BlankLayout>{page}</BlankLayout>
export default function Home() {
  return <DeviceCode />
}
