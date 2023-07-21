import { createSlice } from "@reduxjs/toolkit";

const InmdexedDB_Slice = createSlice({
  name: "indexedDB",
  initialState: {
    isIndexedDBSupport: false,
  },

  reducers: {
    handle_IndexedDb_Connection(state, action) {
      state.isIndexedDBSupport = true;
    },
  },
});

export const { handle_IndexedDb_Connection } = InmdexedDB_Slice.actions;

export default InmdexedDB_Slice.reducer;
