/* eslint-disable react/prop-types */
import axios from "axios";
import VehicleForm from "./VehicleForm";

const EditVehicleForm = ({ onExit, initialData, handleFormSubmit }) => {
  const handleSubmit = async (id, data) => {
    await axios.put(`http://localhost:3000/user/${id}/edit-vehicle`, data);
    handleFormSubmit();
    onExit();
  };

  return (
    <VehicleForm
      onExit={onExit}
      onSubmit={handleSubmit}
      initialData={initialData}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default EditVehicleForm;
