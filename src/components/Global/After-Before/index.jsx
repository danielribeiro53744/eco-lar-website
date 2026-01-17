/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import beforeAndAfterSlider from "../../../common/beforeAndAfterSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation} from "react-i18next";


const AfterBefore = () => {
  const { t } = useTranslation();
  const [imageBefore, setImageBefore] = useState(t("3D.beforeAfter.0.image1"))
  const [imageAfter, setImageAfter] = useState(t("3D.beforeAfter.0.image2"))
  React.useEffect(() => {
    beforeAndAfterSlider();
    // setImageBefore()
    // setImageAfter()
  });
  let slider = 0
  const [state, setState] = useState({
    activeSlide: 0,
    activeSlide2: 0
  });
  
  
  const handleImages = (imageBefore , imageAfter) => { 
    setImageBefore(imageBefore)
    setImageAfter(imageAfter)
  }
  return (
    <><div>
      <section className="after-before section-padding">
        <div
          className="background bg-img parallaxie"
          style={{ backgroundImage: "url("+imageAfter+")" }}
          data-overlay-dark="7"
        ></div>
        <div className="container ontop">
          <div
            className="section-head text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h6 className="custom-font"></h6>
                <h4 className="playfont main-color mb-50">
                {t("Global.best_works")}
                </h4>
              </div>
            </div>
          </div>
          <div className="row" key={imageAfter}>
            <div className="col-lg-12">
              <div className="dotsbg wow fadeInUp" data-wow-delay=".3s">
                <div id="before-after-slider" className="wow imago">
                  <div className="overlay" />
                  <div
                    className="twentytwenty-before-label"
                    data-content={t("Global.before")}
                  ></div>
                  <div
                    className="twentytwenty-after-label"
                    data-content={t("Global.after")}
                  ></div>
                  <div id="before-image" key={imageBefore}>
                    <img src={imageBefore} alt="before" />
                  </div>
                  <div id="after-image" key={imageAfter}>
                    <img src={imageAfter} alt="After" />
                  </div>
                  <div id="resizer" className="twentytwenty-handle">
                    <span className="twentytwenty-left-arrow"></span>
                    <span className="twentytwenty-right-arrow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div><section>
        <div>
          <Slider

            {...{
              ref: (c) => (slider = c),
              slidesToShow: 5,
              slidesToScroll: 1,
               speed: 2000,
               arrows: true,
               dots: false,
               autoplay: false,
               focusOnSelect: true,
               centerMode: true,
              beforeChange: (current, next) => setState({ activeSlide: next }),
              afterChange: (current, next) => handleImages(t("3D.beforeAfter."+current+".image1"),t("3D.beforeAfter."+current+".image2")),
              // afterChange: current => setImageBefore({ activeSlide2: current }),
              //  rtl: true,
              responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                     speed: 2000,
                     arrows: true,
                     dots: true,
                     autoplay: false,
                     focusOnSelect: true,
                     centerMode: true,
                    beforeChange: (current, next) => setState({ activeSlide: next }),
                    afterChange: (current, next) => handleImages(t("3D.beforeAfter."+current+".image1"),t("3D.beforeAfter."+current+".image2")),
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 3,
                    dots: true,
                    centerMode: true,
                    fade: false,
                    focusOnSelect: true,
                  },
                },
              ],
            }}
          >
            {t("3D.beforeAfter", { returnObjects: true }).map((item) => (
                 <div
                   className="item wow fadeInUp"
                   data-wow-delay=".5s"
                   key={item.id}
                   id={"proj"+item.id}
                 >
                   <div className="img wow imago"
                    onClick={() => handleImages(item.image1 , item.image2)}
                    style={t("3D.beforeAfter."+state.activeSlide+".id") === item.id ? {transform: 'scale(1.4)',zIndex: 1,marginTop: '30%',position:'relative'} : {transform: 'scale(0.8)',marginTop: '40%' }}
                    >
                     <img src={item.image1} alt="" 
                     style={{borderRadius: '10px'}}
                     />

                   </div>
                 
                 </div>
               ))}
          </Slider>
        </div>
      </section></>
    
  );
};

export default AfterBefore;