/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio";
import PageHeader from "../../components/Global/Page-header";


const Portfolio = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <PageHeader
        title="Portfolio"

        image="https://storage.googleapis.com/eco-lar-bucket/Staff/equipas/IMG-ABOUT.png"
      />
      <Portfolio1 />
    </LightLayout>
  );
};

export default Portfolio;
