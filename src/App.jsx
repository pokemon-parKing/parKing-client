import UserReservation from "./containers/UserReservation.jsx";
// import { Link } from 'react-router-dom';
import TimeSlotList from './components/user-reservation/TimeSlotList';

const list = {"6":2, "12": 50}

function App() {
  return (
    <>
      {/* <Link to={'/pokemon'}>Pokemon</Link> */}
      parKing - Pokemon
      <div className="flex flex-col md:flex-row ">Test</div>
      <UserReservation />
      <TimeSlotList list={list} total={50} hoursOfOperation={'1-16'} />
    </>
  );
}

export default App;
