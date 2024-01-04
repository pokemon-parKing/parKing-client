import { useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import { getNext8Days } from "../user-reservation/reservation/GoogleMaps/components/DaysDropdown";
import { getReservationList } from '../../utils/valetReservationUtils.js'
import { Link } from 'react-router-dom';

const SearchReservation = () => {
  const { reservations } = useSelector((state) => state.valet);
  const [list, setList] = useState(reservations);
  const [search, setSearch] = useState('');
  const garage_id= 1;

  const getNewList = async (date) => {
    const data = await getReservationList(garage_id, date.replace(/\//g, "-"));
    setList(data);
  }

  const filteredList = useMemo(() => {
    return list.filter(reservation => {
      if (JSON.stringify(reservation).toLowerCase().includes(search.toLowerCase())) {
        return reservation;
      }
    })
  }, [list, search])

  return (
    <div>
      <div className='flex flex-row'>
        <h4>Select a date: </h4>
        <select onChange={(e) => getNewList(e.target.value)}>
          {getNext8Days()}
        </select>
      </div>
      <div className='flex flex-row'>
        <label htmlFor='search'>Search: </label>
        <input className= 'border border-black rounded-md' name='search' type='text' onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className='flex flex-col gap-2 max-h-[60vh] overflow-y-scroll min-w-[600px] shadow-lg'>
        {
          filteredList.map(reservation => {
            const { time, status, cars, parking_spot_id, id } = reservation;
            return (
              <Link to={`/valet/reservation/${id}`} key={id} className="p-4 bg-gray-100 shadow-md rounded-md">
                Time: {time}, {parking_spot_id}, {status}, {cars.color} {cars.make} {cars.model}
              </Link>
            );
          })
        }
      </div>
      <Link to="/valet" className="flex justify-center py-5 text-blue-500 hover:underline">
        Back to Valet Reservation Page
      </Link>
    </div>
  );
}

export default SearchReservation;