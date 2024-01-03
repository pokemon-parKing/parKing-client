import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTime, setReservations } from "../../utils/slice/valetSlice";
import { Link } from "react-router-dom";
import getReservationList from "../../utils/getReservationList";

const ReservationList = () => {
  const[showNextHour, setShowNextHour] = useState(false);
  const { time, reservations, date, garage_id } = useSelector((state) => state.valet);
  const dispatch = useDispatch();

  const fetchReservations = async () => {
    try {
      const data = await getReservationList(garage_id, date);
      dispatch(setReservations(data))
    } catch (error) {
      console.log(error);
  }
}

  const toggleHour = () => {
    setShowNextHour((boolean) => !boolean);
  };

  const filterList = (hour) => {
    return reservations.filter((reservation) => hour === reservation.time);
  };

  const handleRefresh = () => {
    fetchReservations();
  }

useEffect(() => {
  fetchReservations();
}, [time]);

useEffect(() => {
  const interval = setInterval(() => dispatch(setTime()), 1000 * 60 * 60); //check every hour
  return () => clearInterval(interval);
}, [dispatch]);

//verify state change to make sure it is working properly
console.log("this is the time outside of useEffect", time);
console.log("this is the reservation outside of useEffect", reservations);

  return (
    <div>
      <h4>This is the ReservationList component</h4>
      <div>
        <button onClick={toggleHour}>
          Show {showNextHour ? "Current Hour" : "Next Hour"}
        </button>
        <button onClick={handleRefresh}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </button>
      </div>
      <ul>
        {filterList(showNextHour ? time + 1 : time).map((reservation) => {
          const { time, status, cars, parking_spot_id, id } = reservation;
          return (
            <Link to={`/valetReservation/reservationDetails/${id}`}key={id} className="p-4  bg-beige-s rounded-xl  space-x-4">
              {time}, {parking_spot_id}, {status}, {cars.color} {cars.make} {cars.model}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ReservationList;