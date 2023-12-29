import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* Hardcoding user_id and car_id */
  reservation: { user_id: "0db22c80-80d3-46ff-a684-abddd377bd05", car_id: 1 },
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
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
export const { setDate, setTime, setGarageId } = reservationSlice.actions;

export default reservationSlice.reducer;
