import { configureStore } from "@reduxjs/toolkit";
// name it as 'xxxxxReducer'
import exampleReducer from "./utils/slice/example.js";
<<<<<<< HEAD
<<<<<<< HEAD
import accountsReducer from "./utils/slice/accountsSlice.js";
=======
import reservationReducer from "./utils/slice/reservationSlice.js";
>>>>>>> 4925dcb97c97131709607f4bc8a6f8a671622474

=======
import accountsReducer from "./utils/slice/accountsSlice.js";
import reservationReducer from "./utils/slice/reservationSlice.js";
>>>>>>> 0d8dcd3fe954301d04df3c97b7195d5248a8d721

  // the key is always what you named your slice
export const store = configureStore({
  reducer: {
    example: exampleReducer,
<<<<<<< HEAD
<<<<<<< HEAD
    accounts: accountsReducer,
=======
    reservation: reservationReducer,
>>>>>>> 4925dcb97c97131709607f4bc8a6f8a671622474
=======
    accounts: accountsReducer,
    reservation: reservationReducer,
>>>>>>> 0d8dcd3fe954301d04df3c97b7195d5248a8d721
  },
});
