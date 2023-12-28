import { useState } from "react";
import getGeoCoordinates from "../../utils/getGeoCoordinates";
import getGarages from "../../utils/getGarages";
import MapView from "./MapView";
import { states } from "../../lib/states";
import { getNext8Days } from "../../lib/dayDropdown";
const AddressForm = () => {
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState(null);
  const [date, setDate] = useState(null);
  const [garages, setGarages] = useState(null);

  /* 1. Get Geocode for Inputted Address */
  const getAndSetCoordinates = async (address) => {
    try {
      const coordinates = await getGeoCoordinates(address);
      setCoordinates(coordinates);
      return coordinates;
    } catch (err) {
      console.log(err);
    }
  };

  /* 2. Get Garage Data for Closest Garages */
  const fetchGarages = async (coordinates) => {
    try {
      const garages = await getGarages(coordinates);
      setGarages(garages);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address.street) return alert("Please fill address");
    if (!date || date === "Select a date") return alert("Please select a date");

    /* Will cleanup later */
    const addressString = `${address.street} ${address.apt || ""} ${
      address.city || ""
    } ${address.state || ""} ${address.zip || ""}`;

    const coordinates = await getAndSetCoordinates(addressString);

    fetchGarages(coordinates);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 border-2 border-burgundy-p">
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-2xl">Date</h3>
          <select onChange={(e) => setDate(e.target.value.replace(/\//g, "-"))}>
            <option>Select a date</option>
            {getNext8Days()}
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
