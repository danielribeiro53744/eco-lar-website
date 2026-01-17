/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header";
import ProjectIntro from "../../components/Global/Project-Intro";
import NextProject from "../../components/Global/Next-Project";
import ProjectVideo from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";

const House_7 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const imagens = t("House_10.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("House_10.Title")}
        fullPath={[
          { id: 1, name: "", url: "/" },
        ]}
        image={t("House_10.imageCapa")}
      />
      <ProjectIntro 
        title={t("House_10.IntroProj.intro")}
        content={t("House_10.IntroProj.text")}
      />
  
      <ProjectVideo imagens={imagens}/>
      
      <NextProject 
      url="/Restaurante_1" 
      title={t("Restaurante_1.Title")}
      image={t("Restaurante_1.imageCapa")}
      />
    </MainLayout>
  );
};

export default House_7;
