import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Confirmation from "../components/user-reservation/confirmation.jsx";
import DayTimeForm from "../components/user-reservation/DayTimeForm.jsx";
import Map from "../components/user-reservation/Map.jsx";

const UserReservation = () => {
  return (
    <>
      <h1 className="text-2xl">User Reservation Container </h1>
      <AddressForm />
      {/* <DayTimeForm />
      <Confirmation />
      <Map /> */}
    </>
  );
};

export default UserReservation;
