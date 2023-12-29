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
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserDataPhoneNumber: (state, action) => {
      state.userData.phone_number = action.payload;
    },
  },
});

export const { setUserData, setUserDataPhoneNumber } = accountsSlice.actions;

export default function accountsReducer(state = initialState, action) {
  return accountsSlice.reducer(state, action);
}
