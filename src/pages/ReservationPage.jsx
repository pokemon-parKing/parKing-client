import { useSelector } from 'react-redux';
import ValetReservation from '../containers/ValetReservation';
import UserReservation from '../containers/UserReservation';


const ReservationPage = () => {
  const role = useSelector((state) => state.accounts.userData.role);

  return (
    <>
      {role === 'admin' && <ValetReservation />}
      {role === 'user' && <UserReservation />}
    </>
  )
}

export default ReservationPage;