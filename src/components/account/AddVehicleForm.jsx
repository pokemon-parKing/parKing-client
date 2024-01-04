/* eslint-disable react/prop-types */
import axios from "axios";
import VehicleForm from "./VehicleForm";
import { useDispatch } from "react-redux";

const AddVehicleForm = ({ onExit, fetchVehicleData }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (id, data) => {
    await axios.post(`http://localhost:3002/user/${id}/add-vehicle`, data);
    fetchVehicleData(dispatch, id);
    onExit();
  };

  return <VehicleForm onExit={onExit} onSubmit={handleSubmit} />;
};

export default AddVehicleForm;
