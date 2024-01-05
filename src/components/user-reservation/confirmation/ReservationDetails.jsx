import PropTypes from "prop-types";
import { convertTime, convertDate } from "../../../lib/timeSlotUtil";
import { useNavigate } from "react-router-dom";

const ReservationDetails = ({ reservation, selectedGarage }) => {
  const navigate = useNavigate();
  return (
    reservation.user_id &&
    selectedGarage && (
      <div className="card card-compact w-[60%] bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <div className="flex flex-row justify-between">
            <h2 className="card-title">
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
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              Reservation Summary
            </h2>
            <button onClick={() => navigate("/reservation")}>
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </div>
          <div className="divider m-0 pl-8"></div>
          <div className="pl-8">
            <table className="border-collapse w-full">
              <colgroup>
                <col className="w-1/3" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">When</td>
                  <td className="px-4 py-2">
                    <div>
                      <p>{convertDate(reservation.date)}</p>
                      <p>{`@ ${convertTime(reservation.time)}`}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">
                    Where
                  </td>
                  <td className="px-4 py-2">
                    <div>
                      <p>{selectedGarage.name}</p>
                      <p>{selectedGarage.address}</p>
                      <p>{`${selectedGarage.city}, ${selectedGarage.state} ${selectedGarage.zip}`}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
};

ReservationDetails.propTypes = {
  reservation: PropTypes.object,
  selectedGarage: PropTypes.object,
};

export default ReservationDetails;
