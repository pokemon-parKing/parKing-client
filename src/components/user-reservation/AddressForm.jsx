import { useState } from "react";
import getGeoCoordinates from "../../utils/getGeoCoordinates";
import MapView from "./MapView";
const AddressForm = () => {
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState(null);
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
    const addressString = `${address.street} ${address.apt || ""}, ${
      address.city
    }, ${address.state} ${address.zip}, ${address.country}`;
    GetAndSetCoordinates(addressString);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 border border-burgundy-p">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="flex flex-col w-3/4">
              <label htmlFor="street">Street Address </label>
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
              <label htmlFor="apt">Apt/Unit # </label>
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
              <label htmlFor="zip">Zip Code </label>
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
              <label htmlFor="city">City </label>
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
              <label htmlFor="state">State </label>
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
              <label htmlFor="country">Country </label>
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
          <button type="submit">{!coordinates ? "Submit" : "Update"}</button>
        </form>
      </div>
      {coordinates && <MapView center={coordinates} />}
    </div>
  );
};

export default AddressForm;
