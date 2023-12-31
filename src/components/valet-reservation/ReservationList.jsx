import { useState, useEffect } from "react";
import getReservationList from "../../utils/getReservationList";
const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const[showNextHour, setShowNextHour] = useState(false);

  const fetchReservations = async () => {
    const garage_id = 1;
    const date = "12-31-23";
    try {
      const data = await getReservationList(garage_id, date);
      setReservations(data);
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

useEffect(() => {
  fetchReservations();
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    const newHour = new Date().getHours();

    //check if the hour has changed
    if (newHour !== currentHour) {
      setCurrentHour(newHour);
      fetchReservations();
    }
  }, 1000 * 60 * 60); //check every hour
  return () => clearInterval(interval);
}, [currentHour]);

  return (
    <div>
      <h4>This is the ReservationList component</h4>
      <div>
        <button onClick={toggleHour}>
          Show {showNextHour ? "Current Hour" : "Next Hour"}
        </button>
      </div>
      <ul>
        {filterList(showNextHour ? currentHour + 1 : currentHour).map((reservation) => {
          const { time, status, cars, parking_spot_id, id } = reservation;
          return (
            <div key={id} className="p-4  bg-beige-s rounded-xl  space-x-4">
              {time}, {parking_spot_id}, {status}, {cars.color} {cars.make} {cars.model}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ReservationList;