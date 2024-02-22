import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navtop } from "../components/Navtop";
import roadMapCard from "../assets/roadmap.png";
import { SidebarNav } from "../components/SidebarNav";
import "../styles/roadmap.css";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import MobileNav from "../components/MobileNav";
import { useSelector } from "react-redux";
import { roadmapData } from "../translated-content/roadmapData";
import progress from "../assets/progressbar.png";
import progressAr from "../assets/progressbarAr.png";
import { RoadmapMobile } from "../components/RoadmapMobile";
import { MobileFooter } from "../components/MobileFooter";

const Roadmap = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

  return (
    <main
      className={!rltStatus ? "d-flex w-100" : "d-flex flex-row-reverse w-100"}
    >
      <SidebarNav />
      <div className={`main`}>
        {isMobile ? <MobileNav /> : <Navtop />}
        <div className={isMobile ? "text-center" : ""}>
          <Container className="overflow-hidden mb-5">
            <Row
              className={rltStatus ? "mb-160 flex-row-reverse" : ""}
              xs={1}
              lg={2}
              style={
                isMobile ? { marginBottom: "50px" } : { marginBottom: "160px" }
              }
            >
              <Col>
                <div className={rltStatus ? "text-end" : ""}>
                  <h1 className={"fm-Russo f-64 mb-50"}>
                    {roadmapData[currentLanguage].heading}
                  </h1>
                  <p className="f-20 fm-Manjari mb-75">
                    {roadmapData[currentLanguage].description}
                  </p>
                </div>
              </Col>
              <Col className="my-auto">
                <img src={roadMapCard} alt="roadMapCard" className="w-100" />
              </Col>
            </Row>

            {isDesktop && !isTablet ? (
              <>
                {currentLanguage === "english" && (
                  <img
                    src={progress}
                    alt=""
                    className={`animate__animated animate__fadeInLeft`}
                    style={{ marginTop: "-75px", width: "105%" }}
                  />
                )}

                {currentLanguage === "arabic" && (
                  <img
                    src={progressAr}
                    alt=""
                    className={`animate__animated animate__fadeInRight`}
                    style={{ marginTop: "-75px", width: "95%" }}
                  />
                )}

                <Row lg={4} className="fm-inter timeline-wrapper">
                  {currentLanguage !== "arabic" &&
                    roadmapData[currentLanguage].roadmapCardData.map(
                      (roadmap, index) => (
                        <Col className="timeline" key={index}>
                          <div
                            className={`timeline-box p-4 mx-3 animate__animated animate__fadeInUp animate__delay-${
                              index + 1
                            }s`}
                          >
                            <span className="vertical-connector"></span>
                            <span className="f-15">{roadmap.date}</span>
                            <h3 className="f-25 my-3">{roadmap.heading}</h3>
                            {roadmap.subHeading.map((subHeading, index) => (
                              <ul className="f-16" key={index}>
                                <li className="my-3">{subHeading}</li>
                              </ul>
                            ))}
                          </div>
                        </Col>
                      )
                    )}
                  {currentLanguage === "arabic" &&
                    roadmapData[currentLanguage].roadmapCardData
                      .toReversed()
                      .map((roadmap, index) => (
                        <Col className="timeline" key={index}>
                          <div
                            className={`timeline-box p-4 mx-3 animate__animated animate__fadeInUp animate__delay-${
                              index + 1
                            }s`}
                          >
                            <span className="vertical-connector"></span>
                            <span className="f-15">{roadmap.date}</span>
                            <h3 className="f-25 my-3">{roadmap.heading}</h3>
                            {roadmap.subHeading.map((subHeading, index) => (
                              <ul className="f-16" key={index}>
                                <li className="my-3">{subHeading}</li>
                              </ul>
                            ))}
                          </div>
                        </Col>
                      ))}
                </Row>
              </>
            ) : (
              <RoadmapMobile />
            )}

            {/* <div className="verticalBar"></div>
             */}

            {/* <div className="d-flex">
                            <div className="smallHorizontalBar h-100 bg-danger"></div>
                            <div></div>
                        </div> */}
          </Container>
        </div>
        {isMobile || isTablet ? <MobileFooter /> : null}
      </div>
    </main>
  );
};

export default Roadmap;
