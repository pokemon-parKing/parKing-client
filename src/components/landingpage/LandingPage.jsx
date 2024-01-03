import Carousel from './Carousel/Carousel';
import Cards from './cards/Cards';
import {slides} from '../../lib/landingpage/landingPageSliders';
import { cardData } from '../../lib/landingpage/landingPageCards';
<<<<<<< HEAD
import UserValetButtons from './roleButtons/UserValetButtons';
import Footer from '../footer/Footer';
=======

>>>>>>> 57a1c18b9c1ff542d531b5f3a272b33da49df71d
function LandingPage() {
    return (
        <>
            <Carousel slides={slides}/>
<<<<<<< HEAD
            <div className='my-52 '>
                <h1 className='text-center text-5xl mb-24 text-black '>How the App works</h1>
                <div className='flex py-25 gap-x-10 mx-56'>
                    {cardData.map((item, index) => (
                        <Cards key={index} icon={item.icon} title={item.title} text={item.text} />
                    ))}
                </div>
            </div>
            
            <UserValetButtons />
            <Footer/>
=======
            <h1 className='text-center text-5xl my-4 mb-20'>How the App works</h1>
            <div className='flex py-25 gap-x-10 mx-56'>
                {cardData.map((item, index) => (
                    <Cards key={index} icon={item.icon} title={item.title} text={item.text} />
                ))}
            </div>
>>>>>>> 57a1c18b9c1ff542d531b5f3a272b33da49df71d
        </>
    );
}

export default LandingPage;

