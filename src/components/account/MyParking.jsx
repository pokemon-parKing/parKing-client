import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { convertTime } from "../../lib/timeSlotUtil.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReservationData,
  deleteReservation,
} from "../../utils/accountUtils.js";

const MyParking = () => {
  const dispatch = useDispatch();
  const reservationData = useSelector(
    (state) => state.accounts.reservationData
  );
  const userData = useSelector((state) => state.accounts.userData);
  const { id } = userData;
  const navigate = useNavigate();

  useEffect(() => {
    fetchReservationData(id, dispatch);
  }, [dispatch, id]);

  const handleDeleteReservation = async (reservationId) => {
    const result = await deleteReservation(reservationId, dispatch);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleAddNew = () => {
    navigate("/");
  };

  return (
    <div className="max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-center p-10 h-[750px]">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#000] mb-5">
          {"Today's Reservations"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-y-auto p-5">
          {reservationData.map((reservation) => (
            <div
              key={reservation.id}
              className="card bg-base-100 shadow-xl mb-3 w-[300px] h-[300px]"
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title">Reservation Information</h2>
                <p className="text-[#000]">{reservation.garages.name}</p>
                <p className="text-[#000]">{`${reservation.garages.address}, ${reservation.garages.city}, ${reservation.garages.state}, ${reservation.garages.country}, ${reservation.garages.zip}`}</p>
                <p className="text-[#000]">{`${
                  reservation.date
                }${String.fromCharCode(160)}${String.fromCharCode(
                  160
                )}${String.fromCharCode(160)}${convertTime(
                  reservation.time
                )}`}</p>
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-ghost text-red-500"
                    onClick={() => handleDeleteReservation(reservation.id)}
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
          ))}
          <div
            className="card bg-base-100 shadow-xl mb-3 w-[300px] h-[300px] hover:shadow-2xl transform hover:scale-105 transition-transform hover:cursor-pointer"
            onClick={handleAddNew}
          >
            <div className="card-body flex flex-col justify-center items-center text-center h-full">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <h2 className="card-title">Add New</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyParking;
