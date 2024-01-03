import { useDispatch } from 'react-redux';
import { setSearch } from "../../../../../utils/slice/reservationSlice";

const ClearSearchBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="ml-[-35px] z-10"
      onClick={() => dispatch(setSearch(""))}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  )
}

export default ClearSearchBtn;