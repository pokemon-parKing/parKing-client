import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservation: { user_id: "0db22c80-80d3-46ff-a684-abddd377bd05", car_id: 1 },
};

// exporting here allows access to state throughout our app.
export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  // Modify states
  reducers: {
    setDate: (state, action) => {
      state.reservation.date = action.payload;
    },
    setTime: (state, action) => {
      state.reservation.time = action.payload;
    },
    setGarageId: (state, action) => {
      state.reservation.garage_id = action.payload;
    },
  },
});

// we are exporting the methods to set state in our app
export const { setDate, setTime, setGarageId } = reservationSlice.actions;

// this is what we use in the store.js
export default reservationSlice.reducer;
