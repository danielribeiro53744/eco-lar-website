/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link'
import { useTranslation } from "react-i18next";


const AboutUs2H = () => {
  const { t } = useTranslation();

  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title" style={{fontSize:"150%"}}>{t('About-Us2H.sub_title')}</h6>
              {/* <h2 className="mb-20 playfont">
                {t('About-Us2H.title_first')} <br /> {t('About-Us2H.title_second')}
              </h2> */}
              <p>{t('About-Us2H.content')}</p>
              <ul>
                {t('About-Us2H.textList', { returnObjects: true }).map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>{t('About-Us2H.read_more')}</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4 mb-20">
                  <div
                    className="pattern bg-img bg-repeat"
                    style={{
                      backgroundImage: `url(/assets/img/line-pattern.png)`,
                    }}
                  ></div>
                </div>
                <div className="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img mb-20 wow imago">
                    <img src={t('About-Us2H.image1')} alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img src={t('About-Us2H.image2')} alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="years-exp">
                    <div className="exp-text">
                      <h2 className="custom-font">{t('About-Us2H.exp')}</h2>
                      <h6>{t('About-Us2H.years_experience')}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2H;
