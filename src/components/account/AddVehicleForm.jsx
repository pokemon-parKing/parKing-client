import VehicleForm from "./VehicleForm";
import { useDispatch } from "react-redux";
import { fetchVehicleData, addVehicleApi } from "../../utils/accountUtils.js";
import PropTypes from 'prop-types';

const AddVehicleForm = ({ onExit }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (id, data) => {
    const addSuccess = await addVehicleApi(id, data);
    if (addSuccess) {
      await fetchVehicleData(id, dispatch);
      onExit();
    } else {
      console.error("Error adding vehicle");
    }
  };

  return <VehicleForm onExit={onExit} onSubmit={handleSubmit} />;
};

AddVehicleForm.propTypes = {
  onExit: PropTypes.func.isRequired,
}

export default AddVehicleForm;
