/* eslint-disable react/prop-types */
import axios from "axios";
import VehicleForm from "./VehicleForm";

const EditVehicleForm = ({ onExit, initialData }) => {
  const handleSubmit = async (id, data) => {
    await axios.put(`http://localhost:3000/user/${id}/edit-vehicle`, data);
  };

  return (
    <VehicleForm
      onExit={onExit}
      onSubmit={handleSubmit}
      initialData={initialData}
    />
  );
};

export default EditVehicleForm;
