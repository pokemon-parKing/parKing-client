  import { useState, useEffect, useMemo } from "react";
  import getSpotMetrics from "../../utils/getSpotMetrics";

  const CurrentSpots = (garageId, date, time) => {
    //will implement useMemo and redux later
    const [availableSpots, setAvailableSpots] = useState(0);
    const [reservedSpots, setReservedSpots] = useState(0);
    const [occupiedSpots, setOccupiedSpots] = useState(0);

    const fetchSpots = async () => {
      //hardcoding data for now
      const garageId = 1;
      const date = "12-28-23";
      const time = 6;
      try {
        const data = await getSpotMetrics(garageId, date, time);
        const { available, reserved, occupied } = data;
         setAvailableSpots(available);
         setReservedSpots(reserved);
         setOccupiedSpots(occupied);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchSpots();
    }, []);
    return (
      <>
        <div className="availabilty-overview">
          {/* <h1>Availabilty Overview</h1> */}
          <div className="availability-row flex justify-around space-x-4 w-full">
            <div className="available-spots">
              <h3>Available Spots: {availableSpots}</h3>
            </div>
            <div className="current-spots">
              <h3>Reserved Spots: {reservedSpots}</h3>
            </div>
            <div className="occupied-spots">
              <h3>Occupied Spots: {occupiedSpots}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default CurrentSpots;