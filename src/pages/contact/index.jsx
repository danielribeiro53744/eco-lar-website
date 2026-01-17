import React from "react";
import PageHeader from "../../components/Global/Page-header";
import ContactWithMap from "../../components/Contact";
import MainLayout from "../../layouts/light";
import ContactInfo from "../../components/Contact-info";
import { useTranslation } from "react-i18next";



const Contact = () => {
  const { t } = useTranslation();
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <MainLayout>
      <PageHeader
        title={t("Navbar.contact")}
        image="https://storage.googleapis.com/eco-lar-bucket/fachada/fachada4.jpeg"
      />
       <ContactInfo/>
      <section className="contact">
        <ContactWithMap />
      </section>
    </MainLayout>
  );
};

export default Contact;
