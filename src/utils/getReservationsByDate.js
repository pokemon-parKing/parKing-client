import axios from "axios";
import { VITE_RESERVATION_HOST } from "../env.js";

const getReservationsByDate = async (garage_id, date) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    const { data } = await axios.get(
      `${VITE_RESERVATION_HOST}/reservations/garage/${garage_id}?date=${date}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default getReservationsByDate;
