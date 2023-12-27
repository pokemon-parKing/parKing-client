import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const MapView = ({ center }) => {
  const positions = [
    { lat: 39.26449151218731, lng: -120.13310055492722 }, // Northstar
    { lat: 39.25403342123072, lng: -119.92337467143992 }, // Incline Village
    { lat: 37.75994001296377, lng: -122.42706085781703 }, // Dolores Park
    { lat: 37.77208299558334, lng: -122.47017765745144 }, // Golden Gate Park
    { lat: 37.80869012038863, lng: -122.40966844592722 }, // Pier 39
    { lat: 37.733985669015176, lng: -122.50279861038683 }, // SF Zoo
    { lat: 37.798933, lng: -122.466175 }, // Alamo Square
    { lat: 37.798650907243854, lng: -122.46706497110263 }, // Presidio
    { lat: 37.752774066785896, lng: -122.44753182525847 }, // Twin Peaks
    { lat: 37.769421, lng: -122.486214 }, // Golden Gate Bridge
    { lat: 37.79144052265621, lng: -122.42790533878741 }, // Lafayette Park
    { lat: 37.74154216539564, lng: -122.4431365870521 }, //Glen Park
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
          <Map center={center} zoom={11}>
            <Marker position={center} />
            {createMarkers(positions)}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default MapView;
