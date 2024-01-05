import { useSelector } from "react-redux";
import MapSideBar from "./GoogleMaps/MapSideBar";
import GoogleMap from "./GoogleMaps/GoogleMap";
import TimeSlotList from "./TimeSlotList";

const Reservation = () => {
  const { reservationsList, selectedGarage } = useSelector(
    (state) => state.reservation
  );

  return (
    <div className="flex flex-row w-full mt-4">
      <div className="flex flex-col gap-2 w-full items-center max-h-[81vh]">
        <h3 className="text-2xl">Reserve your spot!</h3>
        <MapSideBar />
        <div className="divider"></div>
        {reservationsList && (
          <div className="flex flex-col gap-2 items-center w-full h-full">
            <h3 className="text-2xl">{selectedGarage.name}</h3>
            <TimeSlotList />
          </div>
        )}
      </div>
      <GoogleMap />
    </div>
  );
};

export default Reservation;
