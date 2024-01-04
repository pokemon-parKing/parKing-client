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

  useEffect(() => {
    fetchSpotsAndReservations();
  }, [garage_id, date, fetchSpotsAndReservations, dispatch]);

  return (
    <>
    <CurrentSpots />
    <ReservationList />
    <div className="text-center flex justify-around py-20">
      <div className='flex flex-row justify-evenly w-[60%]'>
        <div className='btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px] mx-5'>
        <Link to="/valet/scanner">Scanner</Link>
        </div>
        <div className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px] mx-5">
        <Link to='/valet/search'>Search</Link>
        </div>
        <button className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px] mx-5" onClick={fetchSpotsAndReservations}>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
      </div>
    </div>
      {/* <CurrentSpots />
      <ReservationList /> */}

    </>
  );
}

export default ValetReservation;

// btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]

// bg-gray-100 shadow-md rounded-md p-2 mx-10