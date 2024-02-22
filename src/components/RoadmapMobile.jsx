import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { roadmapData } from "../translated-content/roadmapData";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";

export const RoadmapMobile = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);

  return (
    <VerticalTimeline lineColor="#05E5FE" className={rltStatus ? "rtl" : ""}>
      {roadmapData[currentLanguage].roadmapCardData.map((roadmap, index) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(5, 229, 254, 0.1)",
            color: "#fff",
            borderRadius: "5px",
            border: "1px solid #05e5fe",
          }}
          icon={<GoDotFill size={60} color="#05e5fe" />}
          key={index}
        >
          <div className={`d-flex ${rltStatus ? "flex-row-reverse" : ""}`}>
            <div>
              <span className="f-15 text-secondary">{roadmap.date}</span>
              <h3 className="f-25 mt-3 mb-0">{roadmap.heading}</h3>
            </div>
            <ul
              className={rltStatus ? "f-16 text-end" : "f-16 text-start"}
              style={rltStatus ? { direction: "rtl" } : null}
            >
              {roadmap.subHeading.map((subHeading, index) => (
                <li className="my-3" key={index}>
                  {subHeading}
                </li>
              ))}
            </ul>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
