import PropTypes from 'prop-types';

function Cards({ icon, title, text, altText }) {
    return (
        <div className='flex flex-col items-center text-center '>
            <div className='h-20 w-20 '>
                <img src={icon} alt={altText} className='w-full h-auto'></img>
            </div>
            <h2 className='my-5 text-2xl text-black font-bold'>{title}</h2>
            <p className='mx-8 mb-8 md:mb-0 lg:w-fit'>{text}</p>
        </div>
    );
}

Cards.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
}

export default Cards;
