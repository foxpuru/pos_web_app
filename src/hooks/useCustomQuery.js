import { useMediaQuery } from "@mui/material"

export const matches = () =>
  useMediaQuery((theme) => theme.breakpoints.up("960"))
