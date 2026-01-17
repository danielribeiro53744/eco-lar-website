import React from "react";
import Split from "../Split";
import { useTranslation } from "react-i18next";

const AboutUs5 = () => {
  const { t } = useTranslation();
  return (
    <section className="about2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-tit">
              <Split>
                <h2 className="wow words chars splitting" data-splitting>
                {t("About_rem.title_first")} <br />  {t("About_rem.title_second")}
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                {t("About_rem.content")}
                </p>
              </Split>
              <div className="exp">
                <h3 className="">+300</h3>
                <h5 className=" valign">
                  <Split>
                    <span className="wow words chars splitting" data-splitting>
                    {t("About_rem.proj")} <br />  {t("About_rem.proj2")}
                    </span>
                  </Split>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid office">
        <div className="row">
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: t("About_rem.img1") }}
            ></div>
          </div>
          <div className="col-lg-6 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: t("About_rem.img2") }}
            ></div>
          </div>
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: t("About_rem.img3") }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
