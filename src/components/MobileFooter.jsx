import React from "react";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const MobileFooter = () => {
  const socialItems = [
    {
      title: "Twitter",
      path: "https://twitter.com/SpacePunksClub",
      logo: <BsTwitterX />,
    },
    {
      title: "Telegram",
      path: "https://t.me/SpacePunksClub",
      logo: <FaTelegramPlane />,
    },
    {
      title: "LinkedIn",
      path: "https://www.linkedin.com/company/spacepunksclub/",
      logo: <FaLinkedinIn />,
    },
    {
      title: "Github",
      path: "",
      logo: <FaGithub />,
    },
    {
      title: "Facebook",
      path: "https://www.facebook.com/SpacePunksClub",
      logo: <FaFacebookF />,
    },
    {
      title: "Instagram",
      path: "https://www.instagram.com/spacepunksclub/",
      logo: <FaInstagram />,
    },
  ];
  return (
    <div className="mt-5">
      <div className="social-icons d-flex justify-content-center gap-2">
        {socialItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noreferrer"
            className="social-icon text-decoration-none text-white bg-danger px-2 pb-1"
          >
            {item.logo}
          </a>
        ))}
      </div>

      <p className="mb-0 f-14 text-center mt-35 mb-35">
        @ 2024. All rights reserved by Matar
      </p>
    </div>
  );
};
