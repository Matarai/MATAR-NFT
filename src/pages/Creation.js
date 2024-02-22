import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navtop } from "../components/Navtop";
import { SidebarNav } from "../components/SidebarNav";
import blueCard from "../assets/GalleryNFTAsset/CARD Bleu.png";
import greenCard from "../assets/GalleryNFTAsset/CARD GR.png";
import green2Card from "../assets/GalleryNFTAsset/CARD Green.png";
import mCard from "../assets/GalleryNFTAsset/CARD M.png";
import marronCard from "../assets/GalleryNFTAsset/CARD MARRON.png";
import orangeCard from "../assets/GalleryNFTAsset/CARD ORANGE.png";
import pinkCard from "../assets/GalleryNFTAsset/CARD Pink.png";
import pink2Card from "../assets/GalleryNFTAsset/CARD Pink2.png";
import redCard from "../assets/GalleryNFTAsset/CARD Red.png";
import yellow2Card from "../assets/GalleryNFTAsset/CARD YELLOW.png";
import blue2Card from "../assets/GalleryNFTAsset/CARD Bleu.png";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import MobileNav from "../components/MobileNav";
import { useSelector } from "react-redux";
import { creationData } from "../translated-content/creationData";
import { MobileFooter } from "../components/MobileFooter";
import bg from "../assets/creations-bg.png";

const Creation = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const card = [
    blueCard,
    greenCard,
    green2Card,
    mCard,
    marronCard,
    orangeCard,
    pinkCard,
    pink2Card,
    redCard,
    yellow2Card,
    blue2Card,
  ];
  return (
    <main
      className={!rltStatus ? "d-flex w-100" : "d-flex flex-row-reverse w-100"}
    >
      <SidebarNav />
      <div className="main">
        {isMobile ? <MobileNav /> : <Navtop />}
        <div className={isMobile ? "text-center" : ""}>
          <Container
            style={
              isDesktop ? { backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"} : null
            }
          >
            <Row>
              <Col>
                <div className={rltStatus ? "text-end" : ""}>
                  <h1 className="fm-Russo f-64 mb-30">
                    {creationData[currentLanguage].heading}
                  </h1>
                  <p
                    className={
                      rltStatus
                        ? "f-20 fm-Manjari mb-50 ms-auto"
                        : "f-20 fm-Manjari mb-50 me-auto"
                    }
                    style={{ maxWidth: "650px" }}
                  >
                    {creationData[currentLanguage].description}
                  </p>
                </div>
              </Col>
            </Row>

            {!isMobile && (
              <div>
                <Row className="fm-inter">
                  {card.slice(0, 6).map((item, index) => (
                    <img
                      src={item}
                      alt="NFTcards"
                      className="col-2 my-4"
                      key={index}
                    />
                  ))}
                </Row>

                <Row className="justify-content-center">
                  {card.slice(6).map((item, index) => (
                    <img
                      src={item}
                      alt="NFTcards"
                      className="col-2 my-4"
                      key={index}
                    />
                  ))}
                </Row>
              </div>
            )}

            {isMobile && (
              <div className="d-flex flex-row justify-content-center gap-3">
                <div>
                  {card.slice(0, 3).map((item, index) => (
                    <div className="d-flex justify-content-center" key={index}>
                      <img
                        src={item}
                        alt="NFTcards"
                        className="w-100 my-4"
                        key={index}
                      />
                    </div>
                  ))}
                </div>
                <div className="pt-85">
                  {card.slice(3, 6).map((item, index) => (
                    <div className="d-flex justify-content-center" key={index}>
                      <img
                        src={item}
                        alt="NFTcards"
                        className="w-100 my-4"
                        key={index}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  {card.slice(-3).map((item, index) => (
                    <div className="d-flex justify-content-center" key={index}>
                      <img
                        src={item}
                        alt="NFTcards"
                        className="w-100 my-4"
                        key={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </div>
        {isMobile || isTablet ? <MobileFooter /> : null}
      </div>
    </main>
  );
};

export default Creation;
