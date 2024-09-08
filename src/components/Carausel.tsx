import  { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwipeable } from "react-swipeable";

const Carousel = () => {
  const slides = [
    {
      imageSrc: "https://cdn.pixabay.com/photo/2021/08/27/10/16/baby-6578335_1280.jpg", // Placeholder image
      heading: "Support Our Cause",
      text: "Help us make a difference in the lives of many.",
    },
    {
      imageSrc: "https://cdn.pixabay.com/photo/2021/05/20/13/06/kid-6268594_1280.jpg",
      heading: "Donate Today",
      text: "Your donations go directly to those in need.",
    },
    {
      imageSrc: "https://cdn.pixabay.com/photo/2019/08/09/20/52/old-man-4395870_1280.jpg",
      heading: "Join Our Mission",
      text: "Become part of our team and volunteer.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [isPaused]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div
      {...handlers}
      className="relative max-w-full h-[400px] md:h-[450px] lg:h-[500px] mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[400px] md:h-[450px] lg:h-[500px] flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="w-full md:w-[70%] h-full">
              <img
                src={slide.imageSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="w-full md:w-[30%] h-full bg-sky-300 p-4 flex flex-col justify-center items-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                {slide.heading}
              </h2>
              <p className="text-sm md:text-base lg:text-lg mb-6">{slide.text}</p>
              <button className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-sky-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        onClick={prevSlide}
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        onClick={nextSlide}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default Carousel;
