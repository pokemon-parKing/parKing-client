import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import { formattedDays } from "../../utils/formattedDates.js";
import { getReservationData } from "../../utils/valetReservationUtils.js";
import ToggleButton from "./ToggleButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const DataChart = () => {
  const { id, name } = useSelector((state) => state.accounts.valetData);
  const [reservationData, setReservationData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const formattedNext7Days = useMemo(() => {
    return formattedDays();
  }, []);

  const activeData = useMemo(() => {
    return {
      dates: formattedNext7Days.map((date) => {
        return date.slice(0, -3);
      }),
      totals: formattedNext7Days.map((date) => {
        return reservationData[date] || 0;
      }),
    };
  }, [reservationData, formattedNext7Days]);

  const data = {
    labels: activeData.dates,
    datasets: [
      {
        label: "Total Reservations",
        data: activeData.totals,
        borderColor: "rgb(73, 17, 28)",
        backgroundColor: "rgba(73, 17, 28, 0.7)",
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Upcoming Reservations at ${name}`,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    getReservationData(id).then(({ data }) => {
      setReservationData(data);
    });
  }, [id]);

  return (
    <div className="w-[70%] relative card shadow-xl p-4 bg-white">
      <ToggleButton toggle={toggle} setToggle={setToggle} />
      {!!activeData.totals.length &&
        (toggle ? (
          <Line options={options} data={data} />
        ) : (
          <Bar options={options} data={data} />
        ))}
    </div>
  );
};

export default DataChart;
