import Carousel from './Carousel/Carousel';
import Cards from './cards/Cards';
import {slides} from '../../lib/landingpage/landingPageSliders';
import { cardData } from '../../lib/landingpage/landingPageCards';

function LandingPage() {
    return (
        <>
            <Carousel slides={slides}/>
            <h1 className='text-center text-5xl my-4 mb-20'>How the App works</h1>
            <div className='flex py-25 gap-x-10 mx-56'>
                {cardData.map((item, index) => (
                    <Cards key={index} icon={item.icon} title={item.title} text={item.text} />
                ))}
            </div>
        </>
    );
}

export default LandingPage;

