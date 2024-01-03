// import React from 'react';
import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';
import { Link } from "react-router-dom";
import { useState } from 'react';
import postGenerateQrCode from '../utils/postGenerateQrCode.js'
import getQrCode from '../utils/getQrCode.js';

const ValetReservation = () => {
  //use garage id (1 for testing purposes) and current date (format:DD-MM-YYYY) to get the current reservations
  //
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCodeLink, setQrCodeLink] = useState('');

  const handleGenerateQrCode = (event) => {
    event.preventDefault();
    console.log("generate qr code button clicked");
    postGenerateQrCode(111);
  }

  const handleGetQrCode = async (event) => {
    event.preventDefault();
    try {
      const qrCodeLink = await getQrCode(111);
      setQrCodeLink(qrCodeLink);
      setShowQrCode(true);
    } catch (err) {
      console.log('error getting qr code: ', err)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Valet Reservation Page</h1>
      <button onClick={() => handleGenerateQrCode(event)}>Generate QR Code </button>
      <button onClick={() => handleGetQrCode(event)}>Show QR Code </button>
      {showQrCode && qrCodeLink ? <img src={qrCodeLink} /> : null}
      <Link to="/scanner">Scanner</Link>
      <CurrentSpots />
      <ReservationList />
    </div>
  );
}

export default ValetReservation;