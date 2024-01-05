import { Outlet } from 'react-router-dom';

const ValetResPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-2">
      <Outlet />
    </div>
  )
}

export default ValetResPage;