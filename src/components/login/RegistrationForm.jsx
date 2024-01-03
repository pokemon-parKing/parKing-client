import { useState, useEffect } from "react";
import AccountForm from "./AccountForm";
import VehicleForm from "./VehicleForm";
import GarageForm from "./GarageForm";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = ({ role }) => {
  const { id: userId, first_name, last_name, email } = useSelector(state => state.accounts.userData);
  const navigate = useNavigate();

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

  useEffect(() => {
    //set the form data to the users full name and email
    setFormData({
      ...formData,
      firstName: first_name,
      lastName: last_name,
      email: email,
    })
  }, [first_name, last_name, email]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    //depending on role kick off 2 different API calls to the acounts server
    if (role === 'driver') {
      //call the driver API
      //console.log(`/login/${userId}/driver`, 'send properly formatted form data and driver form data to the accounts server');
      axios.post(`http://localhost:3007/login/${userId}/driver`, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        role: 'user',
        make: formData.vehicleMake,
        model: formData.vehicleModel,
        color: formData.vehicleColor,
        license_plate_number: formData.vehicleLicensePlate,
      })
        .then((res) => {
          navigate('/');
        })
        .catch((err) => {
          alert(`Please try again! ${err}`);
        })
    } else if (role === 'valet') {
      //call the valet API
      //console.log(`/login/${userId}/valet`, 'send properly formatted form data and valet form data to the accounts server');
      axios.post(`http://localhost:3007/login/${userId}/valet`, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        role: 'admin',
        name: formData.garageName,
        address: formData.garageAddress,
        city: formData.garageCity,
        state: formData.garageState,
        zip: formData.garageZipCode,
        operation_hours: `formData.garageOpeningHour-formData.garageClosingHour`,
        spots: formData.garageParkingSpots / 1,
      })
        .then((res) => {
          navigate('/');
        }
        )
        .catch((err) => {
          alert(`Please try again! ${err}`);
        });
    }
  };

  return (
    <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
      <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
          Tell us about yourself
        </h1>
        <div className="w-full mt-5 sm:mt-8">
          <div className={`mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5 h-[${role === 'driver' ? 700 : 1000}px] overflow-y-auto`}>
        <form onSubmit={handleSubmit}>
          <AccountForm formData={formData} handleChange={handleChange} />
          {role === 'driver' ? <VehicleForm formData={formData} handleChange={handleChange} /> : null}
          {role === 'valet' ? <GarageForm formData={formData} handleChange={handleChange} /> : null}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
            <button
              type="submit"
              className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]"
            >Register</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
