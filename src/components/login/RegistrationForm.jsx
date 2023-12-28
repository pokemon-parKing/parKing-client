import { useState } from "react";
import AccountForm from "./AccountForm";
import VehicleForm from "./VehicleForm";
import GarageForm from "./GarageForm";

const RegistrationForm = ({ role }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleColor: '',
    vehicleLicensePlate: '',
    garageName: '',
    garageAddress: '',
    garageCity: '',
    garageState: '',
    garageZipCode: '',
    garageOpeningHour: '',
    garageClosingHour: '',
    garageParkingSpots: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AccountForm formData={formData} handleChange={handleChange} />
      {role === 'driver' ? <VehicleForm formData={formData} handleChange={handleChange} /> : null}
      {role === 'valet' ? <GarageForm formData={formData} handleChange={handleChange} /> : null}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;