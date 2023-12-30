import axios from "axios";

const getReservationsByDate = async (garage_id, date) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    const { data } = await axios.get(
      `http://localhost:3001/reservations/${garage_id}?date=${date}`
    );
    console.log("Utils", garage_id, date);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default getReservationsByDate;
