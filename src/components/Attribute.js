import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../App.css";

const Attribute = ({ attrName, userData, setUserData }) => {
  return (
    <Form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Form.Label style={{ display: "inline-block", width: "60%" }}>
          {attrName}
        </Form.Label>
        <Form.Range
          style={{ display: "inline-block" }}
          step={25}
          defaultValue={userData.Attributes[attrName]}
          onChange={(e) => {
            setUserData({
              ...userData,
              Attributes: {
                ...userData.Attributes,
                [attrName]: e.target.valueAsNumber,
              },
            });
          }}
        ></Form.Range>
      </div>
    </Form>
  );
};

export default Attribute;
