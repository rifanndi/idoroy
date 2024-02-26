import React, { useState, useEffect } from "react";
import ca4 from "../img/ca4.png";
import ca2 from "../img/ca2.png";
import ca3 from "../img/ca3.png";

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
    { id: 1, src: ca4, alt: "Judul 1" },
    { id: 2, src: ca2, alt: "Image 2" },
    { id: 3, src: ca3, alt: "Image 3" },
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
          width: 55%; /* Lebar default */
          height: auto; /* Tetapkan tinggi otomatis agar gambar tidak terdistorsi */
          display: block;
          margin: 0 auto;
        }

        @media only screen and (max-width: 768px) {
          /* Ketika layar berukuran maksimum 768px (ukuran ponsel), ubah lebar gambar menjadi 100% */
          .carousel-item img {
            width: 100%;
          }-width: 1200px) {
          /* Ketika layar berukuran minimum 769px (ukuran laptop atau yang lebih besar), ubah lebar gambar menjadi 80% */
          .carousel-item img {
            width: 50%;
          }
        }

        }

        @media only screen and (min
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
            <div style={{ height: "190px" }}>
              {" "}
              <img src={item.src} alt={item.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCustomCarousel;
