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

const Projects = ({ imagens, limit = 9, loading }) => {
  const [visibleCount, setVisibleCount] = useState(limit);
  const [currentPage, setCurrentPage] = useState(1);
  

  
  const setIsShown = (id) => {
    document.getElementById("imgPort"+id).style.width = "100%";
    document.getElementById("imgPort"+id).style.height = "auto";
    // document.getElementById("imgPort"+id).style.zIndex = "1";
  }
  const setIsNotShown = (id) => {
    document.getElementById("imgPort"+id).style.width = "80%";
    document.getElementById("imgPort"+id).style.height = "10em";
  }
    
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  // handlePageChange()
  return (
    <>
     
              {imagens.map((item, index) => ( 
                
                <a href={item.image} key={item.id} >
                  {index < visibleCount ? (
                    <div className="col-lg-4 col-md-6 items theaters items-gallery">
                    <div className="item" >
                      <div className="img" >
                        <img 
                        id={"imgPort"+item.id} 
                        className="projImg img-gallery"
                        src={item.image} 
                        alt="" 
                        // style={{width:'80%', height:'10em'}} 
                        // onMouseEnter={() => setIsShown(item.id)}
                        // onMouseLeave={() => setIsNotShown(item.id)}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                        /> 
                        
                      </div>
                      <div className="cont">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  ) : (
                     // Invisible image for LightGallery
                    <img
                    id={"imgPort"+item.id} 
                    className="projImg"
                    src={item.image} 
                    alt=""
                    style={{ display: "none" }} // hidden but still in DOM
                    />
                  )}
                   
                  
                </a>
                ))
               
               }

               {/* {visibleCount < imagens.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 6)}
          className="load-more"
        >
          Load More
        </button>
      )} */}
               
    </>
  );
};

export default Projects;