import { useEffect } from "react";
import { useSelector } from "react-redux";

const CurrentSpots = () => {
  const { date, spots } = useSelector((state) => state.valet);

  useEffect(() => {
    // console.log('checking date in spots: ', date);
  }, [date]);

  return (
    <>
      <div className="availability-overview">
        <div className="availability-row flex justify-around space-x-4 w-full">
          <div className="available-spots">
            <h3>Available Spots: {spots.available}</h3>
          </div>
          <div className="current-spots">
            <h3>Reserved Spots: {spots.reserved}</h3>
          </div>
          <div className="occupied-spots">
            <h3>Occupied Spots: {spots.occupied}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentSpots;
