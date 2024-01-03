import { useSelector } from "react-redux";

const AccountDetails = () => {
  const { reservation } = useSelector((state) => state.reservation);

  /* SAMPLE DATA */
  const details = {
    name: "Twin Peaks",
    address: "501 Twin Peaks Blvd",
    city: "San Francisco",
    zip: "94131",
    state: "CA",
    phoneNumber: "123-456-7890",
    username: "Bruce",
    car: "Tesla Model 3",
    licensePlate: "123abc",
  };

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
                    <p>{details.username}</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">
                    Phone Number
                  </td>
                  <td className="px-4 py-2">
                    <p>{details.phoneNumber}</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">
                    Make & Model
                  </td>
                  <td className="px-4 py-2">
                    <p>{details.car}</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex px-4 py-2 align-start font-bold">
                    License Plate
                  </td>
                  <td className="px-4 py-2">
                    <p> {details.licensePlate}</p>
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
