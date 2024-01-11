import { useSelector, useDispatch } from "react-redux";
import { InfoWindow } from "@vis.gl/react-google-maps";
import { RiWalkFill } from "react-icons/ri";
import {
  setGarageId,
  fetchReservations,
} from "../../../../utils/slice/reservationSlice";
import PropTypes from "prop-types";

const MapInfoWindow = ({ setOpen }) => {
  const dispatch = useDispatch();
  const selectedGarage = useSelector(
    (state) => state.reservation.selectedGarage
  );
  const getReservations = async (garageId) => {
    try {
      await dispatch(setGarageId(garageId));
      await dispatch(fetchReservations(garageId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <InfoWindow
      position={{
        lat: selectedGarage.lat,
        lng: selectedGarage.lng,
      }}
      onCloseClick={() => {
        setOpen(false);
      }}
    >
      <div className="flex flex-col items-start">
        <h2 className="text-black font-bold text-xl mb-1">
          {selectedGarage.name}
        </h2>
        <p className="font-medium mb-1">{selectedGarage.address}</p>
        <div className="flex flex-row mb-1">
          <RiWalkFill />
          &nbsp;
          <div className="text-black font-medium">
            {selectedGarage.duration}
          </div>
          &nbsp;
          {`(${selectedGarage.distance || "1.5 mi"})`}
        </div>
        <div className="flex justify-end w-full">
          <button
            className="text-[#4285f4]"
            onClick={() => {
              getReservations(selectedGarage.id);
              setOpen(false);
            }}
          >
            Show Times
          </button>
        </div>
      </div>
    </InfoWindow>
  );
};

MapInfoWindow.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default MapInfoWindow;
