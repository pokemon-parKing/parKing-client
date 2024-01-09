import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReservationData,
  deleteReservation,
} from "../../utils/accountUtils.js";
import ReservationCard from "./ReservationCard";
import ReservationModal from "./ReservationModal";

const MyParking = () => {
  const dispatch = useDispatch();
  const reservationData = useSelector(
    (state) => state.accounts.reservationData
  );
  const userData = useSelector((state) => state.accounts.userData);
  const { id } = userData;
  const navigate = useNavigate();
  const [selectedReservationId, setSelectedReservationId] = useState(null);

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

  const handleShowReservation = (reservationId) => {
    setSelectedReservationId(reservationId);
    document.getElementById("reservation_modal").showModal();
  };

  return (
    <div className="max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-center p-10 h-[750px]">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#000] mb-5">
          {"Today's Reservations"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-y-auto p-5">
          {reservationData.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              onShowReservation={handleShowReservation}
              onDeleteReservation={handleDeleteReservation}
            />
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
      <ReservationModal
        reservationData={reservationData.find(
          (reservation) => reservation.id === selectedReservationId
        )}
        onClose={() => setSelectedReservationId(null)}
      />
    </div>
  );
};

export default MyParking;
