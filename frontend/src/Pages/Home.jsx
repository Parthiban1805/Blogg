import React, { useEffect, useRef, useState } from 'react';
import Recentpost from '../Components/Recentpost';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const images = [
    'https://img.freepik.com/premium-photo/mock-up-empty-space-digital-frame-background-pointing-finger-by-3d-rendering-robot-advertising-data-learning-marketing-information-ai-robotic-presenter-artificial-intelligence-technology_36367-8016.jpg?w=1380',
    'https://img.freepik.com/premium-photo/cyborg-robot-hand-city-background-3d-rendering_110893-67.jpg?w=996',
    'https://img.freepik.com/premium-photo/robotic-hand-finger-pointing-blank-screen_769134-179.jpg?uid=R153508185&ga=GA1.1.749508214.1739944068&semt=ais_hybrid',
  ];

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll to the current image
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Manual scrolling
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-dark hero-section text-center">
        <div className="image-scroll-container" ref={scrollRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className="image-scroll-item"
              style={{ backgroundImage: `url(${image})` }}
            >
              <h1 className="fs-0.5 fw-bold text-light">Welcome to Robotics and Automation Lab</h1>
              <p className="text-light fs-4 mt-3">
                The Future of Robotics & Automation Innovations from Our Lab
              </p>
            </div>
          ))}
        </div>
        {/* Manual Scroll Buttons */}
        <button className="scroll-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="scroll-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div style={{ backgroundColor: '#f84b26', height: '30px', width: '100%' }}></div>


      {/* Recent Posts Section */}
      <div className="container-fluid">
        <Recentpost />
      </div>
    </>
  );
};

export default Home;