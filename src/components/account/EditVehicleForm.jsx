/* eslint-disable react/prop-types */
import VehicleForm from "./VehicleForm";
import { useDispatch } from "react-redux";
import { fetchVehicleData, editVehicleApi } from "../../utils/accountUtils.js";

const EditVehicleForm = ({ onExit, initialData }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (id, data) => {
    const editSuccess = await editVehicleApi(id, data);
    if (editSuccess) {
      await fetchVehicleData(id, dispatch);
      onExit();
    } else {
      console.error("Error editing vehicle");
    }
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
