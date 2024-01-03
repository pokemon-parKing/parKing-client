import { createSlice }from "@reduxjs/toolkit";

const currentDate = new Date().toLocaleDateString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit'
}).split('/').join('-');


const initialState = {
  reservations: [],
  time: new Date().getHours(),
  reservationDetails: {},
  garage_id: 1,
  date: currentDate,
  spots: {
    occupied: 0,
    reserved: 0,
    available: 0,
  },
}
export const valetSlice = createSlice({
  name: "valet",
  initialState,
  reducers: {
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
    setReservtionDetails: (state, action) => {
      state.reservationDetails = action.payload;
    },
    setSpots: (state, action) => {
      state.spots = action.payload;
    },
  },
});

export const { setReservations, setReservationDetails, setDate, setSpots } = valetSlice.actions;
export default valetSlice.reducer;