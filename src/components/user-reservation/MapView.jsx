import { useState } from "react";
import getReservationsByDate from "../../utils/getReservationsByDate";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const MapView = ({ date, center, garages }) => {
  const [open, setOpen] = useState(false);
  const [selectedGarageData, setSelectedGarageData] = useState(null);
  const [reservations, setReservations] = useState(null);

  /* Show Modal on Marker Click */
  const handleMarkerClick = (garage) => {
    setSelectedGarageData(garage);
    setOpen(true);
  };

  const createMarkers = (garageList) => {
    return garageList.map((garage) => {
      return (
        <Marker
          key={garage.geocode.lat + garage.geocode.lng}
          position={garage.geocode}
          onClick={() => handleMarkerClick(garage)}
        ></Marker>
      );
    });
  };
  const getResevations = async (garageId, date) => {
    /* GET AVAILABLE TIME */
    try {
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
            <div style={{ height: "50vh", width: "50vw" }}>
              <Map center={center} zoom={11}>
                <Marker position={center} />
                {createMarkers(garages)}
                {open && (
                  <InfoWindow
                    position={selectedGarageData.geocode}
                    onCloseClick={() => {
                      setOpen(false);
                    }}
                  >
                    <h1>{selectedGarageData.name || "GARAGE NAME"}</h1>
                    <p>{selectedGarageData.address || "ADDRESS"}</p>
                    <p>{selectedGarageData.city || "CITY"}</p>
                    <p>{selectedGarageData.state || "STATE"}</p>
                    <p>
                      {selectedGarageData.distance || "DISTANCE???"} miles away
                    </p>
                    <button
                      className="border-2 border-burgandy-p"
                      onClick={() =>
                        getResevations(selectedGarageData.id, date)
                      }
                    >
                      Confirm
                    </button>
                  </InfoWindow>
                )}
              </Map>
            </div>
          </APIProvider>
        </div>
        {/* STEVEN BUILT. WILL INTEGRATE ONCE PR IS APPROVED */}
        {/* {reservations && <TimeSlotList reservations={reservations} />} */}
      </div>
    )
  );
};

export default MapView;
