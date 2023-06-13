import React from "react"

function TimePicker() {
  return (
    <div
      class="time-picker-calender"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div class="picker">
        <div class="picker-window"></div>
        <ul class="picker-hour">
          {Array.from({ length: 12 }).map((_, index) => (
            <li key={index}>{index + 1}</li>
          ))}
        </ul>
        <ul class="picker-hour" style={{ overflow: "none" }}>
          <li>:</li>
        </ul>
        <ul class="picker-hour">
          {Array.from({ length: 60 }).map((_, index) => (
            <li key={index}>{index}</li>
          ))}
        </ul>
        <ul class="picker-hour">
          {["AM", "PM"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TimePicker
