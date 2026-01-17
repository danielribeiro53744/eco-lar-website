/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";

const Team3 = () => {
  const { t } = useTranslation();
  return (
    <section className="team_a section-padding">
      <div className="container">
        <div className="section-head">
          <h3 style={{marginBottom:"30px"}}>{t("Team3A.title")}</h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="item cir md-mb50">
              <div className="img" id="founder">
                <img src={t("Team3A.team.0.image")} alt="" style={{borderRadius:"10px"}}/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#c5a47e">
                        <textPath xlinkHref="#circlePath">
                        {t("Team3A.team.0.usertitle")}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6 style={{color: "white"}}>{t("Team3A.team.0.username")}</h6>
                  <span>{t("Team3A.team.0.usertitle")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="item cir md-mb50">
              <div className="img"  id="founder">
                <img src={t("Team3A.team.1.image")} alt="" style={{borderRadius:"10px"}}/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#c5a47e">
                        <textPath xlinkHref="#circlePath">
                        {t("Team3A.team.1.usertitle")}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                <h6 style={{color: "white"}}>{t("Team3A.team.1.username")}</h6>
                  <span>{t("Team3A.team.1.usertitle")}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-6">
            <div className="item cir sm-mb50">
              <div className="img" style={{width:"120%"}} >
                <img src={t("Team3A.team.2.image")} alt="" style={{borderRadius:"10px"}}/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#c5a47e">
                        <textPath xlinkHref="#circlePath">
                        {t("Team3A.team.2.usertitle")}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                <h6 style={{color: "white"}}>{t("Team3A.team.2.username")}</h6>
                  <span>{t("Team3A.team.2.usertitle")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="item cir">
              <div className="img" style={{width:"120%"}} >
                <img src={t("Team3A.team.3.image")} alt="" style={{borderRadius:"10px"}}/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#c5a47e">
                        <textPath xlinkHref="#circlePath">
                        {t("Team3A.team.3.usertitle")}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                <h6 style={{color: "white"}}>{t("Team3A.team.3.username")}</h6>
                  <span>{t("Team3A.team.3.usertitle")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="item cir sm-mb50">
              <div className="img" style={{width:"120%"}} >
                <img src={t("Team3A.team.2.image")} alt="" style={{borderRadius:"10px"}}/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#c5a47e">
                        <textPath xlinkHref="#circlePath">
                        {t("Team3A.team.2.usertitle")}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                <h6 style={{color: "white"}}>{t("Team3A.team.2.username")}</h6>
                  <span>{t("Team3A.team.2.usertitle")}</span>
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default Team3;
