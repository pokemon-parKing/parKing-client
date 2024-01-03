import { useSelector } from "react-redux";

const AccountAndCarDetails = () => {
  const { reservationDetails } = useSelector((state) => state.valet);

  return (
     <div className="mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Account Information</h3>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              {reservationDetails.accounts.email}
            </p>
            <p>
              <span className="font-semibold">Name:</span>{' '}
              {`${reservationDetails.accounts.last_name}, ${reservationDetails.accounts.first_name}`}
            </p>
            <p>
              <span className="font-semibold">Phone Number:</span>{' '}
              {reservationDetails.accounts.phone_number}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Car Information</h3>
            <p>
              <span className="font-semibold">Color:</span> {reservationDetails.cars.color}
            </p>
            <p>
              <span className="font-semibold">License Plate Number:</span>{' '}
              {reservationDetails.cars.license_plate_number}
            </p>
            <p>
              <span className="font-semibold">Make:</span> {reservationDetails.cars.make}
            </p>
            <p>
              <span className="font-semibold">Model:</span> {reservationDetails.cars.model}
            </p>
          </div>
        </div>
      </div>
  )
};

export default AccountAndCarDetails;