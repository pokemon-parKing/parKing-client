import axios from "axios";

const getGeoCoordinates = async (address) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/geocode/?address=${address}`
    );
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default getGeoCoordinates;