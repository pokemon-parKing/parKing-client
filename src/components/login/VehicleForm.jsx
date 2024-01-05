import PropTypes from 'prop-types';

const VehicleForm = ({ formData, handleChange }) => {
  return (
    <div>
      <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000] mt-4">
          What do you drive?
        </h1>
      <label htmlFor="vehicleMake" className="font-semibold text-[#000]">
        MAKE:
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
        MODEL:
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
        COLOR:
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
        LICENSE PLATE NUMBER:
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

VehicleForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default VehicleForm;