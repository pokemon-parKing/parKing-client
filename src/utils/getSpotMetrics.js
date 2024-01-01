import axios from 'axios';

const getSpotMetrics = async (garage_id, date, time) => {
  /* Given garage_id, date, and time, get information about the number of occupied(checked-in), reserved, and available spots */
  try {
    const { data } = await axios.get(
      `http://localhost:3001/reservations/valet/${garage_id}?date=${date}&time=${time}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getSpotMetrics;