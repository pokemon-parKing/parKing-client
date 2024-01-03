  import { useState, useEffect, useMemo } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { setTime , setOccupied, setReserved, setAvailable } from "../../utils/slice/valetSlice";
  import { getSpotMetrics } from "../../utils/valetReservationUtils";

  const CurrentSpots = () => {
    //will implement useMemo and rerendering if reservation changes (put or delete)
    const { time, garage_id, date, availableSpots, reservedSpots, occupiedSpots } = useSelector((state) => state.valet);
    const dispatch = useDispatch();

    const fetchSpots = async () => {
      try {
        const data = await getSpotMetrics(garage_id, date, time);
        const { available, reserved, occupied } = data;
        dispatch(setAvailable(available));
        dispatch(setReserved(reserved));
        dispatch(setOccupied(occupied));
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