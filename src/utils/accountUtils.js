import axios from "axios";
const HOST = import.meta.env.VITE_LOGIN_HOST;
const RESERVATION_HOST = import.meta.env.VITE_RESERVATION_HOST;
import {
  setReservationData,
  cancelReservation,
  setVehicleData,
  deleteVehicle,
  setValetData,
} from "./slice/accountsSlice.js";

const updateUserData = async (id, userData) => {
  try {
    await axios.put(`${HOST}/user/${id}`, {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      phone_number: userData.phone_number,
    });
    return true;
  } catch (error) {
    console.error("Error updating user data:", error);
    return false;
  }
};

const fetchReservationData = async (id, dispatch) => {
  try {
    const response = await axios.get(`${HOST}/user/${id}/current-reservations`);
    dispatch(setReservationData(response.data));
  } catch (error) {
    console.error("Error fetching reservation data:", error);
  }
};

const deleteReservation = async (reservationId, dispatch) => {
  try {
    await axios.patch(
      `${RESERVATION_HOST}/reservations/${reservationId}?status=cancelled`
    );
    dispatch(cancelReservation(reservationId));
    return { success: true, message: "Reservation cancelled successfully!" };
  } catch (error) {
    console.error("Error canceling reservation:", error);
    return { success: false, message: "Error canceling reservation." };
  }
};

const fetchVehicleData = async (id, dispatch) => {
  try {
    const response = await axios.get(`${HOST}/user/${id}/cars`);
    dispatch(setVehicleData(response.data));
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
  }
};

const deleteVehicleApi = async (id, vehicleId, dispatch) => {
  try {
    await axios.delete(`${HOST}/user/${id}/delete-vehicle`, {
      data: { vehicleId },
    });
    dispatch(deleteVehicle({ vehicleId }));
    return { success: true };
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    return { success: false, error };
  }
};

const addVehicleApi = async (id, data) => {
  try {
    await axios.post(`${HOST}/user/${id}/add-vehicle`, data);
    return true;
  } catch (error) {
    console.error("Error adding vehicle:", error);
    return false;
  }
};

const editVehicleApi = async (id, data) => {
  try {
    await axios.put(`${HOST}/user/${id}/edit-vehicle`, data);
    return true;
  } catch (error) {
    console.error("Error editing vehicle:", error);
    return false;
  }
};

const getValetDataApi = async (id, dispatch) => {
  try {
    const response = await axios.get(`${HOST}/valet/${id}`);
    dispatch(setValetData(response.data[0]));
    return response.data[0];
  } catch (error) {
    console.error("Error fetching valet data:", error);
    throw error;
  }
};

const updateParkingSpotsApi = async (id, parsedSpots) => {
  try {
    await axios.put(`${HOST}/valet/${id}/spots`, {
      spots: parsedSpots,
    });
    return true;
  } catch (error) {
    console.error("Error updating parking spots:", error);
    return false;
  }
};

const updateHoursApi = async (id, operationHours) => {
  try {
    await axios.put(`${HOST}/valet/${id}/operation-hours`, {
      operation_hours: operationHours,
    });
    return true;
  } catch (error) {
    console.error("Error updating hours of operation:", error);
    return false;
  }
};

export {
  updateUserData,
  fetchReservationData,
  deleteReservation,
  fetchVehicleData,
  deleteVehicleApi,
  addVehicleApi,
  editVehicleApi,
  getValetDataApi,
  updateParkingSpotsApi,
  updateHoursApi,
};
