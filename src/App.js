import "./styles/Home.css";
import { NFTSales } from "./pages/NFTSales";
import { Route, Routes } from "react-router-dom";
import FAQs from "./pages/FAQs";
import Feature from "./pages/Feature";
import Roadmap from "./pages/Roadmap";
import Creation from "./pages/Creation";
import { useEffect } from "react";
import { rltSidebarStatus } from "./features/loginSlice";

export default function Home() {
  return (
    <div style={rltSidebarStatus && { fontFamily: "SF-Arabic" }}>
      <Routes>
        <Route path="/" element={<NFTSales />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/creation" element={<Creation />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}
