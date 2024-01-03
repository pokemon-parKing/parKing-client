import { useState, useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { setReservationDetails } from "../../utils/slice/valetSlice";
import { getReservationDetails } from "../../utils/valetReservationUtils";
import CheckinCheckoutBtns from "./CheckinCheckoutBtns";
// import updateStatus from "../../utils/updateStatus";
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
    status: "",
    date: "",
    id: 0,
    parking_spot_id: 0,
    time: 0,
  });

  const fetchData = useCallback(async () => {
    if (!reservation_id) {
      return;
    }
    try {
      const data = await getReservationDetails(reservation_id);
      await setReservation(data[0]);
    } catch (error) {
      console.log(error);
    }
  }, [reservation_id])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
        <h3 className="flex justify-center text-2xl font-semibold mb-4">Reservation Details</h3>
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <span className="font-semibold">Reservation Status:</span>{' '}
              {reservation.status}
            </p>
            <p>
              <span className="font-semibold">Reservation ID:</span>{' '}
              {reservation.id}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {reservation.date}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Parking Spot ID:</span>{' '}
              {reservation.parking_spot_id}
            </p>
            <p>
              <span className="font-semibold">Keybox Number:</span>{' '}
              {reservation.parking_spot_id}
            </p>
            <p>
              <span className="font-semibold">Time:</span> {`${reservation.time} - ${reservation.time + 1}`}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Account Information</h3>
        <p>
          <span className="font-semibold">Email:</span>{' '}
          {reservation.accounts.email}
        </p>
        <p>
          <span className="font-semibold">Name:</span>{' '}
          {`${reservation.accounts.last_name}, ${reservation.accounts.first_name}`}
        </p>
        <p>
          <span className="font-semibold">Phone Number:</span>{' '}
          {reservation.accounts.phone_number}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Car Information</h3>
        <p>
          <span className="font-semibold">Color:</span> {reservation.cars.color}
        </p>
        <p>
          <span className="font-semibold">License Plate Number:</span>{' '}
          {reservation.cars.license_plate_number}
        </p>
        <p>
          <span className="font-semibold">Make:</span> {reservation.cars.make}
        </p>
        <p>
          <span className="font-semibold">Model:</span> {reservation.cars.model}
        </p>
      </div>
      <CheckinCheckoutBtns fetchData={fetchData} reservation={reservation} reservation_id={reservation_id} />
      <Link to="/valetReservation" className="flex justify-center py-5 text-blue-500 hover:underline">
        Back to Valet Reservation Page
      </Link>
    </div>
  );
}

export default ReservationDetails;