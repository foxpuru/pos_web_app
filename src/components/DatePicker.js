import * as React from "react"

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import dayjs from "dayjs"
import { DesktopDateTimePicker } from "@mui/x-date-pickers"

function DatePicker() {
  const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDateTimePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        // disableOpenPicker
        // slots={{ openPickerIcon }}
        timeSteps={{ minutes: 1 }}
        ampm={false}
        format={"MMM DD, YYYY hh:mm A"}
        sx={{
          backgroundColor: "#EEF5F6",
          borderRadius: "8px",
          overflow: "hidden",

          "& input": {
            padding: "8px 12px 8px 12px",
            backgroundColor: "transparent",
            color: "#5C6568",
            fontSize: { lg: "16px", xs: "14px" },
            fontWeight: "400",
          },
        }}
      />
    </LocalizationProvider>
  )
}

export default DatePicker
