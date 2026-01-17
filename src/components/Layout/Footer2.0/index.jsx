/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = ({ classText }) => {
  const { t } = useTranslation();
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h6>{t("Global.contact_us")}</h6>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>{t("Global.official_address")}</h6>
                    <p>571 A, Loja Eco-lar, Quatro Estradas, Quarteira</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>{t("Global.email_us")}</h6>
                    <p>info@eco-lar.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>{t("Global.call_us")}</h6>
                    <p>+351 289 399 981 </p>
                    <p> +351 911 088 813 </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4" >
            <div className="item md-mb50">
              <div className="title">
                <h6 style={{ color: '#b19777' }}>{t("Global.pages")}</h6>
              </div>
              <ol style={{ textAlign: 'center'}} >
                <li>
                  <div className="sm-post">
                    <Link href="/about">
                      <a>
                        <p>
                        &gt; {t("Navbar.about")}
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <Link href="/portfolio">
                      <a>
                        <p>
                        &gt; Portfolio
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <Link href="/contact">
                      <a>
                        <p>
                        &gt; {t("Navbar.contact")}
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <Link href="/ShowRoom">
                      <a>
                        <p>
                        &gt; {t("Services1H.services.0.title")}
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <Link href="/Proj3D">
                      <a>
                        <p>
                        &gt; {t("Services1H.services.1.title")}
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <Link href="/Remodelacoes">
                      <a>
                        <p>
                        &gt; {t("Services1H.services.2.title")}
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sm-post">
                    <Link href="/Ateliers">
                      <a>
                        <p>
                        &gt; {t("Services1H.services.3.title")}
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo" style={{ textAlign: 'center', marginTop: '10%'}}>
                <img src="https://storage.googleapis.com/eco-lar-bucket/logo/logo-dark.png" alt="" />
              </div>
              <div className="social"  style={{ textAlign: 'center', margin: 'auto',padding: '4%'}}>
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p>

                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
