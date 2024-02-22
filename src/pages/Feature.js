import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navtop } from "../components/Navtop";
import NFTcards from "../assets/NFT CARDS.png";
import { SidebarNav } from "../components/SidebarNav";
import { featuresData } from "../translated-content/features";
import { isMobile, isTablet } from "react-device-detect";
import MobileNav from "../components/MobileNav";
import { useSelector } from "react-redux";
import { MobileFooter } from "../components/MobileFooter";

const Feature = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

  return (
    <main
      className={!rltStatus ? "d-flex w-100" : "d-flex flex-row-reverse w-100"}
    >
      <SidebarNav />
      <div className={"main"}>
        {isMobile ? <MobileNav /> : <Navtop />}
        <div className={isMobile ? "text-center" : ""}>
          <Container>
            <Row
              className={rltStatus ? "mb-5 flex-row-reverse" : "mb-5"}
              md={2}
              xs={1}
            >
              <Col>
                <div className={rltStatus ? "text-end" : ""}>
                  <h1 className="fm-Russo f-64 mb-50">
                    {featuresData[currentLanguage].heading}
                  </h1>
                  <p className={!isMobile ? "f-20 fm-Manjari mb-75" : ""}>
                    {featuresData[currentLanguage].description}
                  </p>
                </div>

                <img
                  src={NFTcards}
                  alt="NFTcards"
                  className={isMobile ? "my-3" : ""}
                  style={{ width: "90%" }}
                />
              </Col>
              <Col className="my-auto mt-5">
                <div>
                  {featuresData[currentLanguage].tiles.map((feature, index) => (
                    <Row
                      className={`mb-60 animate__animated animate__fadeInUp ${
                        rltStatus ? "flex-row-reverse" : ""
                      } animate__delay-${index}s`}
                      key={index}
                      xs={1}
                      lg={2}
                    >
                      <Col lg={2}>
                        <span className="fm-Keania f-35 tile p-2 mb-30">
                          {feature.count}
                        </span>
                      </Col>
                      <Col>
                        <div
                          className={`${isMobile ? "my-3" : ""} ${
                            rltStatus ? "text-end" : ""
                          }`}
                        >
                          <h3 className="f-20 fm-Russo">{feature.title}</h3>
                          <p className="fm-Manjari f-12">
                            {feature.description}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {isMobile || isTablet ? <MobileFooter /> : null}
      </div>
    </main>
  );
};

export default Feature;
