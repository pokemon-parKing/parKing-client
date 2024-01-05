import PropTypes from 'prop-types';

function Cards({ icon, title, text }) {
    return (
        <div className='flex flex-col items-center text-center mb-40'>
            <div className='h-20 w-20'>
                <img src={icon}></img>
            </div>
            <h2 className='my-5 text-2xl text-black font-bold'>{title}</h2>
            <p className='mx-8'>{text}</p>
        </div>
    );
}

Cards.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Cards;
