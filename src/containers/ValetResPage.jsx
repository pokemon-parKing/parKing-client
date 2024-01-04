import { Outlet } from 'react-router-dom';

const ValetResPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Valet Reservation Page</h1>
      <Outlet />
    </div>
  )
}

export default ValetResPage;