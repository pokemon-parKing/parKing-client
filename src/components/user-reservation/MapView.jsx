import MapSideBar from "./MapSideBar";
import GoogleMap from "./GoogleMap";

const MapView = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full items-center">
        <h3 className="text-xl pb-5">Reserve your spot!</h3>
        <MapSideBar />
      </div>
      <GoogleMap />
    </div>
  );
};

export default MapView;
