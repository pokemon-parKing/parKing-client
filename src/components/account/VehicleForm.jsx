import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

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
    <div className="max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-center p-10 h-[750px]">
      <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000] mt-5">
          {initialData ? "Edit Vehicle" : "Add New Vehicle"}
        </h1>
        <div className="w-full mt-5 sm:mt-8">
          <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-6 h-[600px]">
            <label htmlFor="make" className="font-semibold text-[#000]">
              Make:
            <input
              type="text"
              placeholder="Your Vehicle's Make"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.make}
              name="make"
            />
            </label>
            <label htmlFor="model" className="font-semibold text-[#000]">
              Model:
            <input
              type="text"
              placeholder="Your Vehicle's Model"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.model}
              name="model"
            />
            </label>
            <label htmlFor="color" className="font-semibold text-[#000]">
              Color:
            <input
              type="text"
              placeholder="Your Vehicle's Color"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.color}
              name="color"
            />
            </label>
            <label
              htmlFor="license_plate_number"
              className="font-semibold text-[#000]"
            >
              License Plate Number:
            <input
              type="text"
              placeholder="Your Vehicle's License Plate Number"
              className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
              onChange={handleInputChange}
              defaultValue={vehicleData.license_plate_number}
              name="license_plate_number"
            />
            </label>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
            <button className="btn  btn-ghost bg-burgundy-p text-white btn-block max-w-[200px]" onClick={onExit}>
                Exit
              </button>
              <button
                className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]"
                onClick={handleSubmit}
              >
                {initialData ? "Edit Vehicle" : "Add Vehicle"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VehicleForm.propTypes = {
  onExit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired,
};

export default VehicleForm;
