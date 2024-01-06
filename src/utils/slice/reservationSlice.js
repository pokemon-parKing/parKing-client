import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getGarages,
  getGeoCoordinates,
  getReservationsByDate,
  postReservation,
} from "../userReservationUtils.js";

export const fetchCoordinates = createAsyncThunk(
  "reservation/fetchCoordinates",
  async (address) => {
    const response = await getGeoCoordinates(address);
    return response;
  }
);

export const fetchClosestGarages = createAsyncThunk(
  "reservation/fetchClosestGarages",
  async (_, { getState }) => {
    const state = getState();
    const coordinates = state.reservation.mapCenter;
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
    return response;
  }
);

export const addReservation = createAsyncThunk(
  "reservation/addReservation",
  async (_, { getState }) => {
    const state = getState();
    const reservationDetails = state.reservation.reservation;
    const response = await postReservation(reservationDetails);
    return response;
  }
);

const initialState = {
  reservation: {
    user_id: null,
    car_id: null,
    time: null,
    date: null,
    garage_id: null,
  },
  search: "",
  mapCenter: null,
  closestGarages: null,
  reservationsList: null,
  selectedGarage: null,
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setGarageId: (state, action) => {
      state.reservation.garage_id = action.payload;
    },
    setSelectedGarage: (state, action) => {
      state.selectedGarage = action.payload;
    },
    setCarId: (state, action) => {
      state.reservation.car_id = action.payload;
    },
    setUserId: (state, action) => {
      state.reservation.user_id = action.payload;
    },
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoordinates.fulfilled, (state, action) => {
      if (action.payload !== 500) {
        state.mapCenter = action.payload;
      }
    });

    builder.addCase(fetchClosestGarages.fulfilled, (state, action) => {
      state.closestGarages = action.payload;
    });

    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.reservationsList = action.payload;
    });

    builder.addCase(addReservation.fulfilled, (state, action) => {
      state.reservationsList = action.payload;
    });
  },
});
export const {
  setDate,
  setTime,
  setSearch,
  setGarageId,
  setPage,
  setSelectedGarage,
  setCarId,
  setUserId,
  resetState,
} = reservationSlice.actions;
export default reservationSlice.reducer;
