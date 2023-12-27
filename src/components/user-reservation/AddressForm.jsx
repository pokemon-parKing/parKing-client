import { useState, useEffect } from "react";
import getGeoCoordinates from "../../utils/getGeoCoordinates";
import MapView from "./MapView";
const AddressForm = () => {
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState(null);
  const [date, setDate] = useState(null);

  const dates = [];
  let currentDate = new Date();
  for (let i = 0; i < 8; i++) {
    let dateString = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    dates.push(<option key={dateString}>{dateString}</option>);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const GetAndSetCoordinates = async (address) => {
    try {
      const coordinates = await getGeoCoordinates(address);
      setCoordinates(coordinates);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.street) return alert("Please fill address");
    if (!date || date === "Select a date") return alert("Please select a date");

    const addressString = `${address.street} ${address.apt || ""}, ${
      address.city
    }, ${address.state} ${address.zip}, ${address.country}`;
    GetAndSetCoordinates(addressString);
    // GetAvailableSpots(addressString, date);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 border-2 border-burgundy-p">
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
              <input
                type="text"
                onChange={(e) => {
                  const updatedAddress = address;
                  updatedAddress.state = e.target.value;
                  setAddress(updatedAddress);
                }}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="country" className="font-bold">
                Country{" "}
              </label>
              <input
                type="text"
                onChange={(e) => {
                  const updatedAddress = address;
                  updatedAddress.country = e.target.value;
                  setAddress(updatedAddress);
                }}
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl">Date</h3>
          <select onChange={(e) => setDate(e.target.value)}>
            <option>Select a date</option>
            {dates}
          </select>
          <button type="submit" className="font-bold border border-burgundy-p">
            {!coordinates ? "Submit" : "Update"}
          </button>
        </form>
      </div>
      {coordinates && <MapView center={coordinates} />}
    </div>
  );
};

export default AddressForm;
