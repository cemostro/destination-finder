import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../../../App.css";
import SlideRange from "./SlideRange";

const Attribute = ({ attrName, userData, setUserData }) => {
  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        padding: "5px",
        height: "100%",
      }}
    >
      <Col xs={4}>{attrName}</Col>
      <Col xs={8}>
        <SlideRange
          attrName={attrName}
          userData={userData}
          setUserData={setUserData}
          color="#000"
        />
      </Col>
    </Row>
  );
};

export default Attribute;
