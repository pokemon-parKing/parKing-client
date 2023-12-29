import { useState } from "react";
import getGeoCoordinates from "../../utils/getGeoCoordinates";
import getGarages from "../../utils/getGarages";
import MapView from "./MapView";
import { states } from "../../lib/states";
import { getNext8Days } from "../../lib/dayDropdown";
import { useDispatch } from "react-redux";
import { setDate } from "../../utils/slice/reservationSlice";
const AddressForm = () => {
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState(null);
  const [inputDate, setInputDate] = useState(null);
  const [garages, setGarages] = useState(null);

  const dispatch = useDispatch();

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
    if (!inputDate || inputDate === "Select a date")
      return alert("Please select a date");

    /* Will cleanup later */
    const addressString = `${address.street} ${address.apt || ""} ${
      address.city || ""
    } ${address.state || ""} ${address.zip || ""}`;

    const coordinates = await getAndSetCoordinates(addressString);

    fetchGarages(coordinates);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/3 border-2 border-burgundy-p">
        <form onSubmit={handleSubmit}>
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
            <div className="flex flex-col w-2/3">
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
          <div>
            <h3 className="font-bold text-2xl">Date</h3>
            <select
              onChange={(e) => {
                const reformattedDate = e.target.value.replace(/\//g, "-");
                setInputDate(reformattedDate);
                dispatch(setDate(reformattedDate));
              }}
            >
              <option>Select a date</option>
              {getNext8Days()}
            </select>
          </div>
          <button
            type="submit"
            className="btn font-bold border border-burgundy-p"
          >
            {!coordinates ? "Search" : "Update Search"}
          </button>{" "}
        </form>
      </div>
      {coordinates && garages && (
        <MapView center={coordinates} garages={garages} inputDate={inputDate} />
      )}
    </div>
  );
};

export default AddressForm;
