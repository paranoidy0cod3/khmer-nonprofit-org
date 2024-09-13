import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { BlogCard, } from "../components";
import { Link } from 'react-router-dom';

import { FaRegNewspaper } from "react-icons/fa6";

// interface Cause {
//   image: string;
//   title: string;
//   description: string;
//   progress: number;
//   targetAmount: number;
//   donateLink: string;
//   detailLink: string;
// }

const BlogList = () => {
  const causes = [
    {
      image: "https://cdn.pixabay.com/photo/2013/04/02/19/53/children-99507_1280.jpg",
      title: "Educate the Future",
      description: "Provide quality education to underprivileged children.",
      progress: 70,
      targetAmount: 5000,
      donateLink: "/donate/education",
      detailLink: "/causes/1",
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/12/06/04/17/money-1885540_1280.jpg",
      title: "Protect Our Planet",
      description: "Conserve natural resources and combat climate change.",
      progress: 30,
      targetAmount: 10000,
      donateLink: "/donate/environment",
      detailLink: "/causes/2",
    },
    {
      image: "https://cdn.pixabay.com/photo/2022/07/26/06/52/cat-7345208_1280.jpg",
      title: "Animal Welfare",
      description: "Support animal shelters and rescue efforts.",
      progress: 85,
      targetAmount: 8000,
      donateLink: "/donate/animals",
      detailLink: "/causes/3",
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/04/03/03/06/treatment-4099432_1280.jpg",
      title: "Healthcare Access",
      description: "Provide medical care to those in need.",
      progress: 55,
      targetAmount: 12000,
      donateLink: "/donate/healthcare",
      detailLink: "/causes/4",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/04/25/10/13/ai-generated-8719502_1280.jpg",
      title: "Homelessness Prevention",
      description: "Support housing and shelter programs.",
      progress: 40,
      targetAmount: 7000,
      donateLink: "/donate/housing",
      detailLink: "/causes/5",
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/03/12/13/42/engineer-4925135_1280.jpg",
      title: "Disaster Relief",
      description: "Provide aid to victims of natural disasters.",
      progress: 60,
      targetAmount: 15000,
      donateLink: "/donate/disaster",
      detailLink: "/causes/6",
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/11/13/16/05/hospice-1821429_1280.jpg",
      title: "Elderly Care",
      description: "Support programs for the elderly and disabled.",
      progress: 75,
      targetAmount: 9000,
      donateLink: "/donate/elderly",
      detailLink: "/causes/7",
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/02/10/21/51/people-3144645_1280.jpg",
      title: "Fight Hunger",
      description: "Provide food and nutrition to those in need.",
      progress: 45,
      targetAmount: 20000,
      donateLink: "/donate/hunger",
      detailLink: "/causes/8",
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/07/14/04/51/cambodia-2502792_1280.jpg",
      title: "River Conservation",
      description: "Protect marine life and ecosystems.",
      progress: 35,
      targetAmount: 18000,
      donateLink: "/donate/ocean",
      detailLink: "/causes/9",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/05/30/13/46/carnival-8028612_1280.jpg",
      title: "Arts and Culture",
      description: "Support local arts and cultural initiatives.",
      progress: 65,
      targetAmount: 11000,
      donateLink: "/donate/arts",
      detailLink: "/causes/10",
    },
    {
      image: "https://cdn.pixabay.com/photo/2013/04/02/19/53/students-99506_1280.jpg",
      title: "Tech for Good",
      description: "Support technological advancements for social good.",
      progress: 50,
      targetAmount: 13000,
      donateLink: "/donate/tech",
      detailLink: "/causes/11",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/05/22/03/37/lao-new-year-8779591_1280.png",
      title: "Community Development",
      description: "Strengthen local communities and promote social justice.",
      progress: 40,
      targetAmount: 16000,
      donateLink: "/donate/community",
      detailLink: "/causes/12",
    },
  ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideRef: React.MutableRefObject<NodeJS.Timeout | null> = useRef(null);
    const totalSlides = Math.ceil(causes.length / 4); // Number of slides based on 4 cards at a time

    const handleSlide = (direction:any)  =>  {
        const newIndex = (direction === 'left') ? (currentIndex + 1) % totalSlides : (currentIndex - 1 + totalSlides) % totalSlides;
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
        return () => stopAutoSlide(); // Clear on unmount
    }, [currentIndex]);

    const handleSwipe = (direction: 'left' | 'right') => {
        stopAutoSlide();
        handleSlide(direction === 'left' ? 'left' : 'right');
        startAutoSlide(); // Resume auto-sliding after manual swipe
    };

    return (
        <div
            className="cause-list-container relative overflow-hidden"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            {...useSwipeable({
                onSwipedLeft: () => handleSwipe('left'),
                onSwipedRight: () => handleSwipe('right'),
            })}
        >
          <FaRegNewspaper size={30} className='inline-block mr-2' /><h2 className='font-semibold text-2xl inline-block'>Latest News</h2> 
          <Link className='text-sky-400 inline-block' to="/causes">View All News</Link>
            {/* Navigation Buttons */}
            <div className="carousel-buttons absolute top-0 right-0 flex gap-2 p-2">
                <button className="carousel-button prev" onClick={() => handleSlide('right')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="carousel-button next" onClick={() => handleSlide('left')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Carousel Items */}
            <div className="cause-list-wrapper flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {causes.map((cause, index) => (
                    <div key={index} className="cause-card-wrapper flex-shrink-0 w-full md:w-1/3 p-4">
                        <Link to={"/blog"}>
                        <BlogCard  {...cause} />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="carousel-dots flex justify-center mt-4">
                {Array(totalSlides).fill(null).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogList;