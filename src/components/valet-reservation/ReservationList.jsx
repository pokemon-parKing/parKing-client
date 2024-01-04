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
      <button className='flex justify-center items-center text-center mx-auto btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px]' onClick={() => setShowNextHour(!showNextHour)}>
        Show {showNextHour ? "Current Hour" : "Next Hour"}
      </button>
      <div className='flex flex-col gap-2'>
        {filterList.map((reservation) => {
          const { time, status, cars, parking_spot_id, id } = reservation;
          return (
            <Link to={`/valet/reservation/${id}`} key={id} className="p-4 bg-gray-100 shadow-md rounded-md hover:bg-gray-300">
                <p>
                  <span className='font-semibold'>Time: </span>
                  {time}
                </p>
                <p>
                   <span className='font-semibold'>Spot #: </span>
                  {parking_spot_id}</p>
                <p>
                  <span className='font-semibold'>Status: </span>
                  {status}
                </p>
                <p>
                  <span className='font-semibold'>Car: </span>
                  {cars.color} {cars.make} {cars.model}
                </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ReservationList;
