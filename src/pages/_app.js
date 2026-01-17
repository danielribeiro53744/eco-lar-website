import React from "react";
import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import LoadingScreen from "../components/App/Loading-Screen/loading-screen";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
//// import languages

import Global_EN from "../data/global_EN.json";
import Global_PT from "../data/global_PT.json";
import AboutUs2H_EN from "../data/about-us2H_EN.json";
import AboutUs2H_PT from "../data/about-us2H_PT.json";
import Services1H_EN from "../data/services1H_EN.json";
import Services1H_PT from "../data/services1H_PT.json";
import Team1H_EN from "../data/team1H_EN.json";
import Team1H_PT from "../data/team1H_PT.json";
import IntroWithHorizontalH_EN from "../data/intro-with-horizontalH_EN.json";
import IntroWithHorizontalH_PT from "../data/intro-with-horizontalH_PT.json";
import ContactH_EN from "../data/contactH_EN.json";
import ContactH_PT from "../data/contactH_PT.json";
import Portfolio_EN from "../data/portfolio_EN.json";
import Portfolio_PT from "../data/portfolio_PT.json";
import Navbar_EN from "../data/navbar_EN.json";
import Navbar_PT from "../data/navbar_PT.json";
import AboutUs4A_EN from "../data/about-us4A_EN.json";
import AboutUs4A_PT from "../data/about-us4A_PT.json";
import Team3A_EN from "../data/team3A_EN.json";
import Team3A_PT from "../data/team3A_PT.json";
import House1_PT from "../data/house1_PT.json";
import House1_EN from "../data/house1_EN.json";
import Hotel1_PT from "../data/hotel1_PT.json";
import Hotel1_EN from "../data/hotel1_EN.json";
import House2_PT from "../data/house2_PT.json";
import House2_EN from "../data/house2_EN.json";
import House3_PT from "../data/house3_PT.json";
import House3_EN from "../data/house3_EN.json";
import House4_PT from "../data/house4_PT.json";
import House4_EN from "../data/house4_EN.json";
import House5_PT from "../data/house5_PT.json";
import House5_EN from "../data/house5_EN.json";
import House6_PT from "../data/house6_PT.json";
import House6_EN from "../data/house6_EN.json";
import House7_PT from "../data/house7_PT.json";
import House7_EN from "../data/house7_EN.json";
import Restaurante1_PT from "../data/restaurante1_PT.json";
import Restaurante1_EN from "../data/restaurante1_EN.json";
import Restaurante2_PT from "../data/restaurante2_PT.json";
import Restaurante2_EN from "../data/restaurante2_EN.json";
import Apartamento1_PT from "../data/apartamento1_PT.json";
import Apartamento1_EN from "../data/apartamento1_EN.json";
import ContactInfo_PT from "../data/contact-Info_PT.json";
import ContactInfo_EN from "../data/contact-Info_EN.json";
import Showroom_PT from "../data/showroom_PT.json";
import Showroom_EN from "../data/showroom_EN.json";
import BeforeAfter3D from "../data/3D.json";
import Atlier_PT from "../data/atlier_PT.json";
import Atlier_EN from "../data/atlier_EN.json";
import abou_rem_PT from "../data/about-remodelacao_PT.json";
import abou_rem_EN from "../data/about-remodelacao_EN.json";
import PortfolioRem_EN from "../data/portfoliorem_EN.json";
import PortfolioRem_PT from "../data/portfoliorem_PT.json";
import Remodelacao1_PT from "../data/remodelacao1_PT.json";
import Remodelacao1_EN from "../data/remodelacao1_EN.json";
import House8_PT from "../data/house8_PT.json";
import House8_EN from "../data/house8_EN.json";
import House9_PT from "../data/house9_PT.json";
import House9_EN from "../data/house9_EN.json";
import House10_PT from "../data/house10_PT.json";
import House10_EN from "../data/house10_EN.json";
// //////////////////////////////

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Global" : Global_EN,
          "Navbar" : Navbar_EN,
          "About-Us2H": AboutUs2H_EN,
          "Services1H": Services1H_EN,
          "Team1H": Team1H_EN,
          "Intro-with-horizontalH" : IntroWithHorizontalH_EN,
          "ContactH": ContactH_EN,
          "Portfolio" : Portfolio_EN,
          "About-Us4A": AboutUs4A_EN,
          "Team3A": Team3A_EN,
          "House_1":House1_EN,
          "House_2":House2_EN,
          "House_3":House3_EN,
          "House_4":House4_EN,
          "House_5":House5_EN,
          "House_6":House6_EN,
          "House_7":House7_EN,
          "Restaurante_1":Restaurante1_EN,
          "Restaurante_2":Restaurante2_EN,
          "Apartamento_1":Apartamento1_EN,
          "Hotel_1":Hotel1_EN,
          "contact-info":ContactInfo_EN,
          "Showroom":Showroom_EN,
          "3D":BeforeAfter3D,
          "Atlier":Atlier_EN,
          "About_rem":abou_rem_EN,
          "Portfolio_rem":PortfolioRem_EN,
          "rem1":Remodelacao1_EN,
          "House_8":House8_EN,
          "House_9":House9_EN,
          "House_10":House10_EN
        }
      },
      pt: {
        translation: {
          "Global" : Global_PT,
          "Navbar" : Navbar_PT,
          "About-Us2H": AboutUs2H_PT,
          "Services1H": Services1H_PT,
          "Team1H": Team1H_PT,
          "Intro-with-horizontalH" : IntroWithHorizontalH_PT,
          "ContactH": ContactH_PT,
          "Portfolio" : Portfolio_PT,
          "About-Us4A": AboutUs4A_PT,
          "Team3A": Team3A_PT,
          "House_1":House1_PT,
          "House_2":House2_PT,
          "House_3":House3_PT,
          "House_4":House4_PT,
          "House_5":House5_PT,
          "House_6":House6_PT,
          "House_7":House7_PT,
          "Restaurante_1":Restaurante1_PT,
          "Restaurante_2":Restaurante2_PT,
          "Apartamento_1":Apartamento1_PT,
          "Hotel_1":Hotel1_PT,
          "contact-info":ContactInfo_PT,
          "Showroom":Showroom_PT,
          "3D":BeforeAfter3D,
          "Atlier":Atlier_PT,
          "About_rem":abou_rem_PT,
          "Portfolio_rem":PortfolioRem_PT,
          "rem1":Remodelacao1_PT,
          "House_8":House8_PT,
          "House_9":House9_PT,
          "House_10":House10_PT
        }
      }
    },

    lng: "pt", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eco-Lar</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>


      <Component {...pageProps} />


      <Script id="wow" src="/assets/js/wow.min.js"></Script>
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>

      <Script
        id="simpleParallax"
        src="/assets/js/simpleParallax.min.js"
      ></Script>
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>

      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
    </>
  );
}

export default MyApp;
