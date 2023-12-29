import { useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";

const UserReservation = () => {
  const [page, setPage] = useState("address");

  const { reservation } = useSelector((state) => state.reservation);
  console.log(reservation);
  const confirmReservation = () => {
    /* WILL ADD VALIDATION */
    setPage("confirmation");
  };

  return (
    <>
      <h1 className="text-2xl">User Reservation Container </h1>
      {page === "address" && (
        <AddressForm confirmReservation={confirmReservation} />
      )}
      {page === "confirmation" && <Confirmation reservation={reservation} />}
    </>
  );
};

export default UserReservation;
