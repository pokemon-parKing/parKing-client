const VehicleForm = ({ formData, handleChange }) => {
  return (
    <div>
      <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
          What do you drive?
        </h1>
      <label htmlFor="vehicleMake" className="font-semibold text-[#000]">
        Make:
      </label>
      <input
        type="text"
        id="vehicleMake"
        name="vehicleMake"
        value={formData.vehicleMake}
        onChange={handleChange}
        placeholder="Rolls-Royce"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
      <label htmlFor="vehicleModel" className="font-semibold text-[#000]">
        Model:
      </label>
      <input
        type="text"
        id="vehicleModel"
        name="vehicleModel"
        value={formData.vehicleModel}
        onChange={handleChange}
        placeholder="Cullinan"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
      <label htmlFor="vehicleColor" className="font-semibold text-[#000]">
        Color:
      </label>
      <input
        type="text"
        name="vehicleColor"
        value={formData.vehicleColor}
        onChange={handleChange}
        placeholder="Black"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
      <label htmlFor="vehicleLicensePlate" className="font-semibold text-[#000]">
        License Plate Number:
      </label>
      <input
        type="text"
        name="vehicleLicensePlate"
        value={formData.vehicleLicensePlate}
        onChange={handleChange}
        placeholder="ABC1234"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
    </div>
  );
};

export default VehicleForm;