import { Outlet } from 'react-router-dom';

const UserReservation = () => {

  return (
    <div className="flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
};

export default UserReservation;