import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReservationList = () => {
  const [showNextHour, setShowNextHour] = useState(false);
  const { time, reservations } = useSelector((state) => state.valet);

  const filterList = useMemo(() => {
    return reservations.filter((res) => {
      const hour = showNextHour ? time + 1 : time;
      if (res.time === hour) {
        return res;
      }
    });
  }, [time, showNextHour, reservations]);

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
            <Link to={`/valetReservation/reservationDetails/${id}`} key={id} className="p-4  bg-beige-s rounded-xl  space-x-4">
              {time}, {parking_spot_id}, {status}, {cars.color} {cars.make} {cars.model}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ReservationList;
