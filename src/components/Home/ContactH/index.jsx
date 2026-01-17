import React, { useEffect, useState, useRef} from "react";
import appData from "../../../data/app.json";
import { useTranslation, initReactI18next } from "react-i18next";
import emailjs from '@emailjs/browser';

const ContactH = () => {
  const { t } = useTranslation();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("send").innerHTML= t("Global.loading");

    emailjs.sendForm('service_9nraknq', 'template_qjmz4ad', form.current, 's4T7y0_RRvWpqcnzY')
      .then((result) => {
        emailjs.sendForm('service_9nraknq', 'template_xnlsosf', form.current, 's4T7y0_RRvWpqcnzY')
        .then((result) => {
          document.getElementById("send").innerHTML= t("ContactH.status");
          document.getElementById("submit").disabled = true;
          document.getElementById("submit").style.pointerEvents = "none"; 
          document.getElementById("message").innerHTML= " ";
            
        }, (error) => {
            console.log(error.text);
            document.getElementById("message").innerHTML= t("ContactH.error");
        });
        
      }, (error) => {
        console.log(error.text);
        document.getElementById("message").innerHTML= t("ContactH.error");
      });
  };
  return (
    <>
      <section className="contact cont-map">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form id="contact-form" ref={form} onSubmit={sendEmail} >
                <div className="section-head">
                  <h6>{t("ContactH.contact")}</h6>
                  <h4 className="playfont">{t("ContactH.touch")}</h4>
                </div>

                <div className="messages"  id="message" style={{color:"red"}}></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={t("ContactH.name")}
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder="Email"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder={t("ContactH.message")}
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <button id= "submit" type="submit" className="btn-curve btn-color">
                    <span id="send" >{t("ContactH.send")}</span>
                  </button>
                </div>
              </form>
              {/* <a href="mailto:danniribeiro1@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a> */}
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: "url(https://storage.googleapis.com/eco-lar-bucket/fachada/fachada2.jpeg)" }}
        ></div>
      </section>
    </>
  );
};

export default ContactH;

