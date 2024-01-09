import { useSelector } from "react-redux";

const DetailsAndKeyBox = () => {

  const { reservationDetails } = useSelector((state) => state.valet);
  return (
    <div className="mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 bg-gray-100 shadow-md rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Reservation Details:</h3>
            <p>
              <span className="font-semibold">Reservation Status:</span>{' '}
              {reservationDetails.status==='reserved' ? 'Reserved' : reservationDetails.status==='checked-in' ? 'Checked-in' : reservationDetails.status==='picked-up' ? 'Picked-up' : 'Cancelled'}
            </p>
            <p>
              <span className="font-semibold">Reservation ID:</span>{' '}
              {reservationDetails.id}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {reservationDetails.date}
            </p>
          </div>
          <div className="p-8 bg-gray-100 shadow-md rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Spot and Keybox:</h3>
            <p>
              <span className="font-semibold">Parking Spot ID:</span>{' '}
              {reservationDetails.parking_spot_id}
            </p>
            <p>
              <span className="font-semibold">Keybox Number:</span>{' '}
              {reservationDetails.parking_spot_id}
            </p>
            <p>
              <span className="font-semibold">Time:</span> {`${reservationDetails.time} - ${reservationDetails.time + 1}`}
            </p>
          </div>
        </div>
    </div>
  );
};

export default DetailsAndKeyBox;
