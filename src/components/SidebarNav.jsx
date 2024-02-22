import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { nav } from "../translated-content/nav";
import { BsTwitterX } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { rltSidebarStatus, selectedLanguage } from "../features/loginSlice";

export const SidebarNav = () => {
  const dispatch = useDispatch();
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

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
    language === "arabic"
      ? dispatch(rltSidebarStatus(true))
      : dispatch(rltSidebarStatus(false));
  };

  return (
    // <div className="position-relative">
    <Sidebar rtl={rltStatus} className={`pos fm-Russo`} breakPoint="lg">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="my-5 mx-auto d-block"
          style={{ width: "115px", aspectRatio: "1" }}
        />
      </Link>
      <Menu>
        {nav[currentLanguage].routes.map((item, index) => (
          <MenuItem
            icon={
              window.location.pathname === item.route ? (
                <img src={item.filledIcon} alt={item.label} />
              ) : (
                <img src={item.icon} alt={item.label} />
              )
            }
            key={index}
            active={window.location.pathname === item.route}
            component={<Link to={item.route} />}
            className="my-2"
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      <div className="ps-2 pe-5 fm-Russo my-5" style={{ top: "60%" }}>
        <DropdownButton
          id="dropdown-basic-button"
          title={currentLanguage.toUpperCase()}
          className="sidebarDropdown ms-3"
        >
          {["english", "arabic"].map((language, index) => (
            <Dropdown.Item onClick={() => handleLanguage(language)} key={index}>
              {language.toUpperCase()}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      <div className="position-absolute w-100" style={{ top: "85vh" }}>
        <div className="social-icons d-flex justify-content-center gap-2 mt-5">
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

        <p className="mb-0 f-14 text-center mt-35 mb-35 fm-Manjari">
          &copy; 2024. All rights reserved by Matar
        </p>
      </div>
    </Sidebar>
  );
};
