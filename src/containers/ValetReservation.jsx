// import React from 'react';
import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';
import { Link } from "react-router-dom";
import { useState } from 'react';
import postGenerateQrCode from '../utils/postGenerateQrCode.js'
import getQrCode from '../utils/getQrCode.js';
import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../utils/slice/valetSlice";

const ValetReservation = () => {
  //use garage id (1 for testing purposes) and current date (format:DD-MM-YYYY) to get the current reservations
  //
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCodeLink, setQrCodeLink] = useState('');

  const { date } = useSelector((state) => state.valet);
  const dispatch = useDispatch();

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

  const handleDateChange = async (yearMonthDay) => {
    try {
      const [year, month, day] = yearMonthDay.split("-");
      await dispatch(setDate(`${month}-${day}-${year}`));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Valet Reservation Page</h1>

      <div>
        <label>Please Select a date: </label>{' '}
        <input
        type="date"
        name="date"
        min="2023-01-01" //Change needed: Only 8 days prior to date now, dynamically based on date today
        max="2024-12-31" //Change needed: Only 8 days fron date now, dynamically based on date today
        onChange={(e) => handleDateChange(e.target.value)}
        >
        </input>
        <p>{`The date you selected is: ${date}`}</p>
      </div>
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