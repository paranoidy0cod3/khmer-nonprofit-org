import  { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      image: 'https://cdn.pixabay.com/photo/2022/04/24/02/30/kid-7152758_1280.jpg',
      quote: "This program has truly transformed my life. I've gained valuable skills and confidence that I never thought possible.",
      name: "Maria Rossi",
      location: "Italy",
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/08/05/11/children-1807511_1280.jpg',
      quote: "I'm so grateful for the opportunity to connect with others who share my passions. This program has been a game-changer.",
      name: "Ahmed Ali",
      location: "Egypt",
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/03/14/18/18/kids-2143982_1280.jpg',
      quote: "The support and mentorship I received here have been invaluable. I'm excited to see where my journey takes me next.",
      name: "Ana Silva",
      location: "Brazil",
    },
    {
      image: 'https://cdn.pixabay.com/photo/2021/03/21/13/32/kids-6112105_1280.jpg',
      quote: "This program has helped me develop essential skills for the workforce and achieve my career goals.",
      name: "David Lee",
      location: "United States",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const handleSlide = (direction: 'left' | 'right') => {
    const newIndex = (direction === 'left') 
      ? (currentIndex + 1) % testimonials.length 
      : (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => handleSlide('left'), 3000); // Auto-slide every 3 seconds
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current !== null) {
      clearInterval(autoSlideRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Clean up the interval on unmount
  }, [currentIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSlide('left'),
    onSwipedRight: () => handleSlide('right'),
  });

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-sky-400"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      {...swipeHandlers}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: '100%' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-8 flex flex-col items-center text-center"
            style={{ width: '100%' }}
          >
            <img
              src={testimonial.image}
              alt="Testimonial"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
            />
            <div className="w-full max-w-md">
              <p className="text-xl font-semibold mb-2 text-white">{testimonial.quote}</p>
              <div className="flex flex-col items-center text-white">
                <p className="font-bold">{testimonial.name}</p>
                <p>{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-0 right-0 flex gap-2 p-4">
        <button
          onClick={() => handleSlide('right')}
          className="text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#x2039;
        </button>
        <button
          onClick={() => handleSlide('left')}
          className="text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#x203A;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
