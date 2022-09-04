import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../App.css";

export const Results = ({ results }) => {
  return (
    <div
      style={{ padding: "10px 0", height: "100%", overflow: "hidden" }}
      className="clearfix"
    >
      <p style={{ textAlign: "left" }}>Best destinations for you:</p>
      <div style={{ overflow: "auto", height: "90%" }}>
        <Accordion>
          {results?.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                {index + 1}. {item.region}
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
