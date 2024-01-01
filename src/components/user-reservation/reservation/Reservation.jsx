import { useSelector } from "react-redux";
import MapSideBar from "./MapSideBar";
import GoogleMap from "./GoogleMap";
import TimeSlotList from "./TimeSlotList";

const Reservation = () => {
  const { reservationsList, selectedGarage } = useSelector(
    (state) => state.reservation
  );
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-2xl pb-5 pt-5">Reserve your spot!</h3>
        <MapSideBar />
        <div className="divider pt-3"></div>
        {reservationsList && (
          <div className="flex flex-col items-center pt-1">
            <h3 className="pb-3 text-2xl">{selectedGarage.name}</h3>
            <TimeSlotList />
          </div>
        )}
      </div>
      <GoogleMap />
    </div>
  );
};

export default Reservation;
