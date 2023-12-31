import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiWalkFill } from "react-icons/ri";
import {
  setGarageId,
  setSelectedGarage,
  fetchReservations,
} from "../../../utils/slice/reservationSlice";
import {
  APIProvider,
  Map,
  Pin,
  InfoWindow,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const mapId = import.meta.env.VITE_MAP_ID;

const GoogleMap = () => {
  const [open, setOpen] = useState(false);
  const { mapCenter, closestGarages, selectedGarage } = useSelector(
    (state) => state.reservation
  );
  const dispatch = useDispatch();

  const createMarkers = (garageList) => {
    return garageList.map((garage) => {
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
    });
  };

  const getReservations = async (garageId) => {
    try {
      await dispatch(setGarageId(garageId));
      await dispatch(fetchReservations(garageId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    mapCenter &&
    closestGarages && (
      <div>
        <div className="flex justify-center">
          <APIProvider apiKey={apiKey}>
            <div style={{ height: "100vh", width: "60vw" }}>
              <Map
                center={mapCenter}
                zoom={13}
                mapId={mapId}
                gestureHandling={"greedy"}
                // disableDefaultUI={true}
              >
                <AdvancedMarker position={mapCenter}>
                  <Pin
                    background={"#4285f4"}
                    borderColor={"grey"}
                    glyphColor={"white"}
                  />
                </AdvancedMarker>
                {createMarkers(closestGarages)}
                {open && (
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
                      <p className="font-medium mb-1">
                        {selectedGarage.address}
                      </p>
                      <div className="flex flex-row mb-1">
                        <RiWalkFill />
                        &nbsp;
                        <div className="text-black font-medium">
                          {` ${Math.ceil((0.6 / 3) * 60)} min`}
                        </div>
                        &nbsp;{`(${selectedGarage.distance || "1.5"} mi)`}
                      </div>
                      <div className="flex justify-end w-full">
                        <button
                          className="text-[#4285f4]"
                          onClick={() => {
                            setOpen(false);
                            getReservations(selectedGarage.id);
                          }}
                        >
                          Show Times
                        </button>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
    )
  );
};

export default GoogleMap;
