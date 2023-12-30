import axios from "axios";
import VehicleForm from "./VehicleForm";

const AddVehicleForm = ({ onExit }) => {
  const handleSubmit = async (id, data) => {
    await axios.post(`http://localhost:3000/user/${id}/add-vehicle`, data);
  };

  return <VehicleForm onExit={onExit} onSubmit={handleSubmit} />;
};

export default AddVehicleForm;
