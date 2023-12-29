import { useSelector } from "react-redux";
import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";

const UserReservation = () => {
  const { reservation, page } = useSelector((state) => state.reservation);
  console.log(reservation, page);

  return (
    <>
      <h1 className="text-2xl">User Reservation Container </h1>
      {page === "reservation" && <AddressForm />}
      {page === "confirmation" && <Confirmation reservation={reservation} />}
    </>
  );
};

export default UserReservation;
