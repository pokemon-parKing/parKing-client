import { useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import { getNext8Days } from "../user-reservation/reservation/GoogleMaps/components/DaysDropdown";
import { getReservationList } from '../../utils/valetReservationUtils.js'
import { Link } from 'react-router-dom';

const SearchReservation = () => {
  const { id: garage_id } = useSelector((state) => state.accounts.valetData);
  const { reservations } = useSelector((state) => state.valet);
  const [list, setList] = useState(reservations);
  const [search, setSearch] = useState('');

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
      <div className='flex flex-row py-2.5'>
        <label className='pr-1.5' htmlFor='search'>Search: </label>
        <input className= 'border border-black rounded-md' name='search' type='text' onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className="pb-2.5">
      <Link to="/valet" className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[150px]">
        Back
      </Link>
      </div>
      <div className='grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-scroll min-w-[600px] shadow-lg'>
        {
          filteredList.map(reservation => {
            const { time, status, cars, parking_spot_id, id } = reservation;
            return (
              <Link to={`/valet/reservation/${id}`} key={id} className="p-4 bg-gray-100 shadow-md rounded-md hover:bg-gray-300">
                <p>
                  <span className='font-semibold'>Time: </span>
                  {time}
                </p>
                <p>
                   <span className='font-semibold'>Spot #: </span>
                  {parking_spot_id}</p>
                <p>
                  <span className='font-semibold'>Status: </span>
                  {status}
                </p>
                <p>
                  <span className='font-semibold'>Car: </span>
                  {cars.color} {cars.make} {cars.model}
                </p>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}

export default SearchReservation;