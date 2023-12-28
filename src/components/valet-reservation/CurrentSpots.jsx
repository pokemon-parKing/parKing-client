  import React, { useState, useEffect } from "react";
  // import axios from "axios";

  const CurrentSpots = (garageId) => {
    const [availableSpots, setAvailableSpots] = useState(0);
    const [currentSpots, setCurrentSpots] = useState(0);
    const [occupiedSpots, setOccupiedSpots] = useState(0);

    const fetchSpots = async () => {
      //placeholder endpoints for now. Will update endpoints once they are created
      // try {
      //   // const available = await axios.get(`/${garageId}`);
      //   // const current = await axios.get(`/${garageId}`);
      //   // const occupied = await axios.get(`/${garageId}`);
      //   // setAvailableSpots(available.data.length);
      //   // setCurrentSpots(current.data.length);
      //   // setOccupiedSpots(occupied.data.length);
      // } catch (error) {
      //   console.log('error fetching spots:', error);
      // }
    }
    //Need to add a dependency to update the page when the spots change
    useEffect(() => {
      // fetchSpots();
    }, []);

    return (
      <div className="current-spots">
        <h1>Current Spots</h1>
        <div className="available-spots">
          <h3>Available Spots: {availableSpots}</h3>
        </div>
        <div className="current-spots">
          <h3>Current Spots: {currentSpots}</h3>
        </div>
        <div className="occupied-spots">
          <h3>Occupied Spots: {occupiedSpots}</h3>
        </div>
      </div>
    );
  }

  export default CurrentSpots;