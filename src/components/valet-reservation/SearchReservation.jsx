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
    <div className='min-w-[600px] min-h-[60vh]'>
      <h1 className='text-3xl font-semibold my-4 mb-4 text-center'>Search for Reservations by Date</h1>
      <div className='flex flex-row mt-5'>
        <h4 className='pr-1.5 font-semibold'>Select a date: </h4>
        <select className='border border-black bg-gray-100 hover:bg-gray-300' onChange={(e) => getNewList(e.target.value)}>
          {getNext8Days()}
        </select>
      </div>
      <div className='flex flex-row py-2.5'>
        <label className='pr-1.5 font-semibold' htmlFor='search'>Search: </label>
        <input className= 'border border-black rounded-md' name='search' type='text' onChange={(e) => setSearch(e.target.value)}/>
      </div>

      <div className='grid grid-cols-1 gap-2 min-h-[40vh] max-h-[60vh] overflow-y-scroll min-w-[600px] shadow-lg'>
        {
          filteredList.map(reservation => {
            const { time, status, cars, parking_spot_id, id } = reservation;
            return (
              <Link to={`/valet/reservation/${id}`} key={id} className="p-4 bg-gray-100 shadow-md rounded-md hover:bg-gray-300">
                <h2 className='font-semibold'>
                Reservation #: {id}
                </h2>
                <p>
                  <span className='font-semibold'>Time: </span>
                  {time}
                </p>
                <p>
                   <span className='font-semibold'>Spot #: </span>
                  {parking_spot_id}</p>
                <p>
                  <span className='font-semibold'>Status: </span>
                  {status==='reserved' ? 'Reserved' : 'Checked-in'}
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
      <Link to="/valet" className="btn btn-active mx-auto my-8 bg-black border-black text-white btn-primary btn-block  max-w-[200px]">
        Back
      </Link>
    </div>
  );
}

export default SearchReservation;