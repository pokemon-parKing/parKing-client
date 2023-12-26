import react, { useState } from "react";
const AddressForm = () => {
  const [address, setAddress] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-1/2">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddressForm;
