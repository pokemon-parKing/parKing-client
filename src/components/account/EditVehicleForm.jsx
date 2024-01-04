/* eslint-disable react/prop-types */
import axios from "axios";
import VehicleForm from "./VehicleForm";
import { useDispatch } from "react-redux";

const EditVehicleForm = ({ onExit, initialData, fetchVehicleData }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (id, data) => {
    await axios.put(`http://localhost:3003/user/${id}/edit-vehicle`, data);
    fetchVehicleData(dispatch, id);
    onExit();
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
