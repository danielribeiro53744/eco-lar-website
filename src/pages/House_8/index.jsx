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
  const imagens = t("House_8.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("House_8.Title")}
        fullPath={[
          { id: 1, name: "", url: "/" },
        ]}
        image={t("House_8.imageCapa")}
      />
      <ProjectIntro 
        title={t("House_8.IntroProj.intro")}
        content={t("House_8.IntroProj.text")}
      />
  
      <ProjectVideo imagens={imagens}/>
      
      <NextProject 
      url="/House_9" 
      title={t("House_9.Title")}
      image={t("House_9.imageCapa")}
      />
    </MainLayout>
  );
};

export default House_7;
