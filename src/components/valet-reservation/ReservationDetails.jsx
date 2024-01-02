import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { setReservationDetails } from "../../utils/slice/valetSlice";
import getReservationDetails from "../../utils/getReservationDetails";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ReservationDetails = () => {

  const { reservation_id } = useParams()

  const [reservation, setReservation] = useState({
    accounts: {
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
    },
    cars: {
      color: "",
      license_plate_number: "",
      make: "",
      model: "",
    },
    date: "",
    id: 0,
    parking_spot_id: 0,
    time: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReservationDetails(reservation_id);
        console.log(data[0]);
        setReservation(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [reservation_id])

  return (
      <div className="reservation-details-container">
      <Link to="/valetReservation">Back to Valet Reservation Page</Link>
      <br/>
      <br/>
      <div className="reservation-details">
        <h3>Reservation Details</h3>
        <p>Reservation ID: {reservation.id}</p>
        <p>Date: {reservation.date}</p>
        <p>Parking Spot ID: {reservation.parking_spot_id}</p>
        <p>Time: {reservation.time}</p>
      </div>

      <div className="account-details">
        <h3>Account Information</h3>
        <p>Email: {reservation.accounts.email}</p>
        <p>Name: {`${reservation.accounts.last_name}, ${reservation.accounts.first_name}`}</p>
        <p>Phone Number: {reservation.accounts.phone_number}</p>
      </div>

      <div className="car-details">
        <h3>Car Information</h3>
        <p>Color: {reservation.cars.color}</p>
        <p>License Plate Number: {reservation.cars.license_plate_number}</p>
        <p>Make: {reservation.cars.make}</p>
        <p>Model: {reservation.cars.model}</p>
      </div>
      <br/>
      <br/>

      <button className="check-in-button">Check In</button>
      <br/>
      <br/>
      <button className="check-out-button">Check out</button>
    </div>
  );
}

export default ReservationDetails;