import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./utils/slice/accountsSlice.js";
import reservationReducer from "./utils/slice/reservationSlice.js";

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    reservation: reservationReducer,
  },
});
