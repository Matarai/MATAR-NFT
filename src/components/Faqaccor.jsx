import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useSelector } from "react-redux";
function Faqaccor({ _key, title, content }) {
  const { rltStatus } = useSelector((state) => state.login);
  
  return (
    <Accordion.Item
      eventKey={_key}
      className={rltStatus && "custom-accordion-icon"}
    >
      <Accordion.Header className={rltStatus && "custom-accordion-icon"}>
        <p className={rltStatus && "mb-0 leftAlign"}>{title}</p>
      </Accordion.Header>
      <Accordion.Body className="text-light">
        <p className={rltStatus && "mb-0"}>{content}</p>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Faqaccor;
