// import React from 'react';
import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';
import { Link } from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';

const ValetReservation = () => {
  //use garage id (1 for testing purposes) and current date (format:DD-MM-YYYY) to get the current reservations
  //
  // const [queryParameters] = useSearchParams()
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Valet Reservation Page</h1>
      {/* <h2>reservationId: {queryParameters.get("scanResult")}</h2> */}
      <Link to="/scanner">Scanner</Link>
      <CurrentSpots />
      <ReservationList />
    </div>
  );
}

export default ValetReservation;