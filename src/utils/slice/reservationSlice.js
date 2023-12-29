import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getGeoCoordinates from "../getGeoCoordinates";

const fetchCoordinates = createAsyncThunk("reservation/getData", (address) => {
  return getGeoCoordinates(address);
});

const initialState = {
  /* Hardcoding user_id and car_id */
  reservation: {
    user_id: "0db22c80-80d3-46ff-a684-abddd377bd05",
    car_id: 1,
    time: null,
    date: null,
    garage_id: null,
  },
  page: "reservation",
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchCoordinates.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [fetchCoordinates.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [fetchCoordinates.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});
export const { setDate, setTime, setGarageId, setPage } =
  reservationSlice.actions;

export default reservationSlice.reducer;
