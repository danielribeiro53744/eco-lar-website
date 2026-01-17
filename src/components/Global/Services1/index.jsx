import React from "react";
//import services3Data from "../../data/services3.json";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const Services3 = ({ bigTitle, grid }) => {

  const { t } = useTranslation();
  
  return (
    <section
      className={`${!grid ? "services" : "services-grid"} section-padding ${
        !grid ? "bg-gray" : "pt-0"
      } `}
    >
      <div className="container">
        {!bigTitle ? (
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s" style={{fontSize:"200%"}}>
                  {t("Services1H.service")}
                </h6>
                {/* <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  {t("Services1H.features")}
                </h4> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center">
            <h3>Best Features.</h3>
            <div className="tex-bg">Services</div>
          </div>
        )}

        <div className="row">
          {t("Services1H.services", { returnObjects: true }).map((item, index) => (
            <div className="col-lg-3" style={{ padding: '1%'}} key={item.id}> 
            <Link href={item.url}>
              <div
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className={item.icon}></span>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.content}</p>
                
                <Link href={item.url}>
                  <a className={`more ${!grid ? "custom-font" : ""} mt-30`}>
                  {t("Services1H.more")}
                  </a>
                </Link>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;