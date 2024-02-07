import React, { useState, useEffect } from "react";
import "./MyCustomCarousel.css"; // Impor file CSS Anda
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";

const MyCustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const items = [
    { id: 1, src: card1, alt: "Image 1" },
    { id: 2, src: card2, alt: "Image 2" },
    { id: 3, src: card3, alt: "Image 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]); // Eksekusi saat activeIndex berubah

  return (
    <div className="custom-carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCustomCarousel;
