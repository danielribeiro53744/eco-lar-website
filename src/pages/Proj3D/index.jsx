import React from "react";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Global/Page-header";
import AfterBefore from "../../components/Global/After-Before";
import ProjectVideo from "../../components/Global/Project-4Column";


import { useTranslation } from "react-i18next";
import NextService from "../../components/Global/Next-Service";


const Proj3D = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  const imagens = t("3D.images", { returnObjects: true });
  return (
    <LightLayout footerClass={"mt-30"}>
      <PageHeader
        title={t("Services1H.services.1.title")}
        image="https://storage.googleapis.com/eco-lar-bucket/golf%2019_17%20-%20Foto.jpg"
      />
      <AfterBefore/>
      <br></br>
      <ProjectVideo imagens={imagens}/>
      <NextService
      url={t("Services1H.services.2.url")}
      title={t("Services1H.services.2.title")}
      image={t("Services1H.services.2.image")} 
      />
    </LightLayout>
  );
};

export default Proj3D;