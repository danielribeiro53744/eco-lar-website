import React from "react";
import Split from "../../Home/Split";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const NextProjectH1 = ({url, title, image}) => {
  const { t } = useTranslation();
  return (
    <section className="call-action nogif next" style={{ backgroundImage: `url(${"/assets/img/Projects/House_1/IMG_033.jpg"}` }}>
      <Link href={url}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content text-center">
              
                <a>
                  <Split>
                    <h6
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      {/* {title} */}
                    </h6>
                  </Split>

                  <Split>
                    <h2
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                       {t("Global.next_project")}
                    </h2>
                  </Split>
                </a>
              
            </div>
          </div>
        </div>
      </div>
      </Link>
      <div
        className="nxt-img bg-img"
        data-background={image}
        style={{ backgroundImage: `url(${image}` }}
      ></div>
    </section>
  );
};

export default NextProjectH1;
