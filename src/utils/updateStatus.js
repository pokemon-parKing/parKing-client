import axios from "axios";

const updateStatus = async (status, reservationId) => {
  try {
    await axios.patch(`http://localhost:3001/reservations/${reservationId}?status=${status}`);
  } catch (error) {
    console.log(error)
  }
}

export default updateStatus;