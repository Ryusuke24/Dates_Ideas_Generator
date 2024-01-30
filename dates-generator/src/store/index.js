import { configureStore } from "@reduxjs/toolkit";
import datesSlice from "./datesSlice";

export default configureStore({
  reducer: {
    dates: datesSlice,
  },
});
