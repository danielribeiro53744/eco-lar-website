/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header";
import ProjectIntro from "../../components/Global/Project-Intro";
import NextProject from "../../components/Global/Next-Project";
import ProjectVideo from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";

const House_4 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const imagens = t("House_4.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("House_4.Title")}
        fullPath={[
          { id: 1, name: "", url: "/" },
        ]}
        image={t("House_4.imageCapa")}
      />
      <ProjectIntro 
        title={t("House_4.IntroProj.intro")}
        content={t("House_4.IntroProj.text")}
      />
  
      <ProjectVideo imagens={imagens}/>
      
      <NextProject 
      url="/House_5" 
      title={t("House_5.Title")}
      image={t("House_5.imageCapa")} 
      />
    </MainLayout>
  );
};

export default House_4;
