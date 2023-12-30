/* eslint-disable react/prop-types */
import axios from "axios";
import VehicleForm from "./VehicleForm";

const AddVehicleForm = ({ onExit, handleFormSubmit }) => {
  const handleSubmit = async (id, data) => {
    await axios.post(`http://localhost:3000/user/${id}/add-vehicle`, data);
    handleFormSubmit();
    onExit();
  };

  return (
    <VehicleForm
      onExit={onExit}
      onSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default AddVehicleForm;
