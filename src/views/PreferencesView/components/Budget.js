import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../../../App.css";

const Budget = ({ userData, setUserData }) => {
  return (
    <Form>
      <p style={{ textAlign: "left" }}>Budget</p>
      <Row>
        <Col>
          <Form.Check
            type="radio"
            label="Up to 100€"
            name="group2"
            id="radio1"
            value={1}
            defaultChecked={true}
            onChange={(event) =>
              setUserData({
                ...userData,
                Budget: parseInt(event.target.value),
              })
            }
          />
          <Form.Check
            type="radio"
            label="100€-300€"
            name="group2"
            id="radio2"
            value={2}
            onChange={(event) =>
              setUserData({
                ...userData,
                Budget: parseInt(event.target.value),
              })
            }
          />
          <Form.Check
            type="radio"
            label="300€-500€"
            name="group2"
            id="radio3"
            value={3}
            onChange={(event) =>
              setUserData({
                ...userData,
                Budget: parseInt(event.target.value),
              })
            }
          />
        </Col>
        <Col>
          <Form.Check
            type="radio"
            label="500€-1000€"
            name="group2"
            id="radio4"
            value={4}
            onChange={(event) =>
              setUserData({
                ...userData,
                Budget: parseInt(event.target.value),
              })
            }
          />

          <Form.Check
            type="radio"
            label="1000€-2000€"
            name="group2"
            id="radio5"
            value={5}
            onChange={(event) =>
              setUserData({
                ...userData,
                Budget: parseInt(event.target.value),
              })
            }
          />
          <Form.Check
            type="radio"
            label="2000€ & above"
            name="group2"
            id="radio6"
            value={6}
            onChange={(event) =>
              setUserData({
                ...userData,
                Budget: parseInt(event.target.value),
              })
            }
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Budget;
