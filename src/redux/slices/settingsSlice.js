import { createSlice } from "@reduxjs/toolkit"

const SettingsSlice = createSlice({
  name: "settings",
  initialState: {
    options: {
      autoPrinting: true,
      tableManagement: false,
      cashManagement: false,
      generalStation: false,
    },
  },

  reducers: {
    // handle settings options actions
    handleCashManagement(state) {
      state.options.cashManagement = !state.options.cashManagement
    },

    handleTableManagement(state) {
      state.options.tableManagement = !state.options.tableManagement
    },
  },
})

export const { handleCashManagement, handleTableManagement } =
  SettingsSlice.actions

export default SettingsSlice.reducer
