/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs from "../../components/Home/About-Us2H";
import Services1 from "../../components/Global/Services1";
import IntroWithHorizontal from "../../components/Home/Intro-with-horizontalH";
import LightLayout from "../../layouts/light";
import Team1 from "../../components/Home/Team1H";
import Contact from "../../components/Home/ContactH";
import Proj1H from "../../components/Home/Proj2H";


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <AboutUs />
      
      {/* <Portfolio1 /> */}
      <Proj1H />
      <Team1 />
      <Services1 />
      <Contact />
    </LightLayout>
  );
};

export default Home1;
