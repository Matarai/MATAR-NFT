import React from "react";
import { Col, Row } from "react-bootstrap";
import mobileNav from "../assets/mobileNavLogo.svg";
import mobileNav1 from "../assets/mobileNavLogo1.svg";
import mobileNav2 from "../assets/mobileNavLogo2.svg";
import { useDispatch, useSelector } from "react-redux";
import { sidebarStatus } from "../features/loginSlice";
import MobileSidebar from "./MobileSidebar";
import { Link, useNavigate } from "react-router-dom";
import { nav } from "../translated-content/nav";

const MobileNav = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector((state) => state.login.sidebarStatus);
  const { currentLanguage } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleRoute = () => {
    const routes = nav[currentLanguage].routes;
    const currentPath = window.location.pathname;
    const currentPathIndex = routes.findIndex(
      (_route) => _route.route === currentPath
    );
    if (currentPathIndex === routes.length - 1)
      return navigate(routes[0].route);
    const nextPath = routes[currentPathIndex + 1].route;
    console.log(nextPath);
    navigate(nextPath);
  };

  return (
    <div className="mb-60">
      {isSidebarVisible ? <MobileSidebar /> : null}
      <div className="mobileNavbarbg">
        <Row
          className={`px-3 py-3 cursor-pointer ${
            currentLanguage === "arabic" && "flex-row-reverse"
          }`}
        >
          <Col>
            <img
              src={mobileNav1}
              alt=""
              className={
                currentLanguage !== "arabic"
                  ? "me-auto d-block"
                  : "ms-auto d-block"
              }
              onClick={() => dispatch(sidebarStatus(!isSidebarVisible))}
            />
          </Col>
          <Col as={Link} to="/">
            <img src={mobileNav} alt="" />
          </Col>
          <Col
            className={
              currentLanguage !== "arabic"
                ? "ms-auto text-end"
                : "me-auto text-start"
            }
          >
            <img
              src={mobileNav2}
              alt="logo"
              onClick={handleRoute}
              style={{
                transform: currentLanguage === "arabic" ? "rotate(180deg)" : "",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MobileNav;
