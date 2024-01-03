import { createSlice }from "@reduxjs/toolkit";
const initialState = {
  time: new Date().getHours(),
  reservations: [],
  reservationDetails: {},
  garage_id: 1,
  date: "",
  occupiedSpots: 0,
  reservedSpots: 0,
  availableSpots: 0,
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
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setOccupied: (state, action) => {
      state.occupiedSpots = action.payload;
    },
    setReserved: (state, action) => {
      state.reservedSpots = action.payload;
    },
    setAvailable: (state, action) => {
      state.availableSpots = action.payload;
    },
  },
});

export const { setTime, setReservations, setReservationDetails, setDate, setAvailable, setOccupied, setReserved } = valetSlice.actions;
export default valetSlice.reducer;