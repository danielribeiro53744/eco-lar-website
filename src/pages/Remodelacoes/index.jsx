import React from "react";
import LightLayout from "../../layouts/light";
import AfterBefore from "../../components/Remodelacao/aboutRem/index";
import PageHeader from "../../components/Global/Page-header";
import NextService from "../../components/Global/Next-Service";
import Portfolio1 from "../../components/PortfolioRem";
import { useTranslation } from "react-i18next";


const Remodelacoes = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <PageHeader
        title={t("Services1H.services.2.title")}

        image="https://storage.googleapis.com/eco-lar-bucket/montagens/loja/IMG_147.jpg"
      />
      <AfterBefore />
      <Portfolio1 />
      <NextService
      url={t("Services1H.services.3.url")}
      title={t("Services1H.services.3.title")}
      image={t("Services1H.services.3.image")} 
      />
    </LightLayout>
  );
};

export default Remodelacoes;