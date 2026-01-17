import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs4A = () => {
  const { t } = useTranslation();
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="numbers">
              <div className="row">
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">{t("About-Us4A.num_awards")}</span>
                    </h3>
                    <h6>{t("About-Us4A.awards")}</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">{t("About-Us4A.area_showroom")}</span>
                    </h3>
                    <h6>{t("About-Us4A.showroom")}</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <h3>
                      <span className="nbr custom-font">{t("About-Us4A.num_experience")}</span>
                    </h3>
                    <h6>{t("About-Us4A.experience")}</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <h3>
                      <span className="nbr custom-font">{t("About-Us4A.num_projects")}</span>
                    </h3>
                    <h6>{t("About-Us4A.projects")}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="txt-cont">
              <p className="mb-20">
              {t("About-Us4A.first_text")}
              </p>
              <p>
              {t("About-Us4A.second_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4A;
