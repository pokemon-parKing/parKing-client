  import { useState, useEffect, useMemo } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { setTime } from "../../utils/slice/valetSlice";
  import getSpotMetrics from "../../utils/getSpotMetrics";

  const CurrentSpots = () => {
    //will implement useMemo and redux later
    const { time } = useSelector((state) => state.valet);
    const dispatch = useDispatch();
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

    useEffect(() => {
      const interval = setInterval(() => dispatch(setTime()), 1000 * 60 * 60); //check every hour
      return () => clearInterval(interval);
    }, [dispatch]);

    return (
      <>
        <div className="availability-overview">
          {/* <h1>Availability Overview</h1> */}
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