import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const MapView = () => {
  const position = [
    { lat: 39.26449151218731, lng: -120.13310055492722 }, // Northstar
    { lat: 39.25403342123072, lng: -119.92337467143992 }, // Incline Village
  ];

  const createMarkers = (locations) => {
    return locations.map((location) => {
      return <Marker key={location.lat + location.lng} position={location} />;
    });
  };

  return (
    <div className="flex justify-center">
      <APIProvider apiKey={apiKey}>
        <div style={{ height: "50vh", width: "50vw" }}>
          <Map center={position[0]} zoom={11}>
            {createMarkers(position)}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default MapView;
