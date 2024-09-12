import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import {  TeamCard } from "../components";
import { Link } from 'react-router-dom';
import { RiTeamLine } from "react-icons/ri";

const TeamList = () => {
  const causes = [
    {
      image: "https://images.pexels.com/photos/14577797/pexels-photo-14577797.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Andrew Gordon",
      description: "Managing Director",
      progress: 70,
      targetAmount: 5000,
      donateLink: "/donate/education",
      detailLink: "/causes/1",
    },
    {
      image: "https://images.pexels.com/photos/14634936/pexels-photo-14634936.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Josh Harris",
      description: "Resource Manager",
      progress: 30,
      targetAmount: 10000,
      donateLink: "/donate/environment",
      detailLink: "/causes/2",
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg",
      title: "David Smith",
      description: "Community Coordinator",
      progress: 85,
      targetAmount: 8000,
      donateLink: "/donate/animals",
      detailLink: "/causes/3",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png",
      title: "Trovere Brown",
      description: "Healthcare Coordinator",
      progress: 55,
      targetAmount: 12000,
      donateLink: "/donate/healthcare",
      detailLink: "/causes/4",
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/11/30/17/21/businessman-5791566_1280.jpg",
      title: "March Johnson",
      description: "Housing Coordinator",
      progress: 40,
      targetAmount: 7000,
      donateLink: "/donate/housing",
      detailLink: "/causes/5",
    },
    {
      image: "https://cdn.pixabay.com/photo/2022/07/11/16/31/woman-7315525_1280.jpg",
      title: "Angela Xander",
      description: "Women Empowerment Coordinator",
      progress: 60,
      targetAmount: 15000,
      donateLink: "/donate/disaster",
      detailLink: "/causes/6",
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/09/10/20/11/model-5561420_1280.jpg",
      title: "Gordon Smith",
      description: "Trauma Coordinator",
      progress: 75,
      targetAmount: 9000,
      donateLink: "/donate/elderly",
      detailLink: "/causes/7",
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_1280.jpg",
      title: "Terry Brown",
      description: "Social Services Coordinator",
      progress: 45,
      targetAmount: 20000,
      donateLink: "/donate/hunger",
      detailLink: "/causes/8",
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg",
      title: "Antonio Vega",
      description: "Project Director",
      progress: 35,
      targetAmount: 18000,
      donateLink: "/donate/ocean",
      detailLink: "/causes/9",
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
      title: "Sok Khim",
      description: "Arts and Culture Coordinator",
      progress: 65,
      targetAmount: 11000,
      donateLink: "/donate/arts",
      detailLink: "/causes/10",
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg",
      title: "Jena Walter",
      description: "Technology Coordinator",
      progress: 50,
      targetAmount: 13000,
      donateLink: "/donate/tech",
      detailLink: "/causes/11",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/07/25/03/15/ai-generated-8920116_1280.jpg",
      title: "Kane Volker",
      description: "Workforce Development Coordinator",
      progress: 40,
      targetAmount: 16000,
      donateLink: "/donate/community",
      detailLink: "/causes/12",
    },
  ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null);;
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

    const handleSwipe = (direction : 'left' | 'right') => {
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
          <RiTeamLine size={40} className='inline-block mr-2' /><h2 className='font-semibold text-2xl inline-block'>Our Team</h2>
           <Link className='text-sky-400 inline-block' to="/causes">View All Team</Link>
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
                        <TeamCard {...cause} />
                    </div>
                ))}
            </div>

            {/* Dots */}
            {/* <div className="carousel-dots flex justify-center mt-4">
                {Array(totalSlides).fill(null).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default TeamList;