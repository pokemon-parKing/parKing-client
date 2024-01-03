/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const VehicleForm = ({ onExit, onSubmit, initialData }) => {
  const userData = useSelector((state) => state.accounts.userData);
  const { id } = userData;
  const [vehicleData, setVehicleData] = useState({
    make: "",
    model: "",
    color: "",
    license_plate_number: "",
  });

  useEffect(() => {
    setVehicleData(initialData || {});
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await onSubmit(id, vehicleData);
      console.log("Vehicle data submitted successfully!");
      toast.success("Vehicle has been submitted successfully");
    } catch (error) {
      console.error("Error submitting vehicle data:", error);
      toast.error("Error submitting vehicle");
    }
  };

  return (
    <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
      <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
          {initialData ? "Edit Vehicle" : "Add New Vehicle"}
        </h1>
        <div className="w-full mt-5 sm:mt-8">
          <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5 h-[600px] overflow-y-auto">
            <label htmlFor="make" className="font-semibold text-[#000]">
              Make:
            </label>
            <input
              type="text"
              placeholder="Your Vehicle's Make"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.make}
              name="make"
            />
            <label htmlFor="model" className="font-semibold text-[#000]">
              Model:
            </label>
            <input
              type="text"
              placeholder="Your Vehicle's Model"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.model}
              name="model"
            />
            <label htmlFor="color" className="font-semibold text-[#000]">
              Color:
            </label>
            <input
              type="text"
              placeholder="Your Vehicle's Color"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.color}
              name="color"
            />
            <label
              htmlFor="license_plate_number"
              className="font-semibold text-[#000]"
            >
              License Plate Number:
            </label>
            <input
              type="text"
              placeholder="Your Vehicle's License Plate Number"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.license_plate_number}
              name="license_plate_number"
            />
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
              <button
                className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]"
                onClick={handleSubmit}
              >
                {initialData ? "Edit Vehicle" : "Add Vehicle"}
              </button>
              <button className="btn btn-ghost text-red-500" onClick={onExit}>
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleForm;
