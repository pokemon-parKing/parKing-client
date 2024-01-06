import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    google_account_id: "",
    contact_preferences: "",
    email: "",
    first_name: "",
    last_name: "",
    role: "",
    phone_number: "",
    auth_token: null
  },
  vehicleData: [],
  reservationData: [],
  valetData: null,
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    setAuthToken: (state, action) => {
      state.userData.auth_token = action.payload;
    },
    setUserDataPhoneNumber: (state, action) => {
      state.userData.phone_number = action.payload;
    },
    setVehicleData: (state, action) => {
      state.vehicleData = action.payload;
    },
    deleteVehicle: (state, action) => {
      const { vehicleId } = action.payload;
      state.vehicleData = state.vehicleData.filter(
        (vehicle) => vehicle.id !== vehicleId
      );
    },
    setReservationData: (state, action) => {
      if (action.payload) {
        state.reservationData = action.payload;
      }
    },
    cancelReservation: (state, action) => {
      const reservationId = action.payload;
      state.reservationData = state.reservationData.filter(
        (reservation) => reservation.id !== reservationId
      );
    },
    setValetData: (state, action) => {
      state.valetData = action.payload;
    },
  },
});

export const {
  setUserData,
  setUserDataPhoneNumber,
  setVehicleData,
  deleteVehicle,
  setReservationData,
  cancelReservation,
  setValetData,
  setAuthToken
} = accountsSlice.actions;

export default accountsSlice.reducer;
