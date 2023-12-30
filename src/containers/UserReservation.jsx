import { useSelector } from "react-redux";
import Search from "../components/user-reservation/Search.jsx";
import MapView from "../components/user-reservation/MapView.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";

const UserReservation = () => {
  const { page, reservation } = useSelector((state) => state.reservation);
  console.log(reservation);
  return (
    <div className="flex flex-col justify-center items-center">
      {page === "search" && <Search />}
      {page === "mapView" && <MapView />}
      {page === "confirmation" && <Confirmation />}
    </div>
  );
};

export default UserReservation;
