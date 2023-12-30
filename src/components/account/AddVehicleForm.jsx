/* eslint-disable react/prop-types */
import axios from "axios";
import VehicleForm from "./VehicleForm";

const AddVehicleForm = ({ onExit }) => {
  const handleSubmit = async (id, data) => {
    await axios.post(`http://localhost:3000/user/${id}/add-vehicle`, data);
    onExit();
  };

  return <VehicleForm onExit={onExit} onSubmit={handleSubmit} />;
};

export default AddVehicleForm;
