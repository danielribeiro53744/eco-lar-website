/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import initIsotope from "../../../common/initIsotope";
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-autoplay.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgAutoplay from 'lightgallery/plugins/autoplay';

import ProjImages from '../Project-Images'
import LoadingScreen from "../../App/Loading-Screen/loading-screen";
import appData from "../../../data/app.json";
import { useTranslation } from "react-i18next";

const Projects = (imagens) => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Handles page change with loader
  const handlePageChange = (pageNumber) => {
    if (pageNumber === currentPage) return;
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      console.log("teste")
      setVisibleCount((prev) => prev + 6)
      setLoading(false);
    }, 1000); // simulate loading delay
  };
  React.useEffect(() => {
    handlePageChange(currentPage+1)
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 10000);
  }, []);
  
  return (
    <>
    {/* Loader */}
      {loading ? (
        <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "200px" }}
    >
      <div className="position-relative" style={{ width: "80px", height: "80px" }}>
        {/* Outer spinning ring */}
        <div
          className="rounded-circle position-absolute"
          style={{
            width: "100%",
            height: "100%",
            border: "4px solid #b19777",
            borderTopColor: "transparent",
            animation: "spin 5s linear infinite",
            boxShadow: "0 0 20px #b19777, 0 0 40px #b19777",
          }}
        ></div>

        {/* Inner spinning ring */}
        <div
          className="rounded-circle position-absolute"
          style={{
            width: "60%",
            height: "60%",
            top: "20%",
            left: "20%",
            border: "4px solid #b19777",
            borderBottomColor: "transparent",
            animation: "spinReverse 0.8s linear infinite",
            boxShadow: "0 0 10px #b19777, 0 0 20px #b19777",
          }}
        ></div>

        {/* Center pulsing dot */}
        <div
          className="rounded-circle position-absolute"
          style={{
            width: "20%",
            height: "20%",
            top: "40%",
            left: "40%",
            backgroundColor: "#b19777",
            boxShadow: "0 0 15px #b19777, 0 0 25px #b19777",
            animation: "pulse 5s infinite",
          }}
        ></div>
      </div>
     </div> 
      
       
      ) : (
    <section className="works filter-img four-col section-padding">
        <div className="container">
          <div className="row gallery" >
          <LightGallery
          download={false}
          // onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgFullscreen, lgAutoplay]}
          >
             <ProjImages imagens={imagens.imagens} limit={visibleCount} loading key={visibleCount}/>
             
          </LightGallery>
          
          </div>
          
        </div>
        {visibleCount < imagens.imagens.length && (
          <div className="text-center">
        <a
          onClick={() => handlePageChange(currentPage+1)}
          className="btn-curve btn-color mt-30"
        >
          <span>Load More</span>
          
        </a>
        </div>
      )}
      </section>
      )}
      {/* Keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spinReverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 15px #b19777, 0 0 25px #b19777; }
            50% { transform: scale(1.3); box-shadow: 0 0 30px #b19777, 0 0 50px #b19777; }
          }
        `}
      </style>
    </>
  );
};

export default Projects;