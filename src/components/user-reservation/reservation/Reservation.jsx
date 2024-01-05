import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserId, setCarId } from "../../../utils/slice/reservationSlice";
import MapSideBar from "./GoogleMaps/MapSideBar";
import GoogleMap from "./GoogleMaps/GoogleMap";
import TimeSlotList from "./TimeSlotList";
import { fetchVehicleData } from "../../../utils/accountUtils.js";

const Reservation = () => {
  const { reservation, reservationsList, selectedGarage } = useSelector(
    (state) => state.reservation
  );
  const { vehicleData } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.accounts.userData);

  useEffect(() => {
    dispatch(setUserId(userData.id));
  }, [dispatch, userData]);

  useEffect(() => {
    const setVehicleData = async () => {
      await fetchVehicleData(userData.id, dispatch);
    };
    setVehicleData();
  }, [dispatch, userData.id]);

  useEffect(() => {
    dispatch(setCarId(vehicleData[0].id));
  }, [dispatch, vehicleData]);

  console.log(reservation);

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-2xl pb-5 pt-5">Reserve your spot!</h3>
        <MapSideBar />
        <div className="divider pt-3"></div>
        {reservationsList && (
          <div className="flex flex-col items-center pt-1 w-full">
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
