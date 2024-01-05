import VehicleForm from "./VehicleForm";
import { useDispatch } from "react-redux";
import { fetchVehicleData, editVehicleApi } from "../../utils/accountUtils.js";
import PropTypes from 'prop-types';

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

EditVehicleForm.propTypes = {
  onExit: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired
}

export default EditVehicleForm;
