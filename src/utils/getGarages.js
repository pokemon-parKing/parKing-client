import axios from "axios";

const getGarages = async (coordinates) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/reservations`, {
      params: coordinates,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
export default getGarages;
