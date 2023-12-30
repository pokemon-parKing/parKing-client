import { useSelector, useDispatch } from "react-redux";
import { addReservation, setPage } from "../../utils/slice/reservationSlice";
const Confirmation = () => {
  const { reservation } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  /* SAMPLE DATA */
  const details = {
    name: "Twin Peaks",
    address: "501 Twin Peaks Blvd",
    city: "San Francisco",
    zip: "94131",
    state: "CA",
    username: "Bruce",
  };

  return (
    reservation && (
      <div>
        <h2 className="text-2xl">Reservation Details</h2>
        <h3>{details.username}</h3>
        <h3>{details.name}</h3>
        <h3>{`${details.address} ${details.city} ${details.state}, ${details.zip}`}</h3>
        <h3>{`${reservation.date} & ${reservation.time}`}</h3>
        <button
          onClick={() => {
            dispatch(addReservation());
            dispatch(setPage("reservation")); // will update to user page
          }}
        >
          Confirm Reservation
        </button>
      </div>
    )
  );
};

export default Confirmation;
