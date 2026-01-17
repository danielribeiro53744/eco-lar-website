/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header";
import ProjectIntro from "../../components/Global/Project-Intro";
import NextService from "../../components/Global/Next-Service";
import ProjectVideo from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";


const House_1 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const imagens = t("rem1.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("rem1.Title")}
        fullPath={[
          { id: 1, name: "", url: "/" },
        ]}
        image={t("rem1.imageCapa")}
      />
      <ProjectIntro
      title={t("rem1.IntroProj.intro")}
      content={t("rem1.IntroProj.text")}

      />
  
      <ProjectVideo imagens={imagens}/>
      
      <NextService
      url={t("Services1H.services.2.url")}
      title={t("Services1H.services.2.title")}
      image={t("Services1H.services.2.image")} 
      />
    </MainLayout>
  );
};

export default House_1;
