function Cards({ icon, title, text }) {
    return (
        <div className='flex flex-col items-center text-center mb-40'>
            <div className='h-20 w-20'>
                <img src={icon}></img>
            </div>
<<<<<<< HEAD
            <h2 className='my-5 text-2xl text-black font-bold'>{title}</h2>
=======
            <h2 className='my-5 text-xl text-[var(--pk-beige)]'>{title}</h2>
>>>>>>> 57a1c18b9c1ff542d531b5f3a272b33da49df71d
            <p className='mx-8'>{text}</p>
        </div>
    );
}

export default Cards;
