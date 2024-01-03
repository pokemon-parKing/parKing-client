import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const ReservationPage = () => {
  // const role = useSelector(state => state.accounts.userData.role);
  const role = 'admin'

  useEffect(() => {
    if (!role) {
      toast.error('Whoops! Login to access our features!')
    }
  }, [role])

  return (
    <>
      {!role && <Navigate to='/'/>}
      {role === 'admin' && <Navigate to='/valet-res' replace={true} />}
      {role === 'user' && <Navigate to='/user-res' replace={true} />}
    </>
  )
}

export default ReservationPage;