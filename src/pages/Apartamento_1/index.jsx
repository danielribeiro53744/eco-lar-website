/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header";
import ProjectIntro from "../../components/Global/Project-Intro";
import NextProject from "../../components/Global/Next-Project";
import ProjectVideo from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";



const Apartamento_1 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const imagens = t("Apartamento_1.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("Apartamento_1.Title")}
        fullPath={[
          { id: 1, name: "", url: "/" },
        ]}
        image={t("Apartamento_1.imageCapa")}
      />

      <ProjectIntro
      title={t("Apartamento_1.IntroProj.intro")}
      content={t("Apartamento_1.IntroProj.text")}
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

export default Apartamento_1;
