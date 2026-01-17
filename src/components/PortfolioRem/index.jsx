import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { useTranslation } from "react-i18next";

const Portfolio1H = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="portfolio section-padding">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head text-center" style={{marginBottom:'10px'}}>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <h4 className="playfont wow fadeInDown" data-wow-delay=".3s" 
                  style={{color:'#b19777'}}
                  // style={{fontSize:'150%',fontWeight:'600 !important'}}
                  >
                    {t("Portfolio_rem.our")}
                  </h4>
                  {/* <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                    {t("Portfolio.our")}
                  </h4> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="filtering text-center col-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
            </div>

            <div className="gallery twsty full-width">
              {t('Portfolio_rem.portfolio', { returnObjects: true }).map((item) => (
                <div
                  key={item.id}
                  className={`items ${item.filterClass} mt-50 wow fadeInUp`}
                  data-wow-delay=".3s"
                >
                  <div
                    className="item-img bg-img wow imago"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <Link href={item.url}>
                      <a>
                        <div className="item-img-overlay valign"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="info mt-10">
                    <h5>{item.title}</h5>
                    <span>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio1H;

