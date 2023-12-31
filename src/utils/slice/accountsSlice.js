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
  },
  vehicleData: [],
  reservationData: [],
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
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
      state.reservationData = action.payload;
    },
    cancelReservation: (state, action) => {
      const reservationId = action.payload;
      state.reservationData = state.reservationData.filter(
        (reservation) => reservation.id !== reservationId
      );
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
} = accountsSlice.actions;

export default function accountsReducer(state = initialState, action) {
  return accountsSlice.reducer(state, action);
}
