import { configureStore } from "@reduxjs/toolkit";
// name it as 'xxxxxReducer'
import exampleReducer from "./utils/slice/example.js";
<<<<<<< HEAD
import accountsReducer from "./utils/slice/accountsSlice.js";
=======
import reservationReducer from "./utils/slice/reservationSlice.js";
>>>>>>> 4925dcb97c97131709607f4bc8a6f8a671622474


  // the key is always what you named your slice
export const store = configureStore({
  reducer: {
    example: exampleReducer,
<<<<<<< HEAD
    accounts: accountsReducer,
=======
    reservation: reservationReducer,
>>>>>>> 4925dcb97c97131709607f4bc8a6f8a671622474
  },
});
