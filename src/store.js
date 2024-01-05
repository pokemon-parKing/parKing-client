import { configureStore } from "@reduxjs/toolkit";
// name it as 'xxxxxReducer'
import accountsReducer from "./utils/slice/accountsSlice.js";
import reservationReducer from "./utils/slice/reservationSlice.js";
import valetReducer from "./utils/slice/valetSlice.js";

// the key is always what you named your slice
export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    reservation: reservationReducer,
    valet: valetReducer,
  },
});
