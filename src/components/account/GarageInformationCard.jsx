const GarageInformationCard = ({ valetData }) => {
  return (
    <div key={valetData?.id} className="card bg-base-100 shadow-xl mb-3 mr-3">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Garage Information</h2>
        <p className="text-[#000]">{valetData?.name}</p>
        <p className="text-[#000]">{`${valetData?.address}`}</p>
        <p className="text-[#000]">{`${valetData?.city}, ${valetData?.state}, ${valetData?.country}, ${valetData?.zip}`}</p>
        <p className="text-[#000]">{`Latitude: ${valetData?.lat}`}</p>
        <p className="text-[#000]">{`Longitude: ${valetData?.lng}`}</p>
      </div>
    </div>
  );
};

export default GarageInformationCard;
