/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header-rest";
import ProjectIntro from "../../components/Global/Project-Intro";
import NextProject from "../../components/Global/Next-Project";
import ProjectVideo from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";



const Restaurante_1 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const imagens = t("Restaurante_1.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("Restaurante_1.Title")}

        image={t("Restaurante_1.imageCapa")}

        visit={t("Restaurante_1.Visit")}

        link={t("Restaurante_1.Link")}
      />
      <ProjectIntro 
        title={t("Restaurante_1.IntroProj.intro")}
        content={t("Restaurante_1.IntroProj.text")}
      />
  
      <ProjectVideo imagens={imagens}/>

      <NextProject 
      url="/Restaurante_2" 
      title={t("Restaurante_2.Title")}
      image={t("Restaurante_2.imageCapa")}
      />
    </MainLayout>
  );
};

export default Restaurante_1;
