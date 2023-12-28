import { useState } from "react";
import getGeoCoordinates from "../../utils/getGeoCoordinates";
import MapView from "./MapView";
import states from "../../lib/states";
const AddressForm = () => {
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState(null);
  const [date, setDate] = useState(null);
  const [garages, setGarages] = useState(null);

  /* Generate Next 8 Days for Dropdown */
  const dates = [];
  let currentDate = new Date();
  for (let i = 0; i < 8; i++) {
    let dateString = currentDate.toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
    dates.push(<option key={dateString}>{dateString}</option>);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  /* Get Geocode for Inputted Address */
  const getAndSetCoordinates = async (address) => {
    try {
      const coordinates = await getGeoCoordinates(address);
      setCoordinates(coordinates);
      return coordinates;
    } catch (err) {
      console.log(err);
    }
  };

  /* Get Garage Data for Closest Garages */
  const fetchGarages = async (coordinates, date) => {
    /* BLOCKED: STEVEN TO CONFIRM WITH BRUCE */
    // const garages = getGarages(coordinates, date);

    /* FAKE DATA */
    const address = {
      id: 1,
      name: "Twin Peaks",
      address: "501 Twin Peaks Blvd",
      city: "San Francisco",
      zip: "94131",
      state: "CA",
      distance: 3.5, // miles
    };
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
    const garages = positions.map((garage) => {
      return { ...address, geocode: garage };
    });
    /* FAKE DATA */

    setGarages(garages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.street) return alert("Please fill address");
    if (!date || date === "Select a date") return alert("Please select a date");

    /* Will cleanup later */
    const addressString = `${address.street} ${address.apt || ""}, ${
      address.city
    }, ${address.state} ${address.zip}, ${address.country}`;

    const coordinates = getAndSetCoordinates(addressString);

    fetchGarages(coordinates, date);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 border-2 border-burgundy-p">
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-2xl">Date</h3>
          <select onChange={(e) => setDate(e.target.value.replace(/\//g, "-"))}>
            <option>Select a date</option>
            {dates}
          </select>
          <h3 className="font-bold text-2xl">Address</h3>
          <div className="flex flex-row">
            <div className="flex flex-col w-3/4">
              <label htmlFor="street" className="font-bold">
                Street Address{" "}
              </label>
              <input
                type="text"
                onChange={(e) => {
                  const updatedAddress = address;
                  updatedAddress.street = e.target.value;
                  setAddress(updatedAddress);
                }}
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label htmlFor="apt" className="font-bold">
                Apt/Unit #{" "}
              </label>
              <input
                type="text"
                onChange={(e) => {
                  const updatedAddress = address;
                  updatedAddress.apt = e.target.value;
                  setAddress(updatedAddress);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
              <label htmlFor="zip" className="font-bold">
                Zip Code{" "}
              </label>
              <input
                type="number"
                onChange={(e) => {
                  const updatedAddress = address;
                  updatedAddress.zip = e.target.value;
                  setAddress(updatedAddress);
                }}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="city" className="font-bold">
                City{" "}
              </label>
              <input
                type="text"
                onChange={(e) => {
                  const updatedAddress = address;
                  updatedAddress.city = e.target.value;
                  setAddress(updatedAddress);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
              <label htmlFor="state" className="font-bold">
                State{" "}
              </label>
              <select
                type="text"
                onChange={(e) => {
                  const updatedAddress = address;
                  updatedAddress.state = e.target.value;
                  setAddress(updatedAddress);
                }}
              >
                <option>Select a state</option>
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn font-bold border border-burgundy-p"
          >
            {!coordinates ? "Submit" : "Update"}
          </button>{" "}
        </form>
      </div>
      {coordinates && garages && (
        <MapView center={coordinates} garages={garages} date={date} />
      )}
    </div>
  );
};

export default AddressForm;
