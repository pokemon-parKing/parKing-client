import { useState } from "react";
import getReservationsByDate from "../../utils/getReservationsByDate";
import { useDispatch } from "react-redux";
import { setGarageId } from "../../utils/slice/reservationSlice";
import TimeSlotList from "./TimeSlotList";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const MapView = ({ inputDate, center, garages }) => {
  const [selectedGarageData, setSelectedGarageData] = useState(false);
  const [reservations, setReservations] = useState(null); // thunk

  const dispatch = useDispatch();

  /* Show Modal on Marker Click */
  const handleMarkerClick = (garage) => {
    setSelectedGarageData(garage);
  };

  const createMarkers = (garageList) => {
    return garageList.map((garage) => {
      return (
        <Marker
          key={garage.lat + garage.lng}
          position={{ lat: garage.lat, lng: garage.lng }}
          onClick={() => handleMarkerClick(garage)}
        ></Marker>
      );
    });
  };

  const getResevations = async (garageId, date) => {
    try {
      dispatch(setGarageId(garageId));
      const reservations = await getReservationsByDate(garageId, date);
      setReservations(reservations);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    center &&
    garages && (
      <div>
        <div className="flex justify-center">
          <APIProvider apiKey={apiKey}>
            <div style={{ height: "50vh", width: "75vw" }}>
              <Map center={center} zoom={12}>
                {/* WILL UPDATE STYLE SO THAT CENTER & GARAGE MARKERS ARE DISTINCT */}
                <Marker position={center} />
                {createMarkers(garages)}
                {selectedGarageData && (
                  <InfoWindow
                    position={{
                      lat: selectedGarageData.lat,
                      lng: selectedGarageData.lng,
                    }}
                    onCloseClick={() => {
                      setSelectedGarageData(false);
                    }}
                  >
                    <h1>{selectedGarageData.name || "GARAGE NAME"}</h1>
                    <p>{selectedGarageData.address || "ADDRESS"}</p>
                    <p>
                      {selectedGarageData.city || "CITY"},{" "}
                      {selectedGarageData.state || "STATE"}
                    </p>
                    <p>{selectedGarageData.distance || "1.5"} miles away</p>
                    <button
                      className="border-2 border-burgandy-p"
                      onClick={() =>
                        getResevations(selectedGarageData.id, inputDate)
                      }
                    >
                      Show Times
                    </button>
                  </InfoWindow>
                )}
              </Map>
            </div>
          </APIProvider>
        </div>
        {reservations && (
          <TimeSlotList
            hoursOfOperation={selectedGarageData.operation_hours}
            list={reservations}
            total={selectedGarageData.spots}
          />
        )}
      </div>
    )
  );
};

export default MapView;
