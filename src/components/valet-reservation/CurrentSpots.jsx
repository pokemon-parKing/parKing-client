import { useSelector } from "react-redux";

  const CurrentSpots = () => {
    const { spots } = useSelector((state) => state.valet);

    return (
      <>
          <div className="flex justify-center text-3xl font-semibold mb-4 pt-8">Spot Information</div>
          <div className="availability-row flex justify-around space-x-5 pb-4">
            <div className="p-2 bg-gray-100 shadow-md rounded-md">
              <h3 >Available: {spots?.available}</h3>
            </div>
            <div className="p-2 bg-gray-100 shadow-md rounded-md">
              <h3>Reserved: {spots?.reserved}</h3>
            </div>
            <div className="p-2 bg-gray-100 shadow-md rounded-md">
              <h3>Occupied: {spots?.occupied}</h3>
            </div>
          </div>
      </>
    );
  }

  export default CurrentSpots;