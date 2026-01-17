import React from "react";
import LightLayout from "../../layouts/light";
import AfterBefore from "../../components/Global/After-Before";
import PageHeader from "../../components/Global/Page-header";
import ProjectIntro from "../../components/Global/Project-Intro";
import Galeria from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";
import NextService from "../../components/Global/Next-Service";



const ShowRoom = () => {
  
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  const imagens = t("Showroom.images", { returnObjects: true });
  return (
    <LightLayout footerClass={"mt-30"}>
      <PageHeader
        title={t("Services1H.services.0.title")}

        image="https://storage.googleapis.com/eco-lar-bucket/ShowRoom/IMG_192.jpg"
      />

       <ProjectIntro
      title={t("Showroom.IntroProj.intro")}
      content={t("Showroom.IntroProj.text")}

      />
      <Galeria imagens={imagens}/>
      
      <NextService
      url={t("Services1H.services.1.url")}
      title={t("Services1H.services.1.title")}
      image={t("Services1H.services.1.image")} 
      />
    </LightLayout>
  );
};

export default ShowRoom;