/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import { useTranslation} from "react-i18next";
import { useRouter } from 'next/router'



const Proj2H = () =>{
  const { t } = useTranslation();
  const router = useRouter()
  const handleRedirect = (url) => {
    router.push(url)
  }
  var width;
  var breakpoint;
  if (typeof window !== "undefined") {
      // The current width of the viewport
    width = window.innerWidth;
    // The width below which the mobile view should be rendered
    breakpoint = 991;
    
  }
  let slider = 0
  const renderArrows = () => {
    return width > breakpoint ?(
      <div className="navs mt-30 wow fadeInUp" data-wow-delay=".3s" style={{textAlign:"center"}}>
        <span className="prev" onClick={() => slider.slickPrev()}>
          <i className="fas fa-long-arrow-alt-left"></i>
        </span>
        <span className="next" onClick={() => slider.slickNext()}>
          <i className="fas fa-long-arrow-alt-right"></i>
        </span>
      </div>
    ) : null;
  };
  const renderPreview = () => {
    return width > breakpoint ? (
    <div className="col-4" style={{ marginLeft: '3%' }}>
    <div className="tit" key={t("Portfolio.portfolio."+state.activeSlide+".id")}>
    <Link href={t("Portfolio.portfolio."+state.activeSlide+".url")}>
          
          <h3 className="playfont wow fadeInUp" data-wow-delay=".5s">
            <div class="container1 noselect" >
            <div class="canvas">
              <div class="tracker tr-1"></div>
              <div class="tracker tr-2"></div>
              <div class="tracker tr-3"></div>
              <div class="tracker tr-4"></div>
              <div class="tracker tr-5"></div>
              <div class="tracker tr-6"></div>
              <div class="tracker tr-7"></div>
              <div class="tracker tr-8"></div>
              <div class="tracker tr-9"></div>
              <div class="tracker tr-10"></div>
              <div class="tracker tr-11"></div>
              <div class="tracker tr-12"></div>
              <div class="tracker tr-13"></div>
              <div class="tracker tr-14"></div>
              <div class="tracker tr-15"></div>
              <div class="tracker tr-16"></div>
              <div class="tracker tr-17"></div>
              <div class="tracker tr-18"></div>
              <div class="tracker tr-19"></div>
              <div class="tracker tr-20"></div>
              <div class="tracker tr-21"></div>
              <div class="tracker tr-22"></div>
              <div class="tracker tr-23"></div>
              <div class="tracker tr-24"></div>
              <div class="tracker tr-25"></div>
              <div id="card" style={
                {background:'url('+t("Portfolio.portfolio."+state.activeSlide+".image")+')',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
              </div>
            </div>
          </div>
          </h3> 
        
        </Link>
         
      </div>
      </div>

    ) : null;
  }
 
  const [state, setState] = useState({
    activeSlide: 0,
    activeSlide2: 0
  });
  
 
    return (
      <section className="team head-pb">
        <div className="container section-head text-center">
        <h6 className="custom-font wow fadeInDown"
        style={{fontSize: '200%',marginTop: '40px',marginBottom: '60px'}}
        >
            {t("Portfolio.projects")}
                  
          </h6>
          <div className="row">
            <div className="col-lg-8 fadeInDown" id="proj2Hslide"  >
            
             <Slider
               
               {...{
                 ref: (c) => (slider = c),
                 slidesToShow: 3,
                 slidesToScroll: 1,
                 speed: 2000,
                 lazyLoad: true,
                 arrows: true,
                 dots: false,
                 autoplay: true,
                 focusOnSelect: true,
                 centerMode: true,
                 beforeChange: (current, next) => setState({ activeSlide: next}),
                 // afterChange: current => setState({ activeSlide2: current }),
                //  rtl: true,
                 responsive: [
                   {
                     breakpoint: 991,
                     settings: {
                       slidesToShow: 3,
                       beforeChange: (current, next) => setState({ activeSlide: next }),
                      //  beforeChange: (current, next) => changeWidth(current, next),
                       dots: true,
                       centerMode: true,
                       focusOnSelect: true,
                     },
                   },
                   {
                     breakpoint: 767,
                     settings: {
                       slidesToShow: 1,
                       beforeChange: (current, next) => setState({ activeSlide: next }),
                       dots: true,
                       centerMode: true,
                       fade: false,
                       focusOnSelect: true,
                     },
                   },
                   {
                     breakpoint: 480,
                     settings: {
                      beforeChange: (current, next) => setState({ activeSlide: next }),
                       slidesToShow: 1,
                       dots: true,
                       centerMode: true,
                       fade: false,
                       focusOnSelect: true,
                     },
                   },
                 ],
               }}
             >
               {t("Portfolio.portfolio", { returnObjects: true }).map((item) => (
                 <div
                   className="item wow fadeInUp fadeOut"
                   data-wow-delay=".5s"
                   key={item.id}
                   id={"proj"+item.id}
                 >
                   <div className="img wow imago" 
                   onClick={t("Portfolio.portfolio."+state.activeSlide+".id") === item.id ? () => handleRedirect(t("Portfolio.portfolio."+state.activeSlide+".url")) : null}
                   style={t("Portfolio.portfolio."+state.activeSlide+".id") === item.id ? {transform: 'scale(1.4)',zIndex: 1,marginTop: '30%',borderRadius:'10px'} : {transform: 'scale(0.8)',marginTop: '40%',borderRadius:'10px' }}>
                     <img src={item.image} alt="" />

                   </div>
                   <div className="info" style={t("Portfolio.portfolio."+state.activeSlide+".id") === item.id ? {marginTop: '30%'} : {marginTop: '30%'} }>
                     <h5>{item.title}</h5>
                   </div>
                   
                 </div>
               ))}
             </Slider>
             <div className="tit" >
                {renderArrows()}
             </div>
            </div>

                {renderPreview()}
        </div>
        </div>
        <div
          className="dots-half bg-img bg-repeat"
          style={{ backgroundImage: "url(/assets/img/dots.png" }}
        ></div>
      </section>
    );
  }


export default Proj2H;
