import axios from 'axios';

const getReservationDetails = async (reservation_id) => {
  /* Given reservation_id, get reservation details */
  try {
    const { data } = await axios.get(
      `http://localhost:3001/reservations/valet/detail/${reservation_id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getReservationDetails;