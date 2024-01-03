import { useDispatch } from 'react-redux';
import { setSelectedGarage } from '../../../../utils/slice/reservationSlice';
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import PropTypes from 'prop-types'

const GarageMarkers = ({ garageList, setOpen }) => {
  const dispatch = useDispatch();

  return (
    <>
      {
        garageList.map((garage) => {
          return (
            <AdvancedMarker
              key={garage.lat + garage.lng}
              position={{ lat: garage.lat, lng: garage.lng }}
              onClick={() => {
                setOpen(true);
                dispatch(setSelectedGarage(garage));
              }}
            >
              <Pin background={"red"} borderColor={"grey"} glyphColor={"white"} />
            </AdvancedMarker>
          );
        })
      }
    </>
  )
}

GarageMarkers.propTypes = {
  garageList: PropTypes.array.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default GarageMarkers;
