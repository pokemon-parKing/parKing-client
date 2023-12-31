import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  setUserDataPhoneNumber,
} from "../../utils/slice/accountsSlice.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber.js";
import toast from "react-hot-toast";

const AccountSetting = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.accounts.userData);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        dispatch(setUserData(response.data));
        setPhoneNumber(formatPhoneNumber(response.data.phone_number));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch, id]);

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatPhoneNumber(input);
    setPhoneNumber(formattedInput);
    dispatch(setUserDataPhoneNumber(formattedInput));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setUserData({
        [name]: value,
      })
    );
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/user/${id}`, {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone_number: userData.phone_number,
      });
      toast.success("Account data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Error updating account data");
    }
  };

  return (
    <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
      <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
          Account Information
        </h1>
        <div className="w-full mt-5 sm:mt-8">
          <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5 h-[600px] overflow-y-auto">
            <label htmlFor="name" className="font-semibold text-[#000]">
              NAME:
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Your First Name"
                className="input input-bordered input-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
                defaultValue={userData.first_name}
                onChange={handleInputChange}
                name="first_name"
              />
              <input
                type="text"
                placeholder="Your Last Name"
                className="input input-bordered input-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
                defaultValue={userData.last_name}
                onChange={handleInputChange}
                name="last_name"
              />
            </div>
            <label htmlFor="email" className="font-semibold text-[#000]">
              EMAIL:
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              defaultValue={userData.email}
              onChange={handleInputChange}
              name="email"
            />
            <label htmlFor="phonenumber" className="font-semibold text-[#000]">
              PHONE NUMBER:
            </label>
            <input
              type="text"
              id="phonenumber"
              placeholder="(xxx) xxx-xxxx"
              pattern="[0-9]*"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
            />
            <label htmlFor="password" className="font-semibold text-[#000]">
              PASSWORD:
            </label>
            <input
              type="Password"
              placeholder="Your Password"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
            />
            <div className="flex items-center gap-1.5  justify-start pl-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox-xs checkbox-primary"
                  />
                </label>
              </div>
              <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                Send reservation information to my
                <span className="text-[#000]">&nbsp;Email</span>
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
              <button
                className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
