/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header-rest";
import ProjectIntro from "../../components/Global/Project-Intro";
import NextProject from "../../components/Global/Next-Project";
import ProjectVideo from "../../components/Global/Project-4Column";

import { useTranslation } from "react-i18next";


const Hotel_1 = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const imagens = t("Hotel_1.images", { returnObjects: true });
  return (
    <MainLayout>
      <PageHeader
        title={t("Hotel_1.Title")}

        image={t("Hotel_1.imageCapa")}

        visit={t("Hotel_1.Visit")}

        link={t("Hotel_1.Link")}
      />
      <ProjectIntro
      title={t("Hotel_1.IntroProj.intro")}
      content={t("Hotel_1.IntroProj.text")}

      />
  
      <ProjectVideo imagens={imagens}/>
      
      <NextProject 
      url="/House_1" 
      title={t("House_1.Title")}
      image={t("House_1.imageCapa")}
      />
    </MainLayout>
  );
};

export default Hotel_1;
