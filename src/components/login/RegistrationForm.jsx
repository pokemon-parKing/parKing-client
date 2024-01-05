import { useState, useEffect } from "react";
import AccountForm from "./AccountForm";
import VehicleForm from "./VehicleForm";
import GarageForm from "./GarageForm";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAccount } from "../../utils/loginUtils.js";
import toast from 'react-hot-toast';
import { formatPhoneNumber } from "../../utils/formatPhoneNumber.js";
import { setVehicleData, setUserData } from "../../utils/slice/accountsSlice.js";


const RegistrationForm = ({ role, handleBackClick }) => {
  const dispatch = useDispatch();
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
    garageOpeningHour: '12',
    garageClosingHour: '01',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [first_name, last_name, email]);

  // useEffect(() => {
  //   console.log('formData: ', formData);
  // }, [formData]);

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatPhoneNumber(input);
    e.target.value = formattedInput;
    setFormData({
      ...formData,
      phoneNumber: formattedInput,
    });
  };

  const handleChange = (e) => {

    if (e.target.name === 'garageOpeningHour'
      && formData.garageClosingHour !== ''
      && e.target.value > formData.garageClosingHour) {
      return toast.error('Thats not a valid opening hour!')
    }

    if (e.target.name === 'garageClosingHour' && formData.garageOpeningHour === '') {
      return toast.error('Please select a opening hour first!')
    }

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
      createAccount(userId, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        role: 'user',
        make: formData.vehicleMake,
        model: formData.vehicleModel,
        color: formData.vehicleColor,
        license_plate_number: formData.vehicleLicensePlate,
      }, role)
        .then(() => {
          //set the vehicle data in the store, not sure if vehicleId is required.
          const user = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone_number: formData.phoneNumber,
            role: 'user',
          };
          const vehicle = [{
            make: formData.vehicleMake,
            model: formData.vehicleModel,
            color: formData.vehicleColor,
            license_plate_number: formData.vehicleLicensePlate,
          }];
          dispatch(setVehicleData(vehicle));
          dispatch(setUserData(user));
          //save the vehicle data to the local storage
          window.localStorage.setItem('vehicles', JSON.stringify(vehicle));
          window.localStorage.setItem('userInfo', JSON.stringify(user));
          navigate('/');
        })
        .catch((err) => {
          alert(`Please try again! ${err}`);
        }
        );
    } else if (role === 'valet') {
      //call the valet API
      //console.log(`/login/${userId}/valet`, 'send properly formatted form data and valet form data to the accounts server');
      if (formData.garageOpeningHour > formData.garageClosingHour) {
        alert('Please select a valid opening and closing time! (opening time must be earlier than closing time!)');
        return;
      } else {
        createAccount(userId, {
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
          operation_hours: `${formData.garageOpeningHour}-${formData.garageClosingHour}`,
          spots: +formData.garageParkingSpots,
        }, role)
          .then(() => {
            //set the garage data in the store, no way to get the Lat and Lng here without querying the database, so this might not even be useful for y'all
            const user = {
              first_name: formData.firstName,
              last_name: formData.lastName,
              email: formData.email,
              phone_number: formData.phoneNumber,
              role: 'user',
            };
            const garage = [{
              name: formData.garageName,
              address: formData.garageAddress,
              city: formData.garageCity,
              state: formData.garageState,
              zip: formData.garageZipCode,
              operation_hours: `${formData.garageOpeningHour}-${formData.garageClosingHour}`,
              spots: +formData.garageParkingSpots,
            }];
            //this is where the first dispatch will live when i figure out who uses this

            dispatch(setUserData(user));
            //store in the window
            window.localStorage.setItem('garages', JSON.stringify(garage));
            window.localStorage.setItem('userInfo', JSON.stringify(user));
            navigate('/');
          }
          )
          .catch((err) => {
            alert(`Please try again! ${err}`);
          });
      }
    }
  };

  return (
    <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5 mx-auto">
      <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
          Tell us about yourself
        </h1>
        <div className="w-full mt-5 sm:mt-8">
          <div className={`mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5 h-[${role === 'driver' ? 700 : 1000}px]`}>
            <form onSubmit={handleSubmit}>
              <AccountForm formData={formData} handleChange={handleChange} handlePhoneChange={handlePhoneNumberChange} />
              {role === 'driver' ? <VehicleForm formData={formData} handleChange={handleChange} /> : null}
              {role === 'valet' ? <GarageForm formData={formData} handleChange={handleChange} /> : null}
              <br />
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button
                  type="submit"
                  className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]"
                >Register</button>
                <button className="btn btn-ghost text-red-500" onClick={handleBackClick}>
                Back
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
