import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import GarageInformationCard from "./GarageInformationCard";
import ParkingSpotsStat from "./ParkingSpotsStat";
import HoursOfOperationStat from "./HoursOfOperationStat";
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
        <div className="h-[600px] overflow-y-auto">
          <GarageInformationCard valetData={valetData} />
          <div className="flex flex-row justify-evenly">
            <ParkingSpotsStat
              valetData={valetData}
              setParkingSpots={setParkingSpots}
              handleParkingSpotsUpdate={handleParkingSpotsUpdate}
            />
            <HoursOfOperationStat
              valetData={valetData}
              setOpeningHour={setOpeningHour}
              setClosingHour={setClosingHour}
              handleHoursUpdate={handleHoursUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
