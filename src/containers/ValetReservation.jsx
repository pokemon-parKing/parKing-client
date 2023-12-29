// import React from 'react';
import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';
import Scanner from '../components/valet-reservation/Scanner.jsx';
import { Link } from "react-router-dom";

const ValetReservation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Valet Reservation Page</h1>
      <Link to="/scanner">Scanner</Link>
      <CurrentSpots />
      <ReservationList />
    </div>
  );
}

export default ValetReservation;