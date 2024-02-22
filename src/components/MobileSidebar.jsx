import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsTwitterX } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import {
  rltSidebarStatus,
  selectedLanguage,
  sidebarStatus,
} from "../features/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { nav } from "../translated-content/nav";

const MobileSidebar = () => {
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector((state) => state.login);

  const socialItems = [
    {
      title: "Twitter",
      path: "https://x.com/matar__ai",
      logo: <BsTwitterX />,
    },
    {
      title: "Telegram",
      path: "https://t.me/matar_ai",
      logo: <FaTelegramPlane />,
    },
    {
      title: "LinkedIn",
      path: "/",
      logo: <FaLinkedinIn />,
    },
    {
      title: "Github",
      path: "/",
      logo: <FaGithub />,
    },
    {
      title: "Facebook",
      path: "/",
      logo: <FaFacebookF />,
    },
    {
      title: "Instagram",
      path: "https://www.instagram.com/matar__ai",
      logo: <FaInstagram />,
    },
  ];

  const handleLanguage = (language) => {
    dispatch(selectedLanguage(language));
    dispatch(sidebarStatus(0));
    language === "arabic"
      ? dispatch(rltSidebarStatus(true))
      : dispatch(rltSidebarStatus(false));
  };

  return (
    <>
      <div
        className={`mobileSidebar w-75 position-absolute z-3 fm-Russo text-start ${
          currentLanguage === "arabic" && "rtl"
        }`}
        style={{minHeight:"100vh", height:"fit-content"}}
      >
        <Link to="/" onClick={() => dispatch(sidebarStatus(0))}>
          <img src={logo} alt="logo" className="mx-auto d-block mt-3" style={{width:"100px"}} />
        </Link>

        <ul className="mt-5 list-unstyled">
          {nav[currentLanguage].routes.map((item, index) => (
            <Link
              to={item.route}
              className={`cursor-pointer mobileSidebarHover py-2 text-white d-flex px-3 ${
                window.location.pathname === item.route && "gradient-bg"
              }`}
              key={index}
              onClick={() => dispatch(sidebarStatus(false))}
            >
              <div>
                {window.location.pathname === item.route ? (
                  <img src={item.filledIcon} alt={item.label} />
                ) : (
                  <img src={item.icon} alt={item.title} />
                )}
              </div>
              <span className="my-auto mx-3">{item.label}</span>
            </Link>
          ))}
        </ul>

        <div className="px-3 fm-Russo my-5" style={{ top: "60%" }}>
          <DropdownButton
            id="dropdown-basic-button"
            title={currentLanguage.toUpperCase()}
            className={`sidebarDropdown ${
              currentLanguage === "arabic" && "ms-auto"
            }`}
          >
            {["english", "arabic"].map((language, index) => (
              <Dropdown.Item
                onClick={() => handleLanguage(language)}
                key={index}
              >
                {language.toUpperCase()}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>

        <div className="w-100 position-absolute bottom-0 end-0">
          <div className="social-icons d-flex justify-content-center gap-2">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                className="social-icon text-decoration-none text-white bg-danger px-2 py-1"
              >
                {item.logo}
              </a>
            ))}
          </div>

          <p className="mb-0 f-14 text-center mt-35 mb-35">
            @ 2024. All rights reserved by Matar
          </p>
        </div>
      </div>
      <div
        className="position-absolute"
        style={{
          top: "0",
          right: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000000",
          opacity: "0.5",
          zIndex: "2",
          backdropFilter: "blur(5px)",
        }}
        onClick={() => dispatch(sidebarStatus(false))}
      ></div>
    </>
  );
};

export default MobileSidebar;
