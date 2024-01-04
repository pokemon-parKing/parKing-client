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
    <div className='min-w-[600px] max-h-[80vh] min-h-[50vh] flex flex-col shadow-lg overflow-y-scroll'>
      <button className='flex justify-center items-center text-center mx-auto w-fit' onClick={() => setShowNextHour(!showNextHour)}>
        Show {showNextHour ? "Current Hour" : "Next Hour"}
      </button>
      <ul className='flex flex-col gap-2'>
        {filterList.map((reservation) => {
          const { time, status, cars, parking_spot_id, id } = reservation;
          return (
            <Link to={`/valet/reservation/${id}`} key={id} className="p-4  bg-beige-s rounded-xl">
              {time}, {parking_spot_id}, {status}, {cars.color} {cars.make} {cars.model}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ReservationList;
