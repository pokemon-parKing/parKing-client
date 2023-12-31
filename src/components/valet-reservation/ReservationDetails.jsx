import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ReservationDetails = () => {

  const [queryParameters] = useSearchParams()

  const [reservation, setReservation] = useState({
    reservationId: queryParameters.get("scanResult"),
    reservationStatus: '',
    firstName: '',
    lastName: '',
    email: '',
    carId: 0,
    licensePlate: '',
    carMake: '',
    carModel: '',
    carColor: '',
    timeIn: '',
    timeOut: '',
    parkingSpot: ''
  });

  return (
    <>
      <div>
      <Link to="/valetReservation">Back to Valet Reservation Page</Link>
        <h1>Reservation Details</h1>
        <h1>ReservationId pulled from params on render: {reservation.reservationId}</h1>
      </div>
    </>
  );
}

export default ReservationDetails;