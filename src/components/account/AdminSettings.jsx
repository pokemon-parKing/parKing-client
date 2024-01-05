import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import EditParkingSpotsModal from "./EditParkingSpotsModal";
import EditHoursModal from "./EditHoursModal";
import {
  getValetDataApi,
  updateParkingSpotsApi,
  updateHoursApi,
} from "../../utils/accountUtils.js";

const AdminSettings = () => {
  const dispatch = useDispatch();
  const valetData = useSelector((state) => state.accounts.valetData);
  const [parkingSpots, setParkingSpots] = useState(null);
  const [openingHour, setOpeningHour] = useState(null);
  const [closingHour, setClosingHour] = useState(null);
  const userData = useSelector((state) => state.accounts.userData);
  const { id } = userData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getValetDataApi(id, dispatch);
        setParkingSpots(data.spots);
        setOpeningHour(data.operation_hours.split("-")[0]);
        setClosingHour(data.operation_hours.split("-")[1]);
      } catch (error) {
        console.error("Error fetching valet data:", error);
        toast.error("Error fetching valet data. Please try again.");
      }
    };

    fetchData();
  }, [dispatch, id]);

  const handleParkingSpotsUpdate = async () => {
    const parsedSpots = parseInt(parkingSpots, 10);
    if (isNaN(parsedSpots)) {
      toast.error("Please enter a valid number for parking spots.");
      return;
    }

    const updateSuccess = await updateParkingSpotsApi(id, parsedSpots);

    if (updateSuccess) {
      toast.success("Parking spots updated successfully!");
      const data = await getValetDataApi(id, dispatch);
      setParkingSpots(data.spots);
      setOpeningHour(data.operation_hours.split("-")[0]);
      setClosingHour(data.operation_hours.split("-")[1]);
      document.getElementById("editParkingSpots").close();
    } else {
      toast.error("Error updating parking spots. Please try again.");
      document.getElementById("editParkingSpots").close();
    }
  };

  const handleHoursUpdate = async () => {
    const operationHours = `${openingHour}-${closingHour}`;
    const updateSuccess = await updateHoursApi(id, operationHours);

    if (updateSuccess) {
      toast.success("Hours of operation updated successfully!");
      const data = await getValetDataApi(id, dispatch);
      setParkingSpots(data.spots);
      setOpeningHour(data.operation_hours.split("-")[0]);
      setClosingHour(data.operation_hours.split("-")[1]);
      document.getElementById("editHoursModal").close();
    } else {
      toast.error("Error updating hours of operation. Please try again.");
      document.getElementById("editHoursModal").close();
    }
  };

  return (
    <div className="max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-center p-10 h-[750px]">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#000] mb-5">
          Admin Settings
        </h1>
        <div className="gap-6 h-[600px] overflow-y-auto">
          <div
            key={valetData?.id}
            className="card bg-base-100 shadow-xl mb-3 mr-3"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">Garage Information</h2>
              <p className="text-[#000]">{valetData?.name}</p>
              <p className="text-[#000]">{`${valetData?.address}, ${valetData?.city}, ${valetData?.state}, ${valetData?.country}, ${valetData?.zip}`}</p>
              <p className="text-[#000]">{`Latitude: ${valetData?.lat}`}</p>
              <p className="text-[#000]">{`Longitude: ${valetData?.lng}`}</p>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Number of Parking Spots</div>
              <div className="stat-value">{valetData?.spots}</div>
              <button
                className="btn btn-ghost text-blue-500"
                onClick={() =>
                  document.getElementById("editParkingSpots").showModal()
                }
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
              <EditParkingSpotsModal
                valetData={valetData}
                setParkingSpots={setParkingSpots}
                handleParkingSpotsUpdate={handleParkingSpotsUpdate}
              />
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Hours of Operation</div>
              <div className="stat-value">{valetData?.operation_hours}</div>
              <button
                className="btn btn-ghost text-blue-500"
                onClick={() =>
                  document.getElementById("editHoursModal").showModal()
                }
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
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
