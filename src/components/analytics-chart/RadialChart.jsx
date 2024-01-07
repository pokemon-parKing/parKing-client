import { useSelector } from "react-redux";
import { useMemo } from "react";

const RadialChart = () => {
  const { spots: allSpots } = useSelector((state) => state.valet);
  const { spots } = useSelector((state) => state.accounts.valetData);

  const percentage = useMemo(() => {
    const { occupied, reserved } = allSpots;
    return Math.ceil((occupied + reserved) / spots);
  }, [spots, allSpots]);

  return (
    <>
      <h2 className="stat-title">Currently Occupied:</h2>
      <div
        className="radial-progress text-burgundy-p"
        style={{ "--value": percentage }}
        role="progressbar"
      >
        {percentage}%
      </div>
    </>
  );
};

export default RadialChart;
