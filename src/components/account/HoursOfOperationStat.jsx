import PropTypes from 'prop-types';
import EditHoursModal from "./EditHoursModal";

const HoursOfOperationStat = ({
  valetData,
  setOpeningHour,
  setClosingHour,
  handleHoursUpdate,
}) => {
  return (
    <div className="stats shadow w-[50%]">
      <div className="stat">
        <div className="stat-title">Hours of Operation</div>
        <div className="stat-value">{valetData?.operation_hours}</div>
        <button
          className="btn btn-ghost text-blue-500"
          onClick={() => document.getElementById("editHoursModal").showModal()}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Edit
        </button>
        <EditHoursModal
          valetData={valetData}
          setOpeningHour={setOpeningHour}
          setClosingHour={setClosingHour}
          handleHoursUpdate={handleHoursUpdate}
        />
      </div>
    </div>
  );
};

HoursOfOperationStat.propTypes = {
  valetData: PropTypes.object.isRequired,
  setOpeningHour: PropTypes.func.isRequired,
  setClosingHour: PropTypes.func.isRequired,
  handleHoursUpdate: PropTypes.func.isRequired
}

export default HoursOfOperationStat;
