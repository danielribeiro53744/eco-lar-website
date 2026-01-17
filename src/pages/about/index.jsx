import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header";
import AboutUs4 from "../../components/About/About-Us4A";
import Services3 from "../../components/Global/Services1";
// import Team2 from "../../components/About/Team2A";
import Team2 from "../../components/About/Team3A";

import { useTranslation, initReactI18next } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title={t("Navbar.about")}

        image="https://storage.googleapis.com/eco-lar-bucket/Staff/equipas/ANDAIME.png"
      />
      <AboutUs4 />
      <Team2 />
      <Services3 />
      
    </MainLayout>
  );
};

export default About;
