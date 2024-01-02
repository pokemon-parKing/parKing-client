import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { setReservationDetails } from "../../utils/slice/valetSlice";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ReservationDetails = () => {

  const { reservation_id } = useParams()

  const [reservation, setReservation] = useState({
    reservation_id: reservation_id,
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
        <h1>reservation_id pulled from params on render: {reservation_id}</h1>
      </div>
    </>
  );
}

export default ReservationDetails;