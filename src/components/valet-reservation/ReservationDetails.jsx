import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ReservationDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(id);

  }, [id])

  if (!id) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h1>Reservation Details</h1>
    </div>
  );
}

export default ReservationDetails;