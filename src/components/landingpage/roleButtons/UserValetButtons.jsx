import { useSelector } from "react-redux";
import DriverButtons from './DriverButtons'
import ValetButtons from "./ValetButtons";

//A component that would render if the user is logged in and is a valet or driver
function UserValetButtons() {
  const { first_name, last_name, role } = useSelector((state) => state.accounts.userData);
  const isLoggedIn = first_name && last_name;

  if (!isLoggedIn) {
    return null;
  }

  // //if the user is a valet, they will receive the valet message, otherwise they will receive the driver message
  const userMessage = role === 'admin'
        ? `As a valet, you can manage parking reservations efficiently.`
        : `As a driver, you can reserve parking spots, view your car info, and manage your reservations.`;


  return (
    <div className="flex flex-col items-center mb-20">
      <div className="text-center text-black mb-6">
        <h1 className='text-5xl mb-4'>
          Welcome {first_name} {last_name}
        </h1>
        <span className="text-xl">{userMessage}</span>
      </div>

      <div>
        {role !== 'valet' ? (
          <DriverButtons firstName={first_name} lastName={last_name} />
        ) : (
          <ValetButtons firstName={first_name} lastName={last_name} />
        )}
      </div>
    </div>
  );
}

export default UserValetButtons;