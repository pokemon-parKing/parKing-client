import PropTypes from "prop-types";
import { convertTime } from "../../lib/timeSlotUtil.js";

const ReservationModal = ({ reservationData, onClose }) => {
  return (
    <dialog id="reservation_modal" className="modal" open={!!reservationData}>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              onClose();
              document.getElementById("reservation_modal").close();
            }}
          >
            ✕
          </button>
        </form>
        <div className="card-body items-center text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Reservation Information
          </h2>
          {reservationData && (
            <>
              <p className="text-lg text-gray-800">
                {reservationData.garages.name}
              </p>
              <p className="text-sm text-gray-800">{`${reservationData.garages.address}, ${reservationData.garages.city}, ${reservationData.garages.state}, ${reservationData.garages.country}, ${reservationData.garages.zip}`}</p>
              <p className="text-base text-gray-800">{`Parking Spot ${reservationData.parking_spot_id}`}</p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6">
                Date and Time
              </h2>
              <p className="text-lg text-gray-800">{`${reservationData.date}`}</p>
              <p className="text-lg text-gray-800">{`${convertTime(
                reservationData.time
              )}`}</p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6">
                Vehicle Information
              </h2>
              <p className="text-lg text-gray-800">{`${reservationData.cars.make} ${reservationData.cars.model}`}</p>
              <p className="text-base text-gray-800">{`${reservationData.cars.color}`}</p>
              <p className="text-base text-gray-800">{`License Plate: ${reservationData.cars.license_plate_number}`}</p>

              {reservationData.qrCodeUrl && (
                <img
                  src={reservationData.qrCodeUrl.publicUrl}
                  alt="QR Code"
                  className="mt-4 max-w-full"
                />
              )}
            </>
          )}
        </div>
      </div>
    </dialog>
  );
};

ReservationModal.propTypes = {
  reservationData: PropTypes.shape({
    garages: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      zip: PropTypes.string,
    }),
    parking_spot_id: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.number,
    cars: PropTypes.shape({
      make: PropTypes.string,
      model: PropTypes.string,
      color: PropTypes.string,
      license_plate_number: PropTypes.string,
    }),
    qrCodeUrl: PropTypes.shape({
      publicUrl: PropTypes.string,
    }),
  }),
  onClose: PropTypes.func.isRequired,
};

export default ReservationModal;
