import React, { useState, useEffect, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../App.css";
import ResultInfo from "./components/ResultInfo";

export const Results = ({ results, stay, activeResult, userData }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const accordElem = useRef(null);
  console.log(results);
  useEffect(() => {
    if (activeResult === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(activeResult);
    }
  }, [activeResult]);
  return (
    <div style={{ padding: "10px 0", height: "100%", overflow: "hidden" }}>
      <p style={{ textAlign: "left" }}>Best destinations for you:</p>
      <div style={{ overflow: "auto", height: "90%" }}>
        <Accordion activeKey={activeIndex} ref={accordElem}>
          {results?.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header
                onClick={() => {
                  if (index === activeIndex) {
                    setActiveIndex(-1);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                {index + 1}. {item.region}
              </Accordion.Header>
              <Accordion.Body>
                <ResultInfo
                  country={item}
                  label={index + 1}
                  stay={stay}
                  userData={userData}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
