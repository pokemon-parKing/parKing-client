import axios from "axios";

const getQrCode = async (reservationId) => {
  try {
    const linkToImage = await axios.get(`http://localhost:3001/getqr/${reservationId}`);
    console.log("link to image generated: ", linkToImage.data.publicUrl);
    return linkToImage.data.publicUrl;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getQrCode;