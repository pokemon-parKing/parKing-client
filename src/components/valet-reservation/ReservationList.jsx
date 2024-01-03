import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTime, setReservations } from "../../utils/slice/valetSlice";
import { Link } from "react-router-dom";
import getReservationList from "../../utils/getReservationList";

const ReservationList = () => {
  const [showNextHour, setShowNextHour] = useState(false);
  const { time, reservations } = useSelector((state) => state.valet);
  const dispatch = useDispatch();

  const garage_id = 1;
  const date = "12-31-23";

  const filterList = useMemo(() => {
    return reservations.filter((res) => {
      const hour = showNextHour ? time + 1 : time;

      if (res.time === hour) {
        return res;
      }
    })
  }, [time, showNextHour, reservations]);

  const fetchReservations = useCallback(async () => {
    try {
      const data = await getReservationList(garage_id, date);
      dispatch(setReservations(data))
    } catch (error) {
      console.log(error);
    }
  }, [garage_id, date, dispatch]);

  useEffect(() => {
    fetchReservations();
  }, [time, fetchReservations]);

  useEffect(() => {
    const interval = setInterval(() => dispatch(setTime()), 1000 * 60 * 60); //check every hour
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h4>This is the ReservationList component</h4>
      <button onClick={() => setShowNextHour(!showNextHour)}>
        Show {showNextHour ? "Current Hour" : "Next Hour"}
      </button>
      <ul>
        {filterList.map((reservation) => {
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