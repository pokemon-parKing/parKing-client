import Cards from "./cards/Cards";
import { cardData } from "../../lib/landingpage/landingPageCards";
import SearchBar from "../user-reservation/search/SearchBar";
import GreetUser from "./GreetUser/GreetUser";

function LandingPage() {
  return (
    <>
      <div className="relative mx-auto w-full h-[60vh] overflow-hidden ">
        <GreetUser />
        <img
          className="absolute top-1/37 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
          src="src/assets/parKingCrownLogo.png"
        ></img>
        <SearchBar />
        <img
          className="h-full w-full object-cover"
          src="src/assets/landingpage/carouselPhoto1.jpg"
        ></img>
      </div>

      <div className="my-10 py-10">
        <h1 className="text-center text-5xl mb-10 text-black font-semibold">
          How the App Works
        </h1>
        <div className="flex flex-col  mx-0 xl:mx-56 md:flex-row">
          {cardData.map((item, index) => (
            <Cards
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
