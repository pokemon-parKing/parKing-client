import { useState } from "react";
import SearchBar from "../../user-reservation/search/SearchBar";

function Carousel({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const goToPrevious = () => {
    const newIndex =
      currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newIndex);
  };
  const goToNext = () => {
    const newIndex =
      currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newIndex);
  };
  return (
    <div className="relative mx-auto w-full h-[60vh] overflow-hidden mb-10">
      <div
        className="flex relative transition-transform duration-700"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${
            currentSlideIndex * (100 / slides.length)
          }%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex w-full h-full justify-center items-center"
          >
            <img
              className="h-full object-center w-full"
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
            <p className=" absolute text-4xl top-32 text-black font-extrabold text-center">
              {slide.text}
            </p>
          </div>
        ))}
      </div>
      <SearchBar />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-1 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-1 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
