import React from "react";
import LightLayout from "../../layouts/light";
import Atliers  from "../../components/Atlier/Atliers";
import PageHeader from "../../components/Global/Page-header";
import NextService from "../../components/Global/Next-Service";
import { useTranslation } from "react-i18next";


const Ateliers = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <PageHeader
        title={t("Services1H.services.3.title")}
        image="https://storage.googleapis.com/eco-lar-bucket/atlier/IMG_099.jpg"
      />
      <Atliers/>
      <NextService
      url={t("Services1H.services.0.url")}
      title={t("Services1H.services.0.title")}
      image={t("Services1H.services.0.image")} 
      />
    </LightLayout>
  );
};

export default Ateliers;