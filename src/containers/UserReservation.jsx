import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";
import DayTimeForm from "../components/user-reservation/DayTimeForm.jsx";
import Map from "../components/user-reservation/Map.jsx";


const UserReservation = () => {
  return (
    <>
      <h1 className="text-2xl">User Reservation Container </h1>
      <AddressForm />
      <Confirmation />
    </>
  );
};

export default UserReservation;
