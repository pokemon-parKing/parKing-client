/* eslint-disable react/prop-types */
const EditParkingSpotsModal = ({
  valetData,
  setParkingSpots,
  handleParkingSpotsUpdate,
}) => {
  return (
    <dialog id="editParkingSpots" className="modal">
      <div className="modal-box">
        <form
          method="dialog"
          className="flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleParkingSpotsUpdate();
          }}
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Edit Number of Parking Spots</span>
            </div>
            <input
              type="number"
              placeholder="Your requested number of parking spots"
              className="input input-bordered input-primary w-full max-w-xs"
              defaultValue={valetData?.spots}
              onChange={(e) => setParkingSpots(e.target.value)}
            />
            <div className="label"></div>
          </label>
          <button
            className="btn btn-active bg-black border-black text-white btn-primary max-w-[200px]"
            type="submit"
          >
            Update
          </button>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="button"
            onClick={() => document.getElementById("editParkingSpots").close()}
          >
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default EditParkingSpotsModal;
