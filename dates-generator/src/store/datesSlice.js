import { createSlice } from "@reduxjs/toolkit";
import json from "../json/dates";

const datesSlice = createSlice({
  name: "dates",
  initialState: {
    dates: [...json],
  },
  reducers: {},
});

export const {} = datesSlice.actions;
export default datesSlice.reducer;
