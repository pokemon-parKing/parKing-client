const VehicleForm = ({ formData, handleChange }) => {
  return (
    <div>
      <label>
        Make:
        <input type="text" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} placeholder="Rolls-Royce" required />
      </label>
      <label>
        Model:
        <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} placeholder="Cullinan" required />
      </label>
      <label>
        Color:
        <input type="text" name="vehicleColor" value={formData.vehicleColor} onChange={handleChange} placeholder="Black" required />
      </label>
      <label>
        License Plate Number:
        <input type="text" name="vehicleLicensePlate" value={formData.vehicleLicensePlate} onChange={handleChange} placeholder="ABC1234" required />
      </label>
    </div>
  );
};

export default VehicleForm;