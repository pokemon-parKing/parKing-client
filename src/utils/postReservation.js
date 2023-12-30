import axios from "axios";

const postReservation = async (body) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    await axios.post(`http://localhost:3001/reservations`, body);
    console.log("Reservation complete");
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default postReservation;
