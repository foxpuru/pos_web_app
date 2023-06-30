import { useMediaQuery } from "@mui/material"

export const Matches = () =>
  useMediaQuery((theme) => theme.breakpoints.up("960"))
