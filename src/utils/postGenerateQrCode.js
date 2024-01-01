import axios from "axios";

const postGenerateQrCode = async (reservationId) => {
  try {
    const response = await axios.post(`http://localhost:3001/qr/${reservationId}`);
    console.log("QR code generated");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default postGenerateQrCode;