/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Head from "next/head";
import appData from "../data/app.json";
import LoadingScreen from "../components/App/Loading-Screen/loading-screen";
import Cursor from "../components/App/Cursor";
import ScrollToTop from "../components/App/scrollToTop";


const LightLayout = ({ children, footerClass }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer classText={footerClass} />
    </>
  );
};

export default LightLayout;
