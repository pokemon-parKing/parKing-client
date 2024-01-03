/* eslint-disable react/prop-types */
const HoursModal = ({
  valetData,
  setOpeningHour,
  setClosingHour,
  handleHoursUpdate,
}) => {
  return (
    <dialog id="editHoursModal" className="modal">
      <div className="modal-box">
        <form
          method="dialog"
          className="flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleHoursUpdate();
          }}
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Edit Hours of Operation</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Opening Hour"
                className="input input-bordered input-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
                name="opening_hour"
                defaultValue={valetData?.operation_hours.split("-")[0]}
                onChange={(e) => setOpeningHour(e.target.value)}
              />
              <input
                type="text"
                placeholder="Closing Hour"
                className="input input-bordered input-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
                name="closing_hour"
                defaultValue={valetData?.operation_hours.split("-")[1]}
                onChange={(e) => setClosingHour(e.target.value)}
              />
            </div>
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
            onClick={() => document.getElementById("editHoursModal").close()}
          >
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default HoursModal;
