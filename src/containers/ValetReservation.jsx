import React from 'react';
import CurrentSpots from '../components/valet-reservation/CurrentSpots.jsx';
import ReservationList from '../components/valet-reservation/ReservationList.jsx';

const ValetReservation = () => {
  return (
    <div>
      <h1>Valet Reservation Page</h1>
      <CurrentSpots />
      <ReservationList />
    </div>
  );
}

export default ValetReservation;