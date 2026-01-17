import React, { useState, useRef } from "react";
import appData from '../../data/app.json'
import { useTranslation,} from "react-i18next";

import emailjs from '@emailjs/browser';


const ContactWithMap = () => {
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="messages" id="message" style={{color:"red"}}></div>

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
                <span id="send">{t("ContactH.send")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
