import { useState } from "react";
const AddressForm = () => {
  const [address, setAddress] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="street">
        Street Address{" "}
        <input
          type="text"
          onChange={(e) => {
            const updatedAddress = address;
            updatedAddress.street = e.target.value;
            setAddress(updatedAddress);
          }}
        />
      </label>
      <label htmlFor="apt">
        Apt/Unit #{" "}
        <input
          type="text"
          onChange={(e) => {
            const updatedAddress = address;
            updatedAddress.apt = e.target.value;
            setAddress(updatedAddress);
          }}
        />
      </label>
      <label htmlFor="zip">
        Zip Code{" "}
        <input
          type="number"
          onChange={(e) => {
            const updatedAddress = address;
            updatedAddress.zip = e.target.value;
            setAddress(updatedAddress);
          }}
        />
      </label>
      <label htmlFor="city">
        City{" "}
        <input
          type="text"
          onChange={(e) => {
            const updatedAddress = address;
            updatedAddress.city = e.target.value;
            setAddress(updatedAddress);
          }}
        />
      </label>
      <label htmlFor="state">
        State{" "}
        <input
          type="text"
          onChange={(e) => {
            const updatedAddress = address;
            updatedAddress.state = e.target.value;
            setAddress(updatedAddress);
          }}
        />
      </label>
      <label htmlFor="country">
        Country{" "}
        <input
          type="text"
          onChange={(e) => {
            const updatedAddress = address;
            updatedAddress.country = e.target.value;
            setAddress(updatedAddress);
          }}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
