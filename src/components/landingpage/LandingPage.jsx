import Carousel from './Carousel/Carousel';
import Cards from './cards/Cards';
import {slides} from '../../lib/landingpage/landingPageSliders';
import { cardData } from '../../lib/landingpage/landingPageCards';
import UserValetButtons from './roleButtons/UserValetButtons';
import Footer from '../footer/Footer';
import SearchBar from '../user-reservation/search/SearchBar'

function LandingPage() {
    return (
        <>
            <SearchBar />
            <Carousel slides={slides}/>
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
        </>
    );
}

export default LandingPage;

