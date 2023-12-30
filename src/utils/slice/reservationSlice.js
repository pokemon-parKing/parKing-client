import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getGeoCoordinates from "../getGeoCoordinates";
import getGarages from "../getGarages";
import getReservationsByDate from "../getReservationsByDate";

export const fetchCoordinates = createAsyncThunk(
  "reservation/fetchCoordinates",
  async (address) => {
    const response = await getGeoCoordinates(address);
    return response;
  }
);

export const fetchClosestGarages = createAsyncThunk(
  "reservation/fetchClosestGarages",
  async (coordinates) => {
    const response = await getGarages(coordinates);
    return response;
  }
);

export const fetchReservations = createAsyncThunk(
  "reservation/fetchReservations",
  async (garageId, { getState }) => {
    const state = getState();
    const date = state.reservation.reservation.date;
    const response = await getReservationsByDate(garageId, date);
    console.log(response);
    return response;
  }
);

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
  mapCenter: null,
  closestGarages: null,
  reservationsList: null,
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
  extraReducers: (builder) => {
    builder.addCase(fetchCoordinates.fulfilled, (state, action) => {
      state.mapCenter = action.payload;
    });
    builder.addCase(fetchCoordinates.rejected, (state, action) => {});

    builder.addCase(fetchClosestGarages.fulfilled, (state, action) => {
      state.closestGarages = action.payload;
    });
    builder.addCase(fetchClosestGarages.rejected, (state, action) => {});

    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.reservationsList = action.payload;
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {});
  },
});
export const { setDate, setTime, setGarageId, setPage } =
  reservationSlice.actions;
export default reservationSlice.reducer;
