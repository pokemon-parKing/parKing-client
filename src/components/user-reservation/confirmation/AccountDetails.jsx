import { useSelector, useDispatch } from "react-redux";
import { setCarId } from "../../../utils/slice/reservationSlice";

const AccountDetails = () => {
  const { reservation } = useSelector((state) => state.reservation);
  // let { userData, vehicleData } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  /* SAMPLE DATA */
  const userData = {
    id: "",
    google_account_id: "",
    contact_preferences: "",
    email: "",
    first_name: "Bruce",
    last_name: "Wong",
    role: "user",
    phone_number: "123-456-7890",
  };
  const vehicleData = [
    {
      id: "1",
      make: "Honda",
      model: "Accord",
      year: "2018",
      license_plate: "ABC123",
    },
    {
      id: "2",
      make: "Tesla",
      model: "Model 3",
      year: "2018",
      license_plate: "123123",
    },
    {
      id: "3",
      make: "Lambo",
      model: "Aventador",
      year: "2023",
      license_plate: "L@MB0",
    },
  ];

  return (
    reservation && (
      <div className="card card-compact w-[60%] bg-base-100 shadow-xl mb-5">
        <div className="card-body">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Account Info
          </h2>
          <div className="divider m-0 pl-8"></div>
          <div className="pl-8">
            <table className="border-collapse w-full">
              <colgroup>
                <col className="w-1/3" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">Name</td>
                  <td className="px-4 py-2">
                    <p>{`${userData.first_name} ${userData.last_name}`}</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">
                    Phone Number
                  </td>
                  <td className="px-4 py-2">
                    <p>{userData.phone_number}</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">Car</td>
                  <td className="px-4 py-2">
                    <select
                      // value={reservation.car_id || vehicleData[0].id}
                      onChange={(e) => {
                        dispatch(setCarId(e.target.value));
                      }}
                    >
                      {vehicleData.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">
                    License Plate
                  </td>
                  <td className="px-4 py-2">
                    <p>
                      {" "}
                      {reservation.car_id
                        ? vehicleData.find(
                            (vehicle) => vehicle.id === reservation.car_id
                          ).license_plate
                        : vehicleData[0].license_plate}
                    </p>
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

export default AccountDetails;
