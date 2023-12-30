import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setGarageId,
  setSelectedGarage,
  fetchReservations,
} from "../../utils/slice/reservationSlice";
import TimeSlotList from "./TimeSlotList";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const GoogleMap = () => {
  const [open, setOpen] = useState(false);
  const { mapCenter, closestGarages, reservationsList, selectedGarage } =
    useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  const createMarkers = (garageList) => {
    return garageList.map((garage) => {
      return (
        <Marker
          key={garage.lat + garage.lng}
          position={{ lat: garage.lat, lng: garage.lng }}
          onClick={() => {
            setOpen(true);
            dispatch(setSelectedGarage(garage));
          }}
        ></Marker>
      );
    });
  };

  const getResevations = async (garageId) => {
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
              <Map center={mapCenter} zoom={13}>
                {/* WILL UPDATE STYLE SO THAT CENTER & GARAGE MARKERS ARE DISTINCT */}
                <Marker position={mapCenter} />
                {createMarkers(closestGarages)}
                {open && (
                  <InfoWindow
                    position={{
                      lat: selectedGarage.lat,
                      lng: selectedGarage.lng,
                    }}
                    onCloseClick={() => {
                      setOpen(false);
                      // dispatch(setSelectedGarage(false));
                    }}
                  >
                    <h1>{selectedGarage.name || "GARAGE NAME"}</h1>
                    <p>{selectedGarage.address || "ADDRESS"}</p>
                    <p>
                      {selectedGarage.city || "CITY"},{" "}
                      {selectedGarage.state || "STATE"}
                    </p>
                    <p>{selectedGarage.distance || "1.5"} miles away</p>
                    <button
                      className="border-2 border-burgandy-p"
                      onClick={() => {
                        setOpen(false);
                        getResevations(selectedGarage.id);
                      }}
                    >
                      Show Times
                    </button>
                  </InfoWindow>
                )}
              </Map>
            </div>
          </APIProvider>
        </div>
        {reservationsList && <TimeSlotList />}
      </div>
    )
  );
};

export default GoogleMap;
