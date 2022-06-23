import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../App.css";

const Budget = () => {
  return (
    <div>
      <Form>
        <p style={{ textAlign: "left" }}>Budget</p>
        <Row>
          <Col>
            <Form.Check
              type="radio"
              label="Up to 100€"
              name="group2"
              id="radio1"
            />
            <Form.Check
              type="radio"
              label="100€-300€"
              name="group2"
              id="radio2"
            />
            <Form.Check
              type="radio"
              label="300€-500€"
              name="group2"
              id="radio3"
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="500€-1000€"
              name="group2"
              id="radio4"
            />

            <Form.Check
              type="radio"
              label="1000€-2000€"
              name="group2"
              id="radio5"
            />
            <Form.Check
              type="radio"
              label="2000€ & above"
              name="group2"
              id="radio6"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Budget;
