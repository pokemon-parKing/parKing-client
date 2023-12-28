import axios from "axios";

const getGeoCoordinates = async (address) => {
  /* Given address (only first line is necessary), get long and lat of address*/
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
