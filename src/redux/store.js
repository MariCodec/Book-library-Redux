import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import bookSlice from "./slices/bookSlice";
export const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterSlice,
  },
});
