import { createSlice }from "@reduxjs/toolkit";
const initialState = {
  time: 13,
  reservations: [],
  reservationDetails: {},
  garage_id: 1,
  date: "12-31-23",
}
export const valetSlice = createSlice({
  name: "valet",
  initialState,
  reducers: {
    setTime: (state) => {
      state.time = new Date().getHours();
    },
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
    setReservtionDetails: (state, action) => {
      state.reservationDetails = action.payload;
    }
  },
});

export const { setTime, setReservations, setReservationDetails } = valetSlice.actions;
export default valetSlice.reducer;