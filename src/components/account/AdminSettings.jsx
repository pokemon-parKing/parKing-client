import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AdminSettings = () => {
  const [valetData, setValetData] = useState(null);
  const [parkingSpots, setParkingSpots] = useState(0);
  const [openingHour, setOpeningHour] = useState("");
  const [closingHour, setClosingHour] = useState("");
  const { id } = useParams();

  const getValetData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/valet/${id}`);
      setValetData(response.data[0]);
    } catch (error) {
      console.error("Error fetching valet data:", error);
    }
  };

  useEffect(() => {
    getValetData();
  }, [id]);

  const handleParkingSpotsUpdate = async () => {
    const parsedSpots = parseInt(parkingSpots, 10);
    if (isNaN(parsedSpots)) {
      toast.error("Please enter a valid number for parking spots.");
      return;
    }
    try {
      await axios.put(`http://localhost:3000/valet/${id}/operation-hours`, {
        spots: parsedSpots,
      });
      toast.success("Parking spots updated successfully!");
      getValetData();
      document.getElementById("editParkingSpots").close();
    } catch (error) {
      console.error("Error updating parking spots:", error);
      toast.error("Error updating parking spots. Please try again.");
    }
  };

  const handleHoursUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/valet/${id}/spots`, {
        operation_hours: `${openingHour}-${closingHour}`,
      });
      toast.success("Hours of operation updated successfully!");
      getValetData();
      document.getElementById("editHoursModal").close();
    } catch (error) {
      console.error("Error updating hours of operation:", error);
      toast.error("Error updating hours of operation. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-center p-10">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#000] mb-5">
          Admin Settings
        </h1>
        <div className="gap-6 h-[600px] overflow-y-auto">
          <div
            key={valetData?.id}
            className="card bg-base-100 shadow-xl mb-3 mr-3 max-w-200 max-h-200"
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
                        <span className="label-text">
                          Edit Number of Parking Spots
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Your requested number of parking spots"
                        className="input input-bordered input-primary w-full max-w-xs"
                        value={parkingSpots}
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
                      onClick={() =>
                        document.getElementById("editParkingSpots").close()
                      }
                    >
                      ✕
                    </button>
                  </form>
                </div>
              </dialog>
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
                        <span className="label-text">
                          Edit Hours of Operation
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          placeholder="Opening Hour"
                          className="input input-bordered input-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
                          name="opening_hour"
                          value={openingHour}
                          onChange={(e) => setOpeningHour(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Closing Hour"
                          className="input input-bordered input-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
                          name="closing_hour"
                          value={closingHour}
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
                      onClick={() =>
                        document.getElementById("editHoursModal").close()
                      }
                    >
                      ✕
                    </button>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
