import { useSelector } from "react-redux";
import { convertTime, convertDate } from "../../../lib/timeSlotUtil";
const ReservationDetails = () => {
  const { reservation, selectedGarage } = useSelector(
    (state) => state.reservation
  );

  return (
    reservation && (
      <div className="card card-compact w-[60%] bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h2 className="card-title">Reservation Details</h2>
          <div className="divider m-0 "></div>
          <p>{`${convertDate(reservation.date)} at ${convertTime(
            reservation.time
          )}`}</p>
          <p>{selectedGarage.name}</p>
          <p>{selectedGarage.address}</p>
          <p>{`${selectedGarage.city}, ${selectedGarage.state} ${selectedGarage.zip}`}</p>
        </div>
      </div>
    )
  );
};

export default ReservationDetails;
