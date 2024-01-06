import PropTypes from 'prop-types';

const GarageInformationCard = ({ valetData }) => {
  return (
    <div key={valetData?.id} className="card bg-base-100 shadow-xl w-[30%]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Garage Information</h2>
        <div className="text-[#000] font-medium mb-2">{valetData?.name}</div>
        <div className="text-[#000] w-full text-left flex flex-col">
          <span>{`${valetData?.address},`}</span>
          <span> {`${valetData?.city} ${valetData?.state}, ${valetData?.zip}`}</span>
        </div>
        <div className="text-[#000] text-left flex flex-col w-full">
          <span>
            <span className='font-medium'>Latitude: </span>
            {valetData?.lat}
          </span>
          <span>
            <span className='font-medium'>Longitude: </span>
            {valetData?.lng}
          </span>
        </div>
      </div>
    </div>
  );
};

GarageInformationCard.propTypes = {
  valetData: PropTypes.object.isRequired
}

export default GarageInformationCard;
