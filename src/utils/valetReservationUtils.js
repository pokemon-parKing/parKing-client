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

const getReservationList = async (garage_id, date) => {
  /* Given garage_id and date, get count of reservations per hour */
  try {
    const { data } = await axios.get(
      `http://localhost:3001/reservations/valet/list/${garage_id}?date=${date}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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

const updateStatus = async (status, reservationId) => {
  try {
    await axios.patch(`http://localhost:3001/reservations/${reservationId}?status=${status}`);
  } catch (error) {
    console.log(error)
  }
};

export {
  getQrCode,
  getReservationDetails,
  getReservationList,
  getSpotMetrics,
  postGenerateQrCode,
  updateStatus
};