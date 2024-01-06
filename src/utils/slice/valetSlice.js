import { createSlice }from "@reduxjs/toolkit";

const currentDate = new Date().toLocaleDateString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit'
}).split('/').join('-');

const currentTime = new Date().getHours();


const initialState = {
  reservations: [],
  time: currentTime,
  date: currentDate,
  spots: {
    occupied: 0,
    reserved: 0,
    available: 0,
  },
  reservationDetails: {
    accounts: {
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
    },
    cars: {
      color: "",
      license_plate_number: "",
      make: "",
      model: "",
    },
    status: "",
    date: "",
    id: 0,
    parking_spot_id: 0,
    time: 0,
  }
}
export const valetSlice = createSlice({
  name: "valet",
  initialState,
  reducers: {
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
    setReservationDetails: (state, action) => {
      state.reservationDetails = action.payload;
    },
    setSpots: (state, action) => {
      state.spots = action.payload;
    },
    setTime: (state) => {
      state.time = new Date().getHours();
    },
  },
});

export const { setReservations, setReservationDetails, setDate, setSpots, setTime } = valetSlice.actions;
export default valetSlice.reducer;