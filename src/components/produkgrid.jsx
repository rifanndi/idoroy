import React, { useState, useEffect } from "react";
import ca1 from "../img/ca1.png";
import judul from "../img/judul.png";

const MyCustomCarousell = () => {
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
    { id: 1, src: ca1, alt: "Judul 1" },
    { id: 2, src: judul, alt: "Image 2" },
    { id: 3, src: ca1, alt: "Image 3" },
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
      <style jsx>{`
        .custom-carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          margin-bottom: 0%;
        }

        .carousel-inner {
          display: flex;
          transition: transform 0.5s ease-in-out;
          align-items: center;
        }

        .carousel-item {
          flex: 0 0 100%;
        }

        .carousel-item img {
          width: 380px;
          display: block;
          margin: 0 auto;
        }

        .carousel-control-prev,
        .carousel-control-next {
          position: absolute;
          top: 0%;
          transform: translateY(-50%);
          font-size: 2rem;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 10px;
        }

        .carousel-control-prev {
          left: 10px;
        }

        .carousel-control-next {
          right: 10px;
        }

        /* Active class for the active item */
        .carousel-item.active {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
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

export default MyCustomCarousell;
