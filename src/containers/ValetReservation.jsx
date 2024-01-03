// import React from 'react';
import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import { postGenerateQrCode, getQrCode, getSpotMetrics, getReservationList } from '../utils/valetReservationUtils.js'
import { useSelector, useDispatch } from "react-redux";
import { setDate, setSpots, setReservations } from "../utils/slice/valetSlice";

const ValetReservation = () => {
  //use garage id (1 for testing purposes) and current date (format:DD-MM-YY) to get the current reservations and spots
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCodeLink, setQrCodeLink] = useState('');

  const { date, time, garage_id } = useSelector((state) => state.valet);
  const dispatch = useDispatch();

  const fetchSpotsAndReservations = useCallback(async () => {
    //combining the two fetches into one function; might need to separate them upon further testing
    try {
      const spotData = await getSpotMetrics(garage_id, date, time);
      const reservationData = await getReservationList(garage_id, date);
      dispatch(setSpots(spotData));
      dispatch(setReservations(reservationData))
    } catch (error) {
      console.log(error);
    }
  }, [garage_id, date, time, dispatch])

  // const fetchReservations = useCallback(async () => {
  //   try {
  //     const data = await getReservationList(garage_id, date);
  //     dispatch(setReservations(data))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [garage_id, date, dispatch]);

  const handleGenerateQrCode = (event) => {
    event.preventDefault();
    console.log("generate qr code button clicked");
    postGenerateQrCode(128);
  }

  const handleGetQrCode = async (event) => {
    event.preventDefault();
    try {
      const qrCodeLink = await getQrCode(117);
      setQrCodeLink(qrCodeLink);
      setShowQrCode(true);
    } catch (err) {
      console.log('error getting qr code: ', err)
    }
  }

  const handleDateChange = async (yearMonthDay) => {
    try {
      const [year, month, day] = yearMonthDay.split("-");
      await dispatch(setDate(`${month}-${day}-${year.slice(-2)}`));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSpotsAndReservations();
  }, [garage_id, date, time, fetchSpotsAndReservations]);

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
      <button onClick={fetchSpotsAndReservations}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>
      <CurrentSpots />
      <ReservationList />
    </div>
  );
}

export default ValetReservation;