import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getGeoCoordinates from "../getGeoCoordinates";
import getGarages from "../getGarages";
import getReservationsByDate from "../getReservationsByDate";
import postReservation from "../postReservation";

export const fetchCoordinates = createAsyncThunk(
  "reservation/fetchCoordinates",
  async (address) => {
    const response = await getGeoCoordinates(address);
    return response;
  }
);

export const fetchClosestGarages = createAsyncThunk(
  "reservation/fetchClosestGarages",
  /* getState gives access to current value of state in redux store */
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
    await postReservation(reservationDetails);
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
    search: null,
  },
  page: "search",
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
      state.reservation.search = action.payload;
    },
    setGarageId: (state, action) => {
      state.reservation.garage_id = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSelectedGarage: (state, action) => {
      state.selectedGarage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoordinates.fulfilled, (state, action) => {
      state.mapCenter = action.payload;
    });
    builder.addCase(fetchCoordinates.rejected, (state, action) => {
      /* WILL FIGURE OUT LATER */
    });

    builder.addCase(fetchClosestGarages.fulfilled, (state, action) => {
      state.closestGarages = action.payload;
    });
    builder.addCase(fetchClosestGarages.rejected, (state, action) => {
      /* WILL FIGURE OUT LATER */
    });

    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.reservationsList = action.payload;
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {
      /* WILL FIGURE OUT LATER */
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
} = reservationSlice.actions;
export default reservationSlice.reducer;
