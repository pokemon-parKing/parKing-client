import { createSlice }from "@reduxjs/toolkit";
const initialState = {
  time: 13,
  reservations: [],
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
    }
  },
});

export const { setTime, setReservations } = valetSlice.actions;
export default valetSlice.reducer;