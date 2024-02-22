// sidebar icons
import nftLogo from "../assets/sidebarIcon/nft.svg";
import roadmapLogo from "../assets/sidebarIcon/Roadmap.svg";
import featureLogo from "../assets/sidebarIcon/Feature.svg";
import faqLogo from "../assets/sidebarIcon/Question.svg";

// sidebar icons active
import nftFilledLogo from "../assets/sidebarIcon/nftFilled.svg";
import roadmapFilledLogo from "../assets/sidebarIcon/RoadmapFilled.svg";
import featureFilledLogo from "../assets/sidebarIcon/FeatureFilled.svg";
import faqFilledLogo from "../assets/sidebarIcon/QuestionFilled.svg";

const routesEn = [
  {
    label: "NFT Sales",
    route: "/",
    icon: nftLogo,
    filledIcon: nftFilledLogo,
  },
  {
    label: "Our Feature",
    route: "/features",
    icon: featureLogo,
    filledIcon: featureFilledLogo,
  },
  {
    label: "Roadmap",
    route: "/roadmap",
    icon: roadmapLogo,
    filledIcon: roadmapFilledLogo,

  },
  {
    label: "Our Creations",
    route: "/creation",
    icon: featureLogo,
    filledIcon: featureFilledLogo,
  },
  {
    label: "FaQs",
    route: "/faqs",
    icon: faqLogo,
    filledIcon: faqFilledLogo,
  },
];

const routesAr = [
  {
    label: "بيـــع NFT ",
    route: "/",
    icon: nftLogo,
    filledIcon: nftFilledLogo,
  },
  {
    label: "المميزات",
    route: "/features",
    icon: featureLogo,
    filledIcon: featureFilledLogo,
  },
  {
    label: "خريــطة الـطريق",
    route: "/roadmap",
    icon: roadmapLogo,
    filledIcon: roadmapFilledLogo,
  },
  {
    label: "إبداعــاتنا",
    route: "/creation",
    icon: featureLogo,
    filledIcon: featureFilledLogo,
  },
  {
    label: "الأسئلة الشائعة",
    route: "/faqs",
    icon: faqLogo,
    filledIcon: faqFilledLogo,
  },
];

export const nav = {
  english: {
    language: "English",
    routes: routesEn,
    copyright: "@ 2024. All rights reserved  by Matar",
  },
  arabic: {
    language: "العربيـــة",
    routes: routesAr,
    copyright: "@ 2024. جميع الحقوق محفوظة لمطر",
  },
};
