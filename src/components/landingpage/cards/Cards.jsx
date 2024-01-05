function Cards({ icon, title, text }) {
    return (
        <div className='flex flex-col items-center text-center '>
            <div className='h-20 w-20 '>
                <img src={icon}></img>
            </div>
            <h2 className='my-5 text-2xl text-black font-bold'>{title}</h2>
            <p className='mx-8 mb-8 md:mb-0 lg:w-fit'>{text}</p>
        </div>
    );
}

export default Cards;
