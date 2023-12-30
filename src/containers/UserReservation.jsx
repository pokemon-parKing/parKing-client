import { useSelector } from "react-redux";
import AddressForm from "../components/user-reservation/AddressForm.jsx";
import Search from "../components/user-reservation/Search.jsx";
import MapView from "../components/user-reservation/MapView.jsx";
import Confirmation from "../components/user-reservation/Confirmation.jsx";

const UserReservation = () => {
  const { page } = useSelector((state) => state.reservation);

  return (
    <div className="flex flex-col justify-center items-center">
      {page === "reservation" && <AddressForm />}
      {page === "search" && <Search />}
      {page === "mapView" && <MapView />}
      {page === "confirmation" && <Confirmation />}
    </div>
  );
};

export default UserReservation;
