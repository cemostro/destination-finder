import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../App.css";

const Attribute = () => {
  return (
    <div>
      <Form>
        <div
          style={{
            backgroundColor: "#fff",
            color: "#868686",
            height: "44px",
            textAlign: "left",
            padding: "0 5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <Form.Label style={{ display: "inline-block", width: "60%" }}>
              Nature
            </Form.Label>
            <Form.Range
              style={{ display: "inline-block" }}
              step={25}
            ></Form.Range>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Attribute;
