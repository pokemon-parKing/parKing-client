import axios from "axios";

const getAllReservations = async (garage_id) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    const { data } = await axios.get(
      `http://localhost:3001/reservations/test/?garage_id=${garage_id}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default getAllReservations;
