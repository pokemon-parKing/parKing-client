import axios from "axios";

const getGarages = async (coordinates) => {
  /* WIP */
  try {
    console.log("1.", coordinates);
    // const res = await axios.get(
    //   `http://localhost:3001/reservations?lat=${coordinates.lat}&lng=${coordinates.lng}`
    // );
    const res = await axios.get(`http://localhost:3001/reservations`, {
      params: coordinates,
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
export default getGarages;
