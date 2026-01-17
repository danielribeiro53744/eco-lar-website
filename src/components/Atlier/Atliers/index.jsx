/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";

 const Atliers= () => {
  const { t } = useTranslation();
  return (
   
    <section className="about section-padding"> 
    {t('Atlier.services', { returnObjects: true }).map((item) => (
     <div style = {{ marginTop: "10%"}} >
      <div className="container" >
          <div className="row">
            <div className="col-lg-5 exp">
              <div className="mb-50">
                <h6 className="fw-100 text-u ls10 main-color mb-10">{t("Atlier.serv")}</h6>
                <h3 className="fw-400 text-u ls4">{item.frase}</h3>
              </div>
              <div className="box">
                <h2 className="fz-40 fw-600 ls1 mb-20">
                  {item.title} <br /> {item.title2}
                </h2>
                <p>
                  {item.texto}
                </p>
              </div>
            </div>
            <div className="col-lg-7 img">
              <img src={item.image} alt="" />
            </div>
          </div>
        </div>
      </div>
      ))}
    </section>
  );
};

export default Atliers;