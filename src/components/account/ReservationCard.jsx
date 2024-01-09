import PropTypes from "prop-types";
import { convertTime } from "../../lib/timeSlotUtil.js";

const ReservationCard = ({
  reservation,
  onShowReservation,
  onDeleteReservation,
}) => (
  <div className="card bg-base-100 shadow-xl mb-3 w-[300px] h-[300px]">
    <div className="card-body items-center text-center">
      <h2 className="card-title">Reservation Information</h2>
      <p className="text-[#000]">{reservation.garages.name}</p>
      <p className="text-[#000]">{`${reservation.garages.address}, ${reservation.garages.city}, ${reservation.garages.state}, ${reservation.garages.country}, ${reservation.garages.zip}`}</p>
      <p className="text-[#000]">{`${reservation.date}${String.fromCharCode(
        160
      )}${String.fromCharCode(160)}${String.fromCharCode(160)}${convertTime(
        reservation.time
      )}`}</p>
      <div className="card-actions justify-center">
        <button
          className="btn btn-ghost text-blue-500"
          onClick={() => onShowReservation(reservation.id)}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
          Show
        </button>
        <button
          className="btn btn-ghost text-red-500"
          onClick={() => onDeleteReservation(reservation.id)}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  </div>
);

ReservationCard.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    garages: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      zip: PropTypes.string,
    }),
    date: PropTypes.string,
    time: PropTypes.number,
  }),
  onShowReservation: PropTypes.func.isRequired,
  onDeleteReservation: PropTypes.func.isRequired,
};

export default ReservationCard;
