// import React from 'react';
import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';
import { Link } from "react-router-dom";
import { useEffect, useCallback } from 'react';
import { getSpotMetrics, getReservationList } from '../utils/valetReservationUtils.js'
import { useSelector, useDispatch } from "react-redux";
import { setSpots, setReservations } from "../utils/slice/valetSlice";
import toast from 'react-hot-toast';

const ValetReservation = () => {
  //use garage id (1 for testing purposes) and current date (format:DD-MM-YY) to get the current reservations and spots
  // const [showQrCode, setShowQrCode] = useState(false);
  // const [qrCodeLink, setQrCodeLink] = useState('');

  const { date, garage_id, time } = useSelector((state) => state.valet);
  const dispatch = useDispatch();

  const fetchSpotsAndReservations = useCallback(async () => {
    try {
      const [spotData, reservationData] = await Promise.all([getSpotMetrics(garage_id, date, time), getReservationList(garage_id, date)]);
      dispatch(setSpots(await spotData));
      dispatch(setReservations(await reservationData));
    } catch (error) {
      toast.error(error);
    }
  }, [garage_id, date, time, dispatch])

  // const handleGenerateQrCode = (event) => {
  //   event.preventDefault();
  //   console.log("generate qr code button clicked");
  //   postGenerateQrCode(128);
  // }

  // const handleGetQrCode = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const qrCodeLink = await getQrCode(117);
  //     setQrCodeLink(qrCodeLink);
  //     setShowQrCode(true);
  //   } catch (err) {
  //     console.log('error getting qr code: ', err)
  //   }
  // }

  useEffect(() => {
    fetchSpotsAndReservations();
  }, [garage_id, date, fetchSpotsAndReservations, dispatch]);

  // useEffect(() => {
  //   console.log('checking date in list: ', date);
  //   console.log('reservations: ', reservations);
  //   console.log('time: ', time)
  // }, [date, reservations, time])

  return (
    <>
      {/* <button onClick={() => handleGenerateQrCode(event)}>Generate QR Code </button>
      <button onClick={() => handleGetQrCode(event)}>Show QR Code </button>
      {showQrCode && qrCodeLink ? <img src={qrCodeLink} /> : null} */}
      <div className='flex flex-row justify-evenly w-[60%]'>
        <Link to="/valet/scanner">Scanner</Link>
        <button onClick={fetchSpotsAndReservations}>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
      </div>
      <CurrentSpots />
      <ReservationList />
    </>
  );
}

export default ValetReservation;