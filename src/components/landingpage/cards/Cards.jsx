function Cards({ icon, title, text }) {
    return (
        <div className='flex flex-col items-center text-center mb-40'>
            <div className='h-20 w-20'>
                <img src={icon}></img>
            </div>
            <h2 className='my-5 text-xl text-[var(--pk-beige)]'>{title}</h2>
            <p className='mx-8'>{text}</p>
        </div>
    );
}

export default Cards;
