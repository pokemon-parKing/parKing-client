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
  },
});

export const {
  setUserData,
  setUserDataPhoneNumber,
  setVehicleData,
  deleteVehicle,
} = accountsSlice.actions;

export default function accountsReducer(state = initialState, action) {
  return accountsSlice.reducer(state, action);
}
