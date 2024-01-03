function DriverButtons({ firstName, lastName }) {
    return (
        <div className="flex justify-between space-x-4">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Reserve a parking spot
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Look at your car info
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                View reservations
            </button>
        </div>
    );
}

export default DriverButtons
  