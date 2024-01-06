import axios from "axios";
const HOST = import.meta.env.VITE_RESERVATION_HOST;

const getGarages = async (coordinates) => {
  try {
    const { data } = await axios.get(`${HOST}/reservations`, {
      params: coordinates,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
const getGeoCoordinates = async (address) => {
  /* Given address (only first line is necessary), get long and lat of address*/
  try {
    const { data } = await axios.get(`${HOST}/geocode/?address=${address}`);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getReservationsByDate = async (garage_id, date) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    const { data } = await axios.get(
      `${HOST}/reservations/garage/${garage_id}?date=${date}`
    );
    return data;
  } catch (error) {
    return error.response.status;
  }
};
const postReservation = async (body) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    await axios.post(`${HOST}/reservations`, body);
    console.log("Reservation complete");
  } catch (error) {
    return error.response.status;
  }
};
export {
  getGarages,
  getGeoCoordinates,
  getReservationsByDate,
  postReservation,
};
