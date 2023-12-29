import { useState } from "react";
import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";

const UserReservation = () => {
  const [page, setPage] = useState("address");

  // HARD CODING USER_ID & CAR_ID
  const user_id = "0db22c80-80d3-46ff-a684-abddd377bd05";
  const car_id = 1;
  const [reservation, setReservation] = useState({ user_id, car_id });
  // console.log(reservation);
  const setDate = (date) => {
    setReservation({ ...reservation, date });
  };
  const setTime = (time) => {
    let dbTime = Number(time.split(":")[0]);
    if (time.slice(-2) === "PM") {
      dbTime += 12;
    }
    setReservation({ ...reservation, time: dbTime });
  };
  const setGarageId = (garage_id) => {
    setReservation({ ...reservation, garage_id });
  };
  const confirmReservation = () => {
    /* WILL ADD VALIDATION */
    setPage("confirmation");
  };

  return (
    <>
      <h1 className="text-2xl">User Reservation Container </h1>
      {page === "address" && (
        <AddressForm
          setDate={setDate}
          setTime={setTime}
          setGarageId={setGarageId}
          confirmReservation={confirmReservation}
        />
      )}
      {page === "confirmation" && <Confirmation reservation={reservation} />}
    </>
  );
};

export default UserReservation;
