import React from "react";
import { Navtop } from "../components/Navtop";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Faqaccor from "../components/Faqaccor";
import { SidebarNav } from "../components/SidebarNav";
import faqEN from "../assets/faq en.png";
import faqAr from "../assets/faq ar.png";
import { isMobile, isTablet } from "react-device-detect";
import MobileNav from "../components/MobileNav";
import { useSelector } from "react-redux";
import { faqData } from "../translated-content/faq";
import mobileFaqImage from "../assets/Cards Mobile Faq.png";
import "../styles/faq.css";
import { MobileFooter } from "../components/MobileFooter";
function FAQs() {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

  return (
    <main
      className={!rltStatus ? "d-flex w-100" : "d-flex flex-row-reverse w-100"}
    >
      <SidebarNav />
      <div className="main">
        <div>
          {isMobile ? <MobileNav /> : <Navtop />}
          <Container>
            {/* <div className={isMobile && "text-center"}> */}
            <Row
              className={`${isMobile && "flex-column-reverse"} ${
                rltStatus && "flex-row-reverse"
              }`}
            >
              <Col lg={8}>
                {!isMobile && (
                  <div className={rltStatus && "text-end"}>
                    <h1 className="fm-Russo f-70 mb-3">
                      {faqData[currentLanguage].title}
                    </h1>
                    <p className="f-20 fm-Manjari mb-5">
                      {faqData[currentLanguage].description}
                    </p>
                  </div>
                )}
                <Accordion className={rltStatus && "rtl"}>
                  {faqData[currentLanguage].qna.map((item, index) => (
                    <Faqaccor
                      _key={index + 1}
                      title={item.question}
                      content={item.answer}
                    />
                  ))}
                </Accordion>
              </Col>
              <Col className="text-center">
                {isMobile && (
                  <div className={rltStatus && "text-end"}>
                    <h1 className="fm-Russo f-70 mb-3">
                      {faqData[currentLanguage].title}
                    </h1>
                    <p className="f-20 fm-Manjari mb-5">
                      {faqData[currentLanguage].description}
                    </p>
                  </div>
                )}
                <img
                  src={!isMobile ? (rltStatus === true ? faqAr : faqEN) : mobileFaqImage}
                  alt="faqImage"
                  className="w-100 mb-5 mb-lg-0"
                />
              </Col>
            </Row>
            {/* </div> */}
          </Container>
        </div>
        {isMobile || isTablet ? <MobileFooter /> : null}
      </div>
    </main>
  );
}

export default FAQs;
