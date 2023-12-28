import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";

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
