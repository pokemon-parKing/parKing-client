import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';
import { Link } from "react-router-dom";
import { useEffect, useCallback } from 'react';
import { getSpotMetrics, getReservationList } from '../utils/valetReservationUtils.js'
import { useSelector, useDispatch } from "react-redux";
import { setSpots, setReservations } from "../utils/slice/valetSlice";
import toast from 'react-hot-toast';
import { IoMdQrScanner } from "react-icons/io";
import { LuCalendarSearch } from "react-icons/lu";

const ValetReservation = () => {
  const { id: garage_id } = useSelector((state) => state.accounts.valetData);
  const { date, time } = useSelector((state) => state.valet);
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
        <Link to="/valet/scanner" className='btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px] mx-5'>
          <IoMdQrScanner className="text-white text-2xl" />
        </Link>
        <Link to='/valet/search' className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px] mx-5">
          <LuCalendarSearch className="text-white text-2xl" />
        </Link>
        <button className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px] mx-5" onClick={fetchSpotsAndReservations}>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
      </div>
    </div>
    </>
  );
}

export default ValetReservation;