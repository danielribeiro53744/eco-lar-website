import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath, image , visit , link }) => {
  const router = useRouter();
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!image ? "/assets/img/pg1.jpg" : image})`,
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>{title}</h1>
            </div>
            <div className="text-center">
              <a href={link} target="_blank"><h6>{visit}</h6></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
