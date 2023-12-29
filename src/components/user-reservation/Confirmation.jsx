import addReservation from "../../utils/addReservation";
import { useSelector } from "react-redux";
const Confirmation = () => {
  const { reservation } = useSelector((state) => state.reservation);
  /* SAMPLE DATA */
  const details = {
    name: "Twin Peaks",
    address: "501 Twin Peaks Blvd",
    city: "San Francisco",
    zip: "94131",
    state: "CA",
    username: "Bruce",
  };

  const handleReservation = () => {
    addReservation(reservation); // THUNK
  };

  return (
    reservation && (
      <div>
        <h2 className="text-2xl">Reservation Details</h2>
        <h3>{details.username}</h3>
        <h3>{details.name}</h3>
        <h3>{`${details.address} ${details.city} ${details.state}, ${details.zip}`}</h3>
        <h3>{`${reservation.date} & ${reservation.time}`}</h3>
        <button onClick={handleReservation}>Confirm Reservation</button>
      </div>
    )
  );
};

export default Confirmation;
