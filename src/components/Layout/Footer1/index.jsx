/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="item" >

              <div className="social" style={{ textAlign: 'center', margin: 'auto',padding: '4%'}}>
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
            
                <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </div>
        </div>
        <div className="row sub-footer" >
    
              <div className="item responsivefooter" >
                <li >
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont" >
                    <h6>Official Address</h6>
                    <p>571 A, Loja Eco-lar, Quatro Estradas, Quarteira</p>
                  </div>
                </li>
              </div>
          
              <div className="item md-mb50" >
                <li >
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont" >
                    <h6>Email Us</h6>
                    <p>info@eco-lar.com</p>
                  </div>
                </li>
                </div>
              <div className="item md-mb50" >
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+351 289 399 981 &bull; +351 911 088 813</p>
                   
                  </div>
                </li>
              </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

