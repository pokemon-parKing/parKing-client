import { useState } from "react";
import { useSelector } from "react-redux";
import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import GarageMarkers from './GarageMarkers';
import MapInfoWindow from './MapInfoWindow';

const GoogleMap = () => {
  const [open, setOpen] = useState(false);
  const { mapCenter, closestGarages } = useSelector(
    (state) => state.reservation
  );

  return (
    mapCenter &&
    closestGarages && (
      <div>
        <div className="flex justify-center">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <div style={{ height: "81vh", width: "60vw" }}>
              <Map
                center={mapCenter}
                zoom={13}
                mapId={import.meta.env.VITE_MAP_ID}
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
                <GarageMarkers garageList={closestGarages} setOpen={setOpen} />
                {open && <MapInfoWindow setOpen={setOpen} />}
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
    )
  );
};

export default GoogleMap;
