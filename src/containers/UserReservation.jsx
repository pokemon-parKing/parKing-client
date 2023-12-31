import { useSelector } from "react-redux";
import Search from "../components/user-reservation/search/Search.jsx";
import Reservation from "../components/user-reservation/reservation/Reservation.jsx";
import Confirmation from "../components/user-reservation/confirmation/Confirmation.jsx";

const UserReservation = () => {
  const { page } = useSelector((state) => state.reservation);

  return (
    <div className="flex flex-col justify-center items-center">
      {page === "search" && <Search />}
      {page === "reservation" && <Reservation />}
      {page === "confirmation" && <Confirmation />}
    </div>
  );
};

export default UserReservation;
