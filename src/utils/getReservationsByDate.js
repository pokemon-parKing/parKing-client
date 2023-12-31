import axios from "axios";
const HOST = import.meta.env.VITE_RESERVATION_HOST;

const getReservationsByDate = async (garage_id, date) => {
  try {
    const { data } = await axios.get(
      `${HOST}/reservations/garage/${garage_id}?date=${date}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default getReservationsByDate;
