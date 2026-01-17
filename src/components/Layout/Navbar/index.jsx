/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import appData from "../../../data/app.json";
import getSiblings from '../../../common/getSiblings';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useRouter } from 'next/router'




const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const router = useRouter()
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const handleRedirect = (url) => {
    router.push(url)
  }

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">{t("Navbar.about")}</a> 
                </Link>
              </li>
              <li className="nav-item" >

              <Link href="/portfolio">
                  <a className="nav-link">Portfolio</a>
                </Link> 

              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">{t("Navbar.contact")}</a>
                </Link>
              </li>

              
              <li className="nav-item dropdown"  onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {t("Navbar.service")}
                </span>
                <div className="dropdown-menu " style={{backgroundColor: "#b197774f", textAlign:"center" }}>
                  
                    <a className="dropdown-item" onClick={() => handleRedirect(t("Services1H.services.0.url"))}>{t("Services1H.services.0.title")}</a>
                  
                    <a className="dropdown-item" onClick={() => handleRedirect(t("Services1H.services.1.url"))}>{t("Services1H.services.1.title")}</a>
                  
                    <a className="dropdown-item" onClick={() => handleRedirect(t("Services1H.services.2.url"))}>{t("Services1H.services.2.title")}</a>
                  
                    <a className="dropdown-item" onClick={() => handleRedirect(t("Services1H.services.3.url"))}>{t("Services1H.services.3.title")}</a>
                  

                </div>
              </li>

              <li className="nav-item dropdown"  onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {t("Navbar.language")}
                </span>
                <div className="dropdown-menu " style={{backgroundColor: "#b197774f", textAlign:"center" }}>
                    <a className="dropdown-item" onClick={() => changeLanguage('pt')}>PT</a>

                    <a className="dropdown-item"  onClick={() => changeLanguage('en')}>EN</a>

                </div>
              </li>

              
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;