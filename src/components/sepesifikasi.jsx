import React from "react";
import sisa from "../img/sisa.jpeg";
import tasik from "../img/tasik.png";
import box5 from "../img/box5.png";
const Gallery = () => {
  const isLaptop = window.innerWidth >= 1024;

  return (
    <div className="gallery-container">
      <style>{`
        .gallery-container {
          text-align: center;
        }
        
        .title {
          margin-bottom: 20px;
          color: #d7a423;
        }
        
        .image-grid {
          display: flex;
          flex-wrap: wrap;
        }
        
        .image-grid img {
          width: ${isLaptop ? "300px" : "100%"};
          height: auto;
          margin: 5px;
        
          }; /* Tambah margin kiri hanya untuk layar laptop */
        }
        
        .laptop {
         
          flex-direction: row;
        }
        
        .mobile {
          flex-direction: column;
        }
      `}</style>
      <h1 className="title"> Our Specification</h1>
      <div className={isLaptop ? "image-grid laptop" : "image-grid mobile"}>
        <img src={sisa} alt="Gambar 1" />
        <img src={sisa} alt="Gambar 2" />
        <img src={sisa} alt="Gambar 3" />
        <img src={sisa} alt="Gambar 4" />
      </div>
      <img src={box5} style={{ width: "80%", marginTop: "10px" }} />
      <img src={tasik} alt="Gambar 4" style={{ width: "100%" }} />
    </div>
  );
};

export default Gallery;
