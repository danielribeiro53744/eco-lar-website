/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header-rest";
import ProjectIntro from "../../components/Global/Project-Intro";
import NextProject from "../../components/Global/Next-Project";
// import ProjectVideo from "../../components/Global/Project-Video";
import ProjectVideo from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";


const Restaurante_2 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const imagens = t("Restaurante_2.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("Restaurante_2.Title")}
        visit={t("Restaurante_2.Visit")}

        link={t("Restaurante_2.Link")}
        image={t("Restaurante_2.imageCapa")}
      />
      <ProjectIntro 
        title={t("Restaurante_2.IntroProj.intro")}
        content={t("Restaurante_2.IntroProj.text")}
      />
  
      <ProjectVideo imagens={imagens}/>

      <NextProject 
      url="/Hotel_1" 
      title={t("Hotel_1.Title")}
      image={t("Hotel_1.imageCapa")} 
      />
    </MainLayout>
  );
};

export default Restaurante_2;
